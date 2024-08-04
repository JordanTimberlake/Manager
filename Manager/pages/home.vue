<script setup>
import { onMounted } from 'vue';
import { DataSet, Network } from 'vis-network/standalone';
import Spinner from '~/components/Spinner.vue';
import EditEmployee from '~/components/EditEmployee.vue';
import Popover from 'primevue/popover';
import InputGroup from 'primevue/inputgroup';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import ToggleButton from 'primevue/togglebutton';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import FileUpload from 'primevue/fileupload';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

// APEXCHARTSjs

definePageMeta({
    title: 'Home',
    description: 'Home page description',
    // middleware: 'auth',
});

const user_id = useCookie('user_id');
const csrfToken = useCookie('token');

const loading = ref(false);
const submit = ref(false);
const employeeData = ref(null);
const managerData = ref(null);
const showModal = ref(false);
const currentNode = ref({});
const checked = ref(false)
const managers = ref([]);
const toast = useToast()

const employeeFetch = async () => {
    loading.value = true;
    try {
        const data = await $fetch('http://localhost:8000/api/employees/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken.value || '', // csrfToken.value
            },
            credentials: 'include', // Ensure cookies are included in the request
        });
        employeeData.value = data.data
        console.log(employeeData.value)
    } catch (e) {
        console.error('Failed to fetch employees', e);
    }
}

const managersFetch = async () => {
    try {
        const data = await $fetch('http://localhost:8000/api/managers/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken.value || '', // csrfToken.value
            },
            credentials: 'include',
        });
        managerData.value = data.data
        console.log(managerData.value)
    } catch (e) {
        console.error('Failed to fetch employees', e);
    }
    loading.value = false;
}

const nodeBGpicker = (employeeRole) => {
    if (employeeRole === 'CEO') {
        return '#D7263D' // Crimson Red
    } else if (employeeRole === 'Manager') {
        return '#F46036' // Giants Orange
    } else {
        return '#DDF45B'
    }
}

const checkLogin = () => {
    if (user_id.value === '') {
        router.push('/login');
    }
}

onMounted(async () => {
    // await checkLogin();

    await employeeFetch();
    await managersFetch();

    // Filter and format managers
    managers.value = employeeData.value
        .filter(employee => employee.is_Manager)
        .map(manager => ({
            label: `${manager.user.first_name} ${manager.user.last_name}`,
            value: manager.e_id
        }));

    const employeeNodes = new DataSet(
        employeeData.value.map((employee) => {
            const manager = managerData.value.find(manager => manager.id === employee.line_Manager)
            
            let managerName = '';
            let manager_e_id = null;
            if(manager){
                managerName = employeeData.value.find(emp => emp.e_id === manager.e_id).user.first_name + ' ' + employeeData.value.find(emp => emp.e_id === manager.e_id).user.last_name
                manager_e_id = employeeData.value.find(emp => emp.e_id === manager.e_id).e_id
            }

            return {
                id: employee.e_id,
                u_id: employee.user.id,
                first_name: employee.user.first_name,
                last_name: employee.user.last_name,
                position: employee.position,
                salary: employee.salary,
                line_manager: manager_e_id,
                line_manager_Name: managerName,
                is_manager: employee.is_Manager,
                label: `${employee.user.first_name} ${employee.user.last_name} \n ${employee.position} \n ${employee.salary}`,
                shape: 'circularImage',
                image: '/images/media/default.png',
                size: 32,
                color: {
                    border: '#2B7CE9',
                    background: nodeBGpicker(employee.position),
                    highlight: {
                        border: '#2B7CE9',
                        background: '#D2E5FF',
                    },
                    hover: {
                        border: '#2B7CE9',
                        background: '#D2E5FF',
                    },
                },
                font: {
                    size: 14, // Size of the label text
                    face: 'Tahoma', // Font face
                    align: 'center',
                    color: '#FFFFFF', // Label color
                },
                borderWidth: 2,
            }
        })
    );

    console.log("Employee Nodes:", employeeNodes.get());

    const employeeEdges = new DataSet(
        employeeData.value
            .filter((employee) => employee.line_Manager !== null)
            .map((employee) => {
                // Find the corresponding manager's e_id using the managerData
                const manager = managerData.value.find(manager => manager.id === employee.line_Manager);
                return {
                    from: manager.e_id, // Use the manager's e_id
                    to: employee.e_id,
                };
            })
    );


    console.log("Employee Edges:", employeeEdges.get());

    const container = document.getElementById('network');
    const data = { nodes: employeeNodes, edges: employeeEdges };
    const options = {
        layout: {
            hierarchical: {
                direction: 'UD', // 'UD' for up-down, 'LR' for left-right
                sortMethod: 'directed',
            },
        },
        physics: true,
        // interaction: { hover: true },
        // manipulation: {
        //     enabled: true
        // }
    };

    var network = new Network(container, data, options);

    network.on('click', function (params) {
        if (params.nodes.length > 0) {
            const nodeId = params.nodes[0];
            const nodeData = employeeNodes.get(nodeId);
            console.log(nodeData);
            showEditModal(nodeData);
        }
    });


    console.log(user_id.value);

});

const router = useRouter()

const showEditModal = (nodeData) => {
    currentNode.value = { ...nodeData };
    showModal.value = true;
};

const hideEditModal = () => {
    showModal.value = false;
};

const updateEmployee = async () => {
    submit.value = true;
    try {
        const updatedEmployee = {
            e_id: currentNode.value.id,
            u_id: currentNode.value.u_id,
            first_name: currentNode.value.first_name,
            last_name: currentNode.value.last_name,
            position: currentNode.value.position,
            salary: currentNode.value.salary,
            birth_date: currentNode.value.birth_date,
            hired_date: currentNode.value.hired_date,
            line_manager: currentNode.value.line_Manager,
            is_manager: currentNode.value.is_Manager,
        };
        console.log(updatedEmployee);
        await $fetch(`http://localhost:8000/api/employee/update/${currentNode.value.u_id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken.value || '',
            },
            credentials: 'include',
            body: JSON.stringify(updatedEmployee),
        });
        showModal.value = false;
        await employeeFetch();  // Refresh employee data
    } catch (e) {
        console.error('Failed to update employee', e);
    }
    submit.value = false;
    show();
};

const show = () => {
    toast.add({ severity: 'info', summary: 'Success', detail: 'Employee Updated', life: 3000 })
}

</script>

<template>
    <div class="h-screen">
        <Toast />
        <div class="text-center p-3">
            <h1 class="font-bold text-3xl">Employee Hierarchy</h1>
        </div>
        <div v-if="loading">
            <div class="flex justify-center items-center h-full">
                <Spinner />
            </div>
        </div>
        <div v-else>
            <div id="network"></div>
        </div>
        <div v-if="showModal" class="modal">
            <div class="modal-content my-4">
                <div class="flex flex-row justify-between items-center py-1 ">
                    <span class="close " @click="hideEditModal">&times;</span>
                </div>
                <div class="flex flex-col gap-2">
                    <FileUpload ref="fileupload" mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" />
                    <div class="input">
                        <label for="e_id">Employee ID</label>
                        <InputNumber fluid id="e_id" label="e_id" v-model="currentNode.id" />
                    </div>
                    <div class="input">
                        <label for="first_name">First Name</label>
                        <InputText id="first_name" label="First Name" v-model="currentNode.first_name" />
                    </div>
                    <div class="input">
                        <label for="last_name">Last Name</label>
                        <InputText id="last_name" label="Last Name" v-model="currentNode.last_name" />
                    </div>
                    <div class="input">
                        <label for="position">Position</label>
                        <InputText id="position" label="Position" v-model="currentNode.position" />
                    </div>
                    <div class="input">
                        <label for="salary">Salary</label>
                        <InputNumber fluid id="salary" label="Salary" v-model="currentNode.salary" />
                    </div>
                    <div class="input">
                        <label for="birth_date">Birth Date</label>
                        <DatePicker v-model="currentNode.birth_date" id="birth_date" dateFormat="yy/mm/dd" />
                    </div>
                    <div class="input">
                        <label for="line_Manager">Line Manager</label>
                        <Select showClear v-model="currentNode.line_Manager" :options="managers" optionLabel="label"
                            optionValue="value" :placeholder="currentNode.line_manager_Name" />
                    </div>
                    <div class="input">
                        <label for="is_Manager">Manager</label>
                        <ToggleButton v-model="currentNode.is_manager" :invalid="!checked" class="w-full"
                            aria-label="Confirmation" />
                    </div>
                    <div class="input">
                        <Button type="button" label="Update Employee" @click="updateEmployee">
                            <div v-if="submit">
                                <Spinner />
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal {
    position: fixed;
    top: 3rem;
    right: 4rem;
    margin-left: 190px;
}

.input {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

#network {
    background-color: #124559e0;
    border-radius: 20px;
    width: 80%;
    height: 80vh;
    margin: 0 auto;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: #124559;
    text-decoration: none;
    cursor: pointer;
}

.modal-content {
    padding: 1rem;
    background-color: rgb(39, 39, 39);
    border-radius: 15px;
}
</style>

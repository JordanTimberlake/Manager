<script setup>
import { onMounted } from 'vue';
import { DataSet, Network } from 'vis-network/standalone';
import Spinner from '~/components/Spinner.vue';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import ToggleButton from 'primevue/togglebutton';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import FileUpload from 'primevue/fileupload';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import Button from 'primevue/button';
import Password from 'primevue/password';

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
const toast = useToast();
const deleteE = ref(false);
const addModal = ref(false);
const profilePicture = ref("/images/media/default.png");

const employeeFetch = async () => {
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

const createCanvas = () => {
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
            if (manager) {
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
                label: `${employee.user.first_name} ${employee.user.last_name} \n ${employee.position} \n R${employee.salary}`,
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
    };

    var network = new Network(container, data, options);

    network.on('click', function (params) {
        if (params.nodes.length > 0) {
            const nodeId = params.nodes[0];
            const nodeData = employeeNodes.get(nodeId);
            checked.value = nodeData.is_manager;
            console.log(checked.value);
            console.log(nodeData);
            showEditModal(nodeData);
        }
    });
}

onMounted(async () => {
    // await checkLogin();

    loading.value = true
    await employeeFetch();
    await managersFetch();
    loading.value = false

    createCanvas();


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

const showAddModal = () => {
    addModal.value = true;
}

const hideAddModal = () => {
    addModal.value = false;
};

const formatDate = (birth_date) => {
    if (birth_date) {
        const date = new Date(birth_date);
        const formattedDate = date.toISOString().split('T')[0];

        console.log('Formatted Date:', formattedDate);
        birth_date = formattedDate;
    }
};

const newEmployee = ref({
    e_id: null,
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    position: '',
    birth_date: '',
    salary: 0,
    is_manager: false,
    line_manager: null,
    gravatar_url: profilePicture.value,
})


const createEmployee = async () => {
    submit.value = true;
    newEmployee.value.birth_date = formatDate(newEmployee.value.birth_date);
    console.log(JSON.stringify(newEmployee))
    try {
        await $fetch(`http://localhost:8000/api/employee/create/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken.value || '',
            },
            credentials: 'include',
            body: JSON.stringify({
                e_id: newEmployee.value.e_id,
                first_name: newEmployee.value.first_name,
                last_name: newEmployee.value.last_name,
                email: newEmployee.value.email,
                password: newEmployee.value.password,
                position: newEmployee.value.position,
                birth_date: newEmployee.value.birth_date,
                salary: newEmployee.value.salary,
                line_manager: newEmployee.value.line_manager,
                is_manager: newEmployee.value.is_manager,
                gravatar_url: newEmployee.value.gravatar_url
            }),
        });
        console.log(JSON.stringify(newEmployee))
        showModal.value = false;
        createCanvas();
        setInterval(() => {
            show("Created Employee", true);
        }, 3000)
        window.location.reload(true)
    } catch (e) {
        console.error('Failed to update employee', e);
        show("Failed to update Employee", false)
    }
    submit.value = false;
};


const updateEmployee = async () => {
    submit.value = true;
    currentNode.value.birth_date = formatDate(currentNode.value.birth_date);
    try {
        const updatedEmployee = {
            e_id: currentNode.value.id,
            u_id: currentNode.value.u_id,
            first_name: currentNode.value.first_name,
            last_name: currentNode.value.last_name,
            position: currentNode.value.position,
            salary: currentNode.value.salary,
            birth_date: currentNode.value.birth_date,
            line_manager: currentNode.value.line_Manager,
            is_manager: checked.value,
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
        employeeFetch();  // Refresh employee data
        createCanvas();
        setInterval(() => {
            show("Updated Employee", true);
        }, 3000)
        window.location.reload(true)
    } catch (e) {
        console.error('Failed to update employee', e);
        show("Failed to update Employee", false)
    }
    submit.value = false;
};

const deleteEmployee = async () => {
    deleteE.value = true;
    const updatedEmployee = {
        u_id: currentNode.value.u_id,
    };
    try {
        await $fetch(`http://localhost:8000/api/employee/delete/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken.value || '',
            },
            credentials: 'include',
            body: JSON.stringify(updatedEmployee),
        });
        showModal.value = false;
        employeeFetch();  // Refresh employee data
        createCanvas();
        setInterval(() => {
            show("Deleted Employee", true);
        }, 3000)
        window.location.reload(true)
    } catch (e) {
        console.error('Failed to update employee', e);
        show("Failed to update Employee", false)
    }
    deleteE.value = false;
}

const show = (e, status) => {
    if (status) {
        toast.add({ severity: 'info', summary: 'Success', detail: e, life: 3000 })
    } else {
        toast.add({ severity: 'error', summary: 'Failed', detail: e, life: 3000 })
    }
}
</script>

<template>
    <div class="h-screen">
        <Toast />
        <div class="text-center p-3">
            <h1 class="font-bold text-3xl">Employee Hierarchy</h1>
        </div>
        <div class="fixed top-2 right-2">
            <Button raised rounded @click="showAddModal">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
                </svg>
            </Button>
        </div>
        <div v-if="addModal" class="modal">
            <div class="modal-content my-4">
                <div class="flex flex-row justify-between items-center py-1 ">
                    <span class="close " @click="hideAddModal">&times;</span>
                </div>
                <div class="flex flex-row gap-2">
                    <div class="col-span-1">
                        <div class="input">
                            <label for="e_id">Employee ID</label>
                            <InputNumber :useGrouping="false" fluid id="e_id" label="e_id" v-model="newEmployee.e_id" />
                        </div>
                        <div class="input">
                            <label for="first_name">First Name</label>
                            <InputText id="first_name" label="First Name" v-model="newEmployee.first_name" />
                        </div>
                        <div class="input">
                            <label for="last_name">Last Name</label>
                            <InputText id="last_name" label="Last Name" v-model="newEmployee.last_name" />
                        </div>
                        <div class="input">
                            <label for="email">Email</label>
                            <InputText id="email" label="Email" v-model="newEmployee.email" />
                        </div>
                        <div class="input">
                            <label for="password">Password</label>
                            <Password v-model="newEmployee.password" toggleMask />
                        </div>
                    </div>
                    <div class="col-span-1">
                        <div class="input">
                            <label for="position">Position</label>
                            <InputText id="position" label="Position" v-model="newEmployee.position" />
                        </div>
                        <div class="input">
                            <label for="salary">Salary</label>
                            <InputNumber prefix="R" fluid id="salary" label="Salary" v-model="newEmployee.salary" />
                        </div>
                        <div class="input">
                            <label for="birth_date">Birth Date</label>
                            <DatePicker v-model="newEmployee.birth_date" id="birth_date" dateFormat="yy/mm/dd" />
                        </div>
                        <div class="input">
                            <label for="line_Manager">Line Manager</label>
                            <Select showClear v-model="newEmployee.line_manager" :options="managers" optionLabel="label"
                                optionValue="value" :placeholder="currentNode.line_manager_Name" />
                        </div>
                        <div class="input">
                            <label for="is_Manager">Manager</label>
                            <ToggleButton v-model="newEmployee.is_manager" class="w-full" aria-label="Confirmation" />
                        </div>
                    </div>
                    <div class="input">
                        <Button class="w-28" type="button" label="Create Employee" @click="createEmployee">
                            <div v-if="submit">
                                <Spinner />
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="loading">
            <div class="flex justify-center items-center h-full">
                <Spinner />
            </div>
        </div>
        <div v-show="!loading">
            <div id="network"></div>
        </div>
        <div v-if="showModal" class="modal">
            <div class="modal-content my-4">
                <div class="flex flex-row justify-between items-center py-1 ">
                    <span class="close " @click="hideEditModal">&times;</span>
                </div>
                <div class="flex flex-col gap-2">
                    <FileUpload ref="fileupload" mode="basic" name="demo[]" url="/api/upload" accept="image/*"
                        :maxFileSize="1000000" />
                    <div class="input">
                        <label for="e_id">Employee ID</label>
                        <InputNumber :useGrouping="false" fluid id="e_id" label="e_id" v-model="currentNode.id" />
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
                        <InputNumber prefix="R" fluid id="salary" label="Salary" v-model="currentNode.salary" />
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
                        <ToggleButton v-model="checked" class="w-full" aria-label="Confirmation" />
                    </div>
                    <div class="input">
                        <Button type="button" label="Update Employee" @click="updateEmployee">
                            <div v-if="submit">
                                <Spinner />
                            </div>
                        </Button>
                    </div>
                    <div class="input">
                        <Button severity="danger" type="button" label="Delete Employee" @click="deleteEmployee">
                            <div v-if="deleteE">
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
    top: 1rem;
    right: 4rem;
    margin-left: 190px;
    z-index: 10;
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

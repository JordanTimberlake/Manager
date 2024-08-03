<script setup lang="ts">
import { onMounted } from 'vue';
import { DataSet, Network } from 'vis-network/standalone';
import Spinner from '~/components/Spinner.vue';
// APEXCHARTSjs

definePageMeta({
    title: 'Home',
    description: 'Home page description',
    middleware: 'auth',
});

const user_id = useCookie('user_id');
const csrfToken = useCookie('token');

const loading = ref(false);

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
        console.log(data);
    } catch (e) {
        console.error('Failed to fetch employees', e);
    }
    loading.value = false;
}


let employees = [
    {
        id: 1,
        name: 'John',
        surname: 'Doe',
        line_manager: null,
        role: 'CEO',
        image: '/images/CV_PicLQuality.jpg'
    },
    {
        id: 2,
        name: 'Employee 2',
        surname: 'Surname',
        line_manager: 1,
        role: 'Manager',
    },
    {
        id: 3,
        name: 'Employee 3',
        surname: 'Surname',
        line_manager: 1,
        role: 'Manager',
    },
    {
        id: 4,
        name: 'Employee 4',
        surname: 'Surname',
        line_manager: 2,
        role: 'Employee',
    },
    {
        id: 5,
        name: 'Employee 5',
        surname: 'Surname',
        line_manager: 2,
        role: 'Employee',
    },
    {
        id: 6,
        name: 'Employee 6',
        surname: 'Surname',
        line_manager: 3,
        role: 'Employee',
    },
]

const nodeBGpicker = (employeeRole: any) => {
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


    employeeFetch();

    const employeeNodes = new DataSet(
        employees.map((employee) => ({
            id: employee.id,
            label: employee.name,
            shape: 'circularImage',
            image: employee.image || '/images/avatar-solid.png',
            size: 32,
            color: {
                border: '#2B7CE9',
                background: nodeBGpicker(employee.role),
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
        }))
    );

    console.log("Employee Nodes:", employeeNodes.get());

    const employeeEdges = new DataSet(
        employees
        .filter((employee) => employee.line_manager !== null)
        .map((employee) => ({
            from: employee.line_manager,
            to: employee.id,
        }))
    );

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

    try {
        const network = new Network(container, data, options);
    } catch (error) {
        console.error("Error initializing network:", error);
    }
    console.log(user_id.value);
});

const router = useRouter()

const reroute = () => {
    router.push('/employees')
}

</script>

<template>
    <div class="h-screen">
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
    </div>
</template>

<style scoped>
#network {
    border: 1px solid lightgray;
    border-radius: 5px;
    width: 80%;
    height: 80%;
    margin: 0 auto;
}
</style>

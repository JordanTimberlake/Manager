<script setup>
import { ref, onMounted } from 'vue';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import Spinner from '~/components/Spinner.vue';

const toast = useToast();
const router = useRouter();

definePageMeta({
    title: 'Home',
    description: 'Home page description',
    // image: 'https://example.com/image.jpg',
    // url: 'https://example.com',
    keywords: 'sign up, create, an, account, manager',
    layout: 'userauth',
})

useSeoMeta({
    title: 'Create account',
    description: 'Manager account creation page',
})

const csrfToken = useCookie('token');
const user_id = useCookie('user_id');
const loading = ref(false);
const userData = ref({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
})

const handleCreateAccount = async () => {
    loading.value = true;
    if (userData.value.email === '' || userData.value.password === '' || userData.value.first_name === '' || userData.value.last_name === '') {
        alert('Please fill in all fields')
        return
    }

    try {
        const data = await $fetch('http://localhost:8000/api/auth/signup/', {
            method: 'POST',
            body: JSON.stringify({
                first_name: userData.value.first_name,
                last_name: userData.value.last_name,
                email: userData.value.email,
                password: userData.value.password
            }),
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken.value || '', // csrfToken.value
            },
            credentials: 'include', // Ensure cookies are included in the request
        });
        // response.value = data.value.status;
        // console.log(response.value)
        user_id.value = data.user_id;
        loading.value = false;
        router.push('/home');
    } catch (err) {
        'An error occurred';
        console.error('Failed to login', err);
        err.value = 'Failed - Please make sure you have filled in all the input boxes';
        show(err.value);
    }
    loading.value = false;
};

const getCsrfToken = async () => {
    try {
        const { data } = await $fetch('http://localhost:8000/api/token/', {
            method: 'GET',
            credentials: 'include', // Ensure cookies are included in the request
        });
        csrfToken.value = data.csrfToken;
    } catch (err) {
        console.error('Failed to fetch CSRF token', err);
    }
};

const show = (message) => {
    message = message || 'An error occurred';
    toast.add({ severity: 'warn', summary: 'Error', detail: message, life: 5000 });
};

onMounted(() => {
    if (csrfToken.value === '') {
        getCsrfToken();
    }
    console.log('token ', csrfToken.value)
}) 
</script>

<template>
    <div class="userAuth p-10">
        <Toast />
        <div class="w-3/5 mx-auto border border-slate-600 rounded-md p-10">
            <div class="pb-6">
                <h1 class="text-3xl font-semibold text-left">
                    Create an account
                </h1>
                <p class="text-sm">Already have an account? <a class="underline" href="/login">Log in</a></p>
            </div>
            <div class="w-full flex lg:flex-row-reverse flex-col justify-between gap-4">
                <div class="lg:w-1/2 flex flex-col justify-center items-center gap-10">
                    <h1 class="lg:text-3xl font-semibold text-center">
                        Welcome to ManagerOrg
                    </h1>
                    <div v-if="loading" class="w-full flex justify-center items-center">
                        <Spinner />
                    </div>
                </div>
                <form class="lg:w-1/2">
                    <div class="flex flex-row justify-between gap-4">
                        <div class="mb-4">
                            <label for="name" class="block text-sm font-bold mb-2">Name</label>
                            <input type="name" id="name" v-model="userData.first_name" required
                                class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline">
                        </div>
                        <div class="mb-4">
                            <label for="surname" class="block text-sm font-bold mb-2">Surname</label>
                            <input type="surname" id="surname" v-model="userData.last_name" required
                                class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline">
                        </div>
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block text-sm font-bold mb-2">Email</label>
                        <input type="email" id="email" v-model="userData.email" required
                            class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block text-sm font-bold mb-2">Password</label>
                        <input type="password" id="password" v-model="userData.password" required
                            class="shadow appearance-none border border-red rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
                    <div class="flex items-center justify-between">
                        <a href="/login" class="underline">Log in instead</a>
                        <Button rounded class="font-bold py-2 px-4 w-1/2" type="button" @click="handleCreateAccount">
                            Create account
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style></style>
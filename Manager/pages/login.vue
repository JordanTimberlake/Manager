<script setup>
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import Spinner from '~/components/Spinner.vue';

definePageMeta({
    title: 'Home',
    description: 'Home page description',
    // image: 'https://example.com/image.jpg',
    // url: 'https://example.com',
    keywords: 'sign up, create, an, account, manager',
    layout: 'userauth',
})

useSeoMeta({
    title: 'Log in',
    description: 'Manager account creation page',
})

const csrfToken = useCookie('token');
const user_id = useCookie('user_id');
const error = ref(null);
const toast = useToast();
const loading = ref(false);
const router = useRouter();

const userData = ref({
    email: '',
    password: '',
})

const login = async () => {
    loading.value = true;
    try {

        const data = await $fetch('https://vitreous-bert-jordantimberlake-dd542edd.koyeb.app/api/auth/signin/', {
            method: 'POST',
            body: JSON.stringify({
                email: userData.value.email,
                password: userData.value.password
            }),
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken.value || '', // csrfToken.value
            },
            withCredentials: true, // Ensure cookies are included in the request
        });
        console.log(data)
        user_id.value = data.user_id;
        loading.value = false;
        router.push('/home');
    } catch (e) {
        console.error('Failed to login', e);
        error.value = 'Invalid Credentials';
        show(error.value);
    }
    loading.value = false;
}

const getCsrfToken = async () => {
    try {
        const data = await $fetch('https://vitreous-bert-jordantimberlake-dd542edd.koyeb.app/api/token/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true, // Ensure cookies are included in the request
        });
        csrfToken.value = data.csrfToken;
        console.log(data)
    } catch (err) {
        console.error('Failed to fetch CSRF token', err);
    }
};

const show = (message) => {
    message = message || 'An error occurred';
    toast.add({ severity: 'warn', summary: 'Error', detail: message, life: 3000 });
};

onMounted(async () => {
    await getCsrfToken();
    console.log('token ', csrfToken.value)
})

</script>

<template>
    <div class="userAuth p-10">
        <Toast />
        <div class="w-3/5 mx-auto border border-slate-600 rounded-md p-10">
            <div class="pb-6">
                <h1 class="text-3xl font-semibold text-left">
                    Log In
                </h1>
                <p class="text-sm">Don't have an account? <a class="underline" href="/signup">Create an account</a></p>
            </div>
            <div class="w-full flex flex-row justify-between gap-4">
                <form class="w-1/2">
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
                        <a href="/signup" class="underline">Sign up instead</a>
                        <Button rounded  class="font-bold py-2 px-4 w-1/2" type="button" @click="login">
                            Log In
                        </Button>
                    </div>
                </form>
                <div class="w-1/2 flex flex-col justify-start items-center gap-10">
                    <h1 class="text-3xl font-semibold text-center">
                        Welcome to ManagerOrg
                    </h1>
                    <div v-if="loading" class="w-full flex justify-center items-center">
                        <Spinner />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { GravatarQuickEditor } from '@gravatar-com/quick-editor';
import Spinner from '~/components/Spinner.vue';
import CryptoJS from 'crypto-js';

const user_id = useCookie('user_id');
const csrfToken = useCookie('token');
const loading = ref(false);
const CookieEmail = useCookie('email');

const employeeData = ref(null);

const generateHash = (data, algorithm = 'SHA256') => {
    return 'https://gravatar.com/avatar/' + CryptoJS[algorithm](data).toString(CryptoJS.enc.Hex);
}

const employeeFetch = async () => {
    try {
        const data = await $fetch('https://vitreous-bert-jordantimberlake-dd542edd.koyeb.app/api/employees/', {
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

onMounted(async () => {
    loading.value = true;
    await employeeFetch();
    loading.value = false;
});

const initializeGravatarEditor = () => {
    new GravatarQuickEditor({
        email: email.value,
        editorTriggerSelector: '#edit-profile',
        avatarSelector: '#gravatar-avatar',
        scope: ['avatars'],
    });
}

const refresh = () => {
    window.location.reload(true);
}

</script>

<template>
    <div class="h-screen">
        <div v-show="loading">
            <div class="flex justify-center items-center h-full">
                <Spinner />
            </div>
        </div>
        <div v-show="!loading" class="card mt-6">
            <DataTable :value="employeeData" tableStyle="min-width: 50rem">
                <template #header>
                    <div class="flex flex-wrap items-center justify-between gap-2">
                        <span class="text-xl font-bold">Employees</span>
                        <div class="flex gap-4">
                            <Button rounded raised @click="refresh">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M17.65 6.35A7.96 7.96 0 0 0 12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z" />
                                </svg>
                            </Button>
                            <Button rounded raised id="edit-profile" class="btn btn-primary" @click="initializeGravatarEditor">
                                Edit Gravatar
                            </Button>
                        </div>
                    </div>
                </template>
                <Column header="Image">
                    <template #body="slotProps">
                        <a href="">
                            <img :src=generateHash(email) alt="gravatarImage" class="w-24 rounded" />
                        </a>
                    </template>
                </Column>
                <Column field="user.first_name" header="First Name"></Column>
                <Column field="user.last_name" header="Last Name"></Column>
                <Column field="position" header="Position"></Column>
                <Column field="salary" header="Salary"></Column>
                <Column field="birth_date" header="Birth Date"></Column>
            </DataTable>
        </div>
    </div>
</template>

<style></style>
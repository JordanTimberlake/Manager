<script setup>
// const user = useSupabaseUser()
// const session = useSupabaseSession()
import { ref } from "vue";
import Button from 'primevue/button';

import Avatar from 'primevue/avatar';
import Popover from 'primevue/popover';

const router = useRouter();
const user_id = useCookie('user_id');
const csrfToken = useCookie('token');
const email = useCookie('email');

const getUser = async () => {
    try {
        const data = await $fetch(`https://vitreous-bert-jordantimberlake-dd542edd.koyeb.app/api/user/${user_id.value}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken.value || '', // csrfToken.value
            },
            credentials: 'include', // Ensure cookies are included in the request
        });
        console.log(data)
        user.value = data
    } catch (e) {
        console.log(e)
    }
}

const op = ref(null);
const toggle = (event) => {
    op.value.toggle(event);
}

const logout = async () => {
    try {
        const data = await $fetch('https://vitreous-bert-jordantimberlake-dd542edd.koyeb.app/api/auth/signout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken.value || '', // csrfToken.value
            },
            withCredentials: true, // Ensure cookies are included in the request
        });
        email.value = '';
        user_id.value = '';
        csrfToken.value = '';

        router.push('/login');
    } catch (e) {
        console.error('Failed to logout', e);
        e.value = 'Failed to logout';
        show(e.value);
    }
    loading.value = false;
}

const user = ref(null)

onMounted(async () => {
    await getUser();
    email.value = user.value.email;
})
</script>

<template>
    <div class="sidebar">
        <div class="title text-center font-bold md:text-lg">
            <p>EPIUSE Manager</p>
        </div>
        <div class="routes">
            <Button text class="route" as="router-link" label="Router" to="/home">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"></path>
                </svg>
                <p>
                    Home
                </p>
            </Button>
            <Button text class="route" as="router-link" label="Router" to="/employees">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9A3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42c-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.54 5.54 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13zM0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9c-.59.68-.95 1.62-.95 2.65V20zm24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65c2.56.34 4.45 1.51 4.45 2.9z" />
                </svg>
                <p>
                    Employees
                </p>
            </Button>
        </div>
        <div class="profile">
            <div class="divider">
            </div>
            <div class="profileContent" @click="toggle">
                <Avatar image="/images/media/default.png" shape="circle" alt="avatar" />
                <p class="text-center md:text-sm md:contents hidden">
                    {{ user?.username }}
                </p>
            </div>
        </div>
    </div>
    <Popover ref="op">
        <div class="popover">
            <div class="text-slate-400 pb-4">
                <p style="font-size: 12px;">signed in as {{ user.email }}</p>
            </div>
            <Button text class="popoverRoute" @click="logout" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2M7 12l5 5v-3h4v-4h-4V7z" />
                </svg>
                <p>
                    Logout
                </p>
            </Button>
        </div>
    </Popover>
</template>

<style>
.popover {
    padding: 10px;
    color: white;
    border-radius: 12px;
    width: 160px;
    margin-bottom: 10px;
}

.popoverRoute {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    padding: 0.5rem;
    border-radius: 10px;
}

.popoverRoute:hover {
    cursor: pointer;
    background-color: #01161E;
}

.profileContent .p-avatar img {
    object-fit: cover;
    width: 32px;
    height: 32px;
    border-radius: 50%;
}

.divider {
    width: 200px;
    border-bottom: 1px solid #124559bb;
    margin-bottom: 10px;
}

.router-link-active {
    color: #00ff95;
}

.routes {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.route {
    display: flex;
    justify-content: start;
    align-items: center;
    color: white;
    gap: 10px;
}

.routes .route {
    padding: 0.5rem;
    border-radius: 10px;
}

.routes .route:hover {
    cursor: pointer;
    background-color: #124559bb;
}

.profile {
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 10px;
}

.profileContent {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 90%;
    gap: 10px;
    padding: 10px;
}

.profileContent:hover {
    cursor: pointer;
    background-color: #124559bb;
    border-radius: 12px;
}

.sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 230px;
    height: 100%;
    background-color: #01161E;
    color: white;
    padding: 10px;
    border-radius: 0 15px 15px 0;
    /* margin-left: 10px; */
}

@media screen and (max-width: 768px) {
    .routes {
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .route {
        justify-content: center;
        width: 80%;
    }

    .route p {
        display: none;
    }

    .route svg {
        width: 2rem;
        height: 2rem;
    }

    .sidebar {
        width: 100px !important;
    }

    .profile {
        width: 100px !important;
    }

    .profileContent {
        justify-content: center;
        align-content: center;
    }

    .profileContent .p-avatar img {
        width: 50px;
        height: 50px;
    }
}
</style>
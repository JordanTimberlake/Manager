<script setup>
// const user = useSupabaseUser()
// const session = useSupabaseSession()
import { ref } from "vue";

import Avatar from 'primevue/avatar';
import Popover from 'primevue/popover';

const user = ref({
    name: 'Jordan',
    surname: 'Timberlake',
    email: 'jordtimberlake@gmail.com'
})

const op = ref(null);
const toggle = (event) => {
    op.value.toggle(event);
}

</script>

<template>
    <div class="sidebar">
        <div class="title text-center font-bold md:text-lg">
            <p>EPIUSE Manager</p>
        </div>
        <div class="routes">
            <nuxt-link class="route" to="/home">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"></path>
                </svg>
                <p>
                    Home
                </p>
            </nuxt-link>
            <nuxt-link class="route" to="/employees">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9A3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42c-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.54 5.54 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13zM0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9c-.59.68-.95 1.62-.95 2.65V20zm24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65c2.56.34 4.45 1.51 4.45 2.9z" />
                </svg>
                <p>
                    Employees
                </p>
            </nuxt-link>
        </div>
        <div class="profile">
            <div class="routes">
                <nuxt-link class="route" to="/help">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 18h2v-2h-2zm1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-14a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2a2 2 0 0 1 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5a4 4 0 0 0-4-4"/></svg>
                    <p>
                        Help & Support
                    </p>
                </nuxt-link>
            </div>
            <div class="divider">
            </div>
            <div class="profileContent" @click="toggle">
                <Avatar image="/images/CV_PicLQuality.jpg" shape="circle" alt="avatar"/>
                <p class="text-center md:text-lg md:contents hidden">
                    {{user.name }}
                </p>
            </div>
        </div>
    </div>
    <Popover ref="op">
        <div class="popover">
            <div class="text-slate-400 pb-4">
                <p style="font-size: 12px;">signed in as {{ user.email }}</p>
            </div>
            <nuxt-link class="popoverRoute" to="/profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg>
                <p>
                    Profile
                </p>
            </nuxt-link>
            <nuxt-link class="popoverRoute" to="/settings">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64z"/></svg>
                <p>
                    Settings
                </p>
            </nuxt-link>
            <nuxt-link class="popoverRoute" to="/logout">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"><path fill="currentColor" d="M21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2M7 12l5 5v-3h4v-4h-4V7z"/></svg>
                <p>
                    Logout
                </p>
            </nuxt-link>
        </div>
    </Popover>
</template>

<style>
.popover {
    padding: 10px;
    background-color: var(--secondary-bg);
    color: var(--primary-text);
    border-radius: 12px;
    width: 160px;
    margin-bottom: 10px;
}

.popoverRoute {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0.5rem;
    border-radius: 10px;
}

.popoverRoute:hover {
    cursor: pointer;
    background-color: var(--primary-bg);
}

.profileContent .p-avatar img {
    object-fit: cover;
    width: 32px;
    height: 32px;
    border-radius: 50%;
}

.divider {
    width: 100%;
    border-bottom: 1px solid var(--hover);
    margin-bottom: 10px;
}

.router-link-active {
    color: var(--accent);
}

.routes {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.route {
    display: flex;
    align-items: center;
    gap: 10px;
}

.routes .route {
    padding: 0.5rem;
    border-radius: 10px;
}

.routes .route:hover {
    cursor: pointer;
    background-color: var(--hover);
}

.profile {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 180px;
    padding: 10px;
    margin-left: 10px;
}

.profileContent {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
}

.profileContent:hover {
    cursor: pointer;
    background-color: var(--hover);
    border-radius: 12px;
}

.sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 180px;
    height: 100%;
    background-color: var(--primary-bg);
    color: var(--primary-text);
    padding: 10px;
    border-radius: 12px;
    margin-left: 10px;
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
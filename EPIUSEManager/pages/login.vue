<script setup lang="ts">
definePageMeta({
    title: 'Home',
    description: 'Home page description',
    // image: 'https://example.com/image.jpg',
    // url: 'https://example.com',
    keywords: 'sign up, create, an, account, epiuse, manager',
    layout: 'userauth',
})

let userData = {
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
}
</script>

<template>
    <!-- <div>
        <h1>Color mode: {{ $colorMode.value }}</h1>
        <select v-model="$colorMode.preference">
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="sepia">Sepia</option>
        </select>
    </div> -->
    <div class="userAuth p-10">
        <div class="w-3/5 mx-auto border border-slate-600 rounded-md p-10">
            <div class="pb-6">
                <h1 class="text-3xl font-semibold text-left">
                    Log In
                </h1>
                <p class="text-sm">Don't have an account? <a class="underline" href="/">Create an account</a></p>
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
                        <a href="/" class="underline">Sign up instead</a>
                        <button class="font-bold py-2 px-4 rounded-full w-1/2 focus:outline-none focus:shadow-outline"
                            style="background-color: var(--accent);" type="button">
                            Log In
                        </button>
                    </div>
                </form>
                <div class="w-1/2 flex flex-col justify-start items-center gap-10">
                    <img class="w-full h-fit"
                        src="https://8124098.fs1.hubspotusercontent-na1.net/hub/8124098/hubfs/EU%20Theme/EPI-USE-logo.png?width=1707&height=442&name=EPI-USE-logo.png"
                        alt="epiuselogo" />
                    <h1 class="text-3xl font-semibold text-center">
                        Welcome to EPIUSE Manager
                    </h1>
                </div>
            </div>
        </div>
    </div>
</template>
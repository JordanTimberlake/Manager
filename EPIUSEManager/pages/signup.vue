<script setup>

definePageMeta({
    title: 'Home',
    description: 'Home page description',
    // image: 'https://example.com/image.jpg',
    // url: 'https://example.com',
    keywords: 'sign up, create, an, account, epiuse, manager',
    layout: 'userauth',
})

useSeoMeta({
  title: 'Create account',
  description: 'EPIUSE manager account creation page',
})

const supabase = useSupabaseClient()

const userData = ref({
    name: '',
    surname: '',
    email: '',
    password: '',
})


// const setKey = (key, value) => {
//     useState('apikey', value)
// }

const colorMode = useColorMode()
// how to change color mode

// <div>
//     <h1>Color mode: {{ $colorMode.value }}</h1>
//     <select v-model="$colorMode.preference">
//         <option value="system">System</option>
//         <option value="light">Light</option>
//         <option value="dark">Dark</option>
//         <option value="sepia">Sepia</option>
//     </select>
// </div>

const handleCreateAccount = async () => {
    if(userData.value.email === '' || userData.value.password === '' || userData.value.name === '' || userData.value.surname === '') {
        alert('Please fill in all fields')
        return
    }
    try {
        loading.value = true
        const { error } = await supabase.auth.signUp({
            email: userData.email,
            password: userData.password,
        })
        if (error) throw error
        alert('Account created successfully!')
        
    } catch (error) {
        alert(error.error_description || error.message)
    } finally {
        loading.value = false
    }
}

</script>

<template>
    <div class="userAuth p-10">
        <div class="w-3/5 mx-auto border border-slate-600 rounded-md p-10">
            <div class="pb-6">
                <h1 class="text-3xl font-semibold text-left">
                    Create an account
                </h1>
                <p class="text-sm">Already have an account? <a class="underline" href="/login">Log in</a></p>
            </div>
            <div class="w-full flex lg:flex-row-reverse flex-col justify-between gap-4">
                <div class="lg:w-1/2 flex flex-col justify-center items-center gap-10">
                    <img class="w-full h-fit"
                        src="https://8124098.fs1.hubspotusercontent-na1.net/hub/8124098/hubfs/EU%20Theme/EPI-USE-logo.png?width=1707&height=442&name=EPI-USE-logo.png"
                        alt="epiuselogo" />
                    <h1 class="lg:text-3xl font-semibold text-center">
                        Welcome to EPIUSE Manager
                    </h1>
                </div>
                <form class="lg:w-1/2">
                    <div class="flex flex-row justify-between gap-4">
                        <div class="mb-4">
                            <label for="name" class="block text-sm font-bold mb-2">Name</label>
                            <input type="name" id="name" v-model="userData.name" required
                                class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline">
                        </div>
                        <div class="mb-4">
                            <label for="surname" class="block text-sm font-bold mb-2">Surname</label>
                            <input type="surname" id="surname" v-model="userData.surname" required
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
                        <button
                            @click="handleCreateAccount"
                            class="font-bold py-2 px-4 rounded-full w-1/2 focus:outline-none focus:shadow-outline" style="background-color: var(--accent);"
                            type="button">
                            Create account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style>
</style>
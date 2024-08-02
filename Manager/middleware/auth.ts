const user_id = useCookie('user_id')
const csrf_token = useCookie('csrf_token')
const router = useRouter()

export default defineNuxtRouteMiddleware((to, from) => {
    if (user_id.value && csrf_token.value) {
        return router.push('/login')
    }
})

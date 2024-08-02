<script>
const router = useRouter();

export default {
  async asyncData({ $auth }) {
    await $auth.logout();
    router.push('/login');
  },
};
</script>

<template>

</template>
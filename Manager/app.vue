<script setup>
useHead({
  title: 'Manager',
  meta: [
    { name: 'description', content: 'Manager' }
  ],
  importScripts: [
    { src: 'https://secure.gravatar.com/js/gprofiles.js' }
  ]
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
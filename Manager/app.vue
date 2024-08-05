<script setup>
useHead({
  title: 'Manager',
  meta: [
    { name: 'description', content: 'Manager' }
  ],
  importScripts: [
    { src: 'https://secure.gravatar.com/js/gprofiles.js' },
    { src: 'https://unpkg.com/@gravatar-com/quick-editor@x.x.x'}
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
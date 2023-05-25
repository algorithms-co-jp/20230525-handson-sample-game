<script setup lang="ts">
// no index
useHead({
  meta: [
    {
      name: "robots",
      content: "noindex"
    }
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

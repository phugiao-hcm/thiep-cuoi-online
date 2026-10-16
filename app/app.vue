<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => titleChunk ? `${titleChunk} — Mộc Thiệp` : 'Mộc Thiệp — Thiệp cưới online tinh tế',
})
</script>

<template>
  <div class="app-shell">
    <SiteHeader />
    <NuxtPage />
    <SiteFooter />
  </div>
</template>

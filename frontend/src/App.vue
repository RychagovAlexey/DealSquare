<script setup lang="ts">
  import { DefaultLayout } from '@/components/layouts/default-layout'
</script>

<template>
  <Suspense>
    <DefaultLayout>
      <router-view />
    </DefaultLayout>
  </Suspense>
</template>

<script setup lang="ts">
  import { MainHeader } from './components/main-header'
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar :flat="false">
      <MainHeader />
    </v-app-bar>

    <v-main class="d-flex align-center justify-center">
      <v-container>
        <slot></slot>
      </v-container>
    </v-main>
  </v-layout>
</template>

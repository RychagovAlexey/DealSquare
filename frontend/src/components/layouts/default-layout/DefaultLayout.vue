<script setup lang="ts"></script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar flat="false">
      <v-container>
        <div style="flex-basis: 100%;">
          
        </div>
      </v-container>
    </v-app-bar>

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <slot></slot>
    </v-main>
  </v-layout>
</template>

<style scoped lang="scss"></style>

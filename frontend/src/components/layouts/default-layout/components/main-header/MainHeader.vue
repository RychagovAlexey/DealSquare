<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  defineProps<{
    height?: string
    heightLine?: string
  }>()
  const headerNavigation = ref([
    {
      title: 'Marketplace',
      value: '/',
    },
    {
      title: 'About Us',
      value: '/about-us',
    },
  ])
  const route = useRoute()
  const router = useRouter()
  const activeTab = ref(route.path)

  watch(
    () => route.path,
    newPath => {
      activeTab.value = newPath
    }
  )

  const changeRoute = (value: unknown): any => {
    router.push(value as string)
  }
</script>

<template>
  <v-container>
    <div
      style="flex-basis: 100%"
      class="d-flex align-center justify-space-between"
    >
      <div class="d-flex align-center">
        <img src="/public/deals-logo.svg" />
        <p class="text-primary text-h5 font-weight-black ml-2 mr-7">
          Deal Square
        </p>
        <v-tabs
          v-model="activeTab"
          selected-class="text-primary"
          @update:model-value="changeRoute"
        >
          <v-tab
            v-for="item in headerNavigation"
            :key="item.title"
            :height="height"
            style="opacity: 1"
            :class="`tabs px-3 pb-${
              heightLine ? heightLine : '5'
            } text-button text-capitalize ${$attrs.class}`"
            variant="plain"
            :ripple="false"
            :value="item.value"
          >
            {{ item.title }}
          </v-tab>
        </v-tabs>
      </div>
      <v-avatar>user name</v-avatar>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
  .tabs {
    :deep(.v-tab__slider) {
      margin-left: auto;
      margin-right: auto;
      width: 70%;
      left: 0;
      right: 0;
      height: 4px;
      border-radius: 7px;
      top: 48px;
    }

    :deep(.v-btn__content) {
      font-size: 16px;
      font-weight: 700;
    }
  }
  .tabs-container {
    :deep(.v-slide-group) {
      overflow: visible !important;
    }
    :deep(.v-slide-group__container) {
      overflow: visible !important;
      contain: none !important;
    }
  }
</style>

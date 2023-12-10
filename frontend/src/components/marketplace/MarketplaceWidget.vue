<script setup lang="ts">
  import { computed, ref } from 'vue'

  const searchQuery = ref('')
  const products = ref([
    {
      id: 1,
      name: 'Товар 1',
      description: 'Описание товара 1',
      img: 'https://images.unsplash.com/photo-1701532546697-638c74b97022?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      name: 'Товар 2',
      description: 'Описание товара 2',
      img: 'https://images.unsplash.com/photo-1701532546697-638c74b97022?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ])
  const filteredProducts = computed(() =>
    products.value.filter(product =>
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  )
</script>

<template>
  <div>
    <v-container>
      <v-text-field
        v-model="searchQuery"
        label="search"
        append-icon="mdi-magnify"
        class="mb-10"
        variant="outlined"
      ></v-text-field>

      <div class="item-grid">
        <v-card
          v-for="item in filteredProducts"
          :key="item.id"
          :title="item.name"
          :text="item.description"
        >
          <img
            :src="item.img"
            style="height: 100px; width: 100px"
          />
          <v-card-actions>
            <v-btn>some action</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
  .item-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }
</style>

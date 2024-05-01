<template>
  <div class="favorites-list__item">
    <img @click="downloadImage" :src="src" alt="" />
    <div class="favorites-list__btn-group">
      <DeleteFavorite :id="id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import DeleteFavorite from '../../../features/Favorites/ui/deleteFavorite.vue'
import { createSaveLink } from '../../../shared'

const { src } = defineProps<{
  id: string
  src: string
}>()

const downloadImage = () => {
  createSaveLink(src, 'avatar', 'png')
}
</script>

<style lang="scss" scoped>
.favorites-list__item {
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  img {
    width: 220px;
    aspect-ratio: 1;
    display: block;
  }
}
.favorites-list__btn-group {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 18px;
}
</style>

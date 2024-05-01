<template>
  <div class="favorites">
    <div v-if="favorites && favorites.length" class="favorites__list">
      <FavoritesItem v-for="f of favorites" :key="f.id" :id="f.id" :src="f.src" />
    </div>
    <b class="favorites__empty" v-else>У вас пока нет избранных :(</b>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { FavoritesModel } from '../../../features/Favorites'
import FavoritesItem from './item.vue'

const favoritesStore = FavoritesModel()

const { favorites } = storeToRefs(favoritesStore)
</script>

<style lang="scss" scoped>
.favorites {
  max-width: 1180px;
  margin-inline: auto;
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  &__empty {
    font-size: 48px;
    color: var(--white);
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

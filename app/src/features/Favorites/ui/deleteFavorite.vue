<template>
  <Button :onClick="handleClick">Удалить</Button>
</template>

<script setup lang="ts">
import { Button } from '../../../shared'
import { FavoritesModel } from '../model'

const { id } = defineProps<{
  id: string
}>()

const favoritesStore = FavoritesModel()

const handleClick = () => {
  favoritesStore.deleteFavorite(id)
}
</script>

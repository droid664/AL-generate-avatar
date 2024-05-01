<template>
  <Button :onClick="handleClick">
    <img src="/icons/trash.svg" alt="удалить" />
    Удалить
  </Button>
</template>

<script setup lang="ts">
import { Button } from '../../../shared'
import { FavoritesModel } from '../model'

const { id } = defineProps<{
  id: string
}>()

const favoritesStore = FavoritesModel()

const handleClick = () => {
  const isConfirm = confirm('Вы действительно хотите удалить изображение?')

  if (!isConfirm) return

  favoritesStore.deleteFavorite(id)
}
</script>

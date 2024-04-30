<template>
  <Button :onClick="handleClick">в избранное</Button>
</template>

<script lang="ts" setup>
import { Button } from '../../../shared'
import { FavoritesModel } from '../model'

const favoritesModel = FavoritesModel()

const { getBase64 } = defineProps<{
  getBase64: () => string
}>()

const handleClick = () => {
  const base64 = getBase64()
  favoritesModel.addFavorite(base64)
}
</script>

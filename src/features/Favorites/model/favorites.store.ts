import { nanoid } from 'nanoid'
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface IFavorite {
  id: string
  src: string
}

export const useFavorites = defineStore(
  'favorites',
  () => {
    const favorites = ref<IFavorite[]>([])

    const addFavorite = (imageBase64: string) => {
      favorites.value.push({
        id: nanoid(),
        src: imageBase64,
      })

      alert('Аватар добавлен в избранное!')
    }

    const deleteFavorite = (id: string) => {
      favorites.value = favorites.value.filter((favorite) => favorite.id !== id)
    }

    return {
      favorites,
      addFavorite,
      deleteFavorite,
    }
  },
  {
    persist: {
      storage: localStorage,
      paths: ['favorites'],
    },
  },
)

<template>
  <div class="index-page">
    <GenerateAvatar />
  </div>
</template>

<script setup lang="ts">
import { GenerateAvatar } from '../../../widgets/GenereateAvatar'
</script>

<style lang="scss" scoped>
.index-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

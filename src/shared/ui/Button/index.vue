<template>
  <button
    @click="onClick"
    :class="[modClass ? `button--${modClass}` : '']"
    class="button"
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
interface IProps {
  modClass?: 'danger'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: (e: MouseEvent) => void
}

const { modClass, type, onClick } = withDefaults(defineProps<IProps>(), {
  type: 'button',
})
</script>

<style lang="scss" scoped>
.button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding-inline: 12px;
  height: 28px;
  border-radius: 4px;
  border: 2px solid var(--white);
  background: var(--black);
  color: var(--white);
  font-size: 16px;
  text-transform: lowercase;
  cursor: pointer;
  &--danger {
    background: var(--orange);
    border: none;
  }
}
</style>

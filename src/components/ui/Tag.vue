<script setup>
defineProps({
  color: { type: String, default: 'orange' },
  label: { type: String, required: true }
});
</script>

<template>
  <a-tag :color="color" class="!flex !items-center !gap-1">
    <template #icon v-if="$slots.icon">
      <slot name="icon" />
    </template>
    {{ label }}
  </a-tag>
</template>
<script setup>
defineProps({
  direction: {
    type: String,
    default: 'vertical',
  },
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    default: 'success',
  }
})
</script>
<template>
  <a-space :direction="direction" class="w-100">
    <a-alert :message="message" :type="type" show-icon/>
  </a-space>
</template>
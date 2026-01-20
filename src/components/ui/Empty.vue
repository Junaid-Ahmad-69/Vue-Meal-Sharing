<script setup>
defineProps({
  description: {
    required: true,
    type: String,
  }
})
</script>
<template>
  <a-empty :description="description" />
</template>
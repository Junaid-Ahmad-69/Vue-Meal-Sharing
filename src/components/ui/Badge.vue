<script setup>
defineProps({
  color: {
    required: true,
    type: String,
  },
  text: {
    required: true,
    type: String,
  },
})
</script>
<template>
  <a-badge :count="text" :number-style="{ backgroundColor: `${color}` }" />
</template>
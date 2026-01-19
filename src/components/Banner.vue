<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div class="bg-white p-8 rounded-2xl shadow-lg border border-lime">
    <h3 class="text-sea font-semibold text-lg">{{props.title}} </h3>
    <p class="text-fossil">{{props.description}}</p>
  </div>
</template>
<script setup>

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description : {
    type: String,
    required: true
  },
})

</script>
<template>
  <a-card>
    <template #cover>
      <img :alt="props.name" :src="props.src" class="h-48 object-contain p-4" />
    </template>
    <a-card-meta :title="props.name">
      <template #description>
        <div class="line-clamp-6 min-h-[4.5rem] text-sm">
          {{ description }}
        </div>
      </template>
    </a-card-meta>
  </a-card>
</template>
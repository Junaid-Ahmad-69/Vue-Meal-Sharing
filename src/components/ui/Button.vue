<script setup>
import {computed} from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary'].includes(value)
  },
  loading: {
    type: Boolean,
    default: false
  }
});

// Map variants to your specific theme colors
const buttonStyles = computed(() => {
  if (props.variant === 'secondary') {
    return 'active:scale-95 !bg-orange !border-orange !text-white hover:!bg-light-orange';
  }
  return 'active:scale-95 !bg-orange !border-orange !text-white hover:!bg-light-orange';
});
</script>

<template>
  <a-button
      v-bind="$attrs"
      :loading="loading"
      class="transition-all duration-300 ease-in-out font-semibold inline-flex items-center justify-center"
      :class="buttonStyles"
  >
    <slot/>
  </a-button>
</template>

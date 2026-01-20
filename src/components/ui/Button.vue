<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline'].includes(value)
  },
  loading: {
    type: Boolean,
    default: false
  }
});

const buttonStyles = computed(() => {
  if (props.variant === 'outline') {
    return 'active:scale-95 bg-transparent !border-mint text-mint hover:!bg-mint hover:!text-white';
  }
  if (props.variant === 'secondary') {
    return 'active:scale-95 !bg-fossil !border-fossil !text-white hover:!bg-arsenic';
  }

  return 'active:scale-95 !bg-orange !border-orange !text-white hover:bg-light-orange';
});
</script>

<template>
  <a-button
      v-bind="$attrs"
      :loading="loading"
      class="transition-all duration-300 ease-in-out font-semibold inline-flex items-center justify-center border-2"
      :class="buttonStyles"
  >
    <slot/>
  </a-button>
</template>
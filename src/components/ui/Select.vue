<script setup>
defineProps({
  options: {
    type: Array,
    required: true,
  },
  value: {
    type: String,
    default: null
  },
  loading: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:value', 'change']);

const onSelectChange = (val) => {
  emit('update:value', val);
  emit('change', val);
}


</script>

<template>
  <a-space>
    <a-select
        :value="value"
        @change="onSelectChange"
        placeholder="Select an Area"
        class="w-64"
        :loading="loading"
    >
      <a-select-option v-for="opt in options" :key="opt.strArea" :value="opt.strArea">
        {{ opt.strArea }}
      </a-select-option>
    </a-select>
  </a-space>
</template>
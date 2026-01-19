<script setup>
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons-vue";
import Button from "@/components/ui/Button.vue";

defineProps({
  collapsed: {
    type: Boolean,
    required: true,
  },
  handleToggle: {
    type: Function,
    required: true,
  }
})
</script>


<template>
  <a-layout-header class="sticky top-0 z-40 w-full shadow-sm !bg-white !px-8 flex items-center justify-between">
    <div class="flex items-center">
      <menu-unfold-outlined
          v-if="collapsed"
          class="text-xl cursor-pointer text-sea"
          @click="handleToggle"
      />
      <menu-fold-outlined v-else class="text-xl cursor-pointer !text-sea" @click="handleToggle"/>
      <span class="ml-5 font-semibold text-sea">Fresh Harvest</span>
    </div>
  <Button>New Key</Button>
  </a-layout-header>
</template>
<script setup>
import {DashboardOutlined, AppstoreAddOutlined,AreaChartOutlined} from "@ant-design/icons-vue";
import {ref, watchEffect} from "vue";
import {useRoute} from "vue-router";
import {APP_ROUTES} from "../../utils/config.js";
const selectedKeys = ref(['1']);
const props = defineProps({
  collapsed: {
    required: true,
    type: Boolean
  }
})

const route = useRoute()


watchEffect(() => {
  if (route.path === APP_ROUTES.MEAL_DASHBOARD) {
    selectedKeys.value = ['1'];
  } else if (route.path.startsWith(APP_ROUTES.MEAL_CATEGORY)) {
    selectedKeys.value = ['2'];
  } else if (route.path.startsWith(APP_ROUTES.AREA_MEAL)) {
    selectedKeys.value = ['3'];
  }
});




const emit = defineEmits(["update:collapsed"])

const toggleSideBar= (val)=>{
  emit("update:collapsed", val)
}
</script>
<template>
  <a-layout-sider
      :collapsed="props.collapsed"
      @update:collapsed="toggleSideBar"
      :trigger="null"
      collapsible
      class="!bg-mint border border-arsenic !fixed left-0 top-0 bottom-0 h-screen overflow-auto z-50">
    <div class="h-16 flex items-center justify-center font-bold">
      <span v-if="!collapsed" class="text-fossil text-2xl">🥕 Agriosa</span>
      <span v-else class="text-2xl">🥕</span>
    </div>

    <a-menu
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        class="bg-transparent border-none
         [&_.ant-menu-item-selected]:!bg-white
         [&_.ant-menu-item-selected]:!text-orange
         [&_.ant-menu-item-selected_.anticon]:!text-orange"
    >
      <a-menu-item key="1">
        <template #icon>
          <DashboardOutlined />
        </template>
        <router-link :to="APP_ROUTES.MEAL_DASHBOARD">Dashboard</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <template #icon>
          <AppstoreAddOutlined />
        </template>
        <router-link :to="APP_ROUTES.MEAL_CATEGORY">Category</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <template #icon>
          <AreaChartOutlined />
        </template>
        <router-link :to="APP_ROUTES.AREA_MEAL">Area Meal</router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

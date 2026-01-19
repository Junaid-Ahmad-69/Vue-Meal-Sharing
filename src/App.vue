<script setup>
import Navbar from "@/components/Navbar.vue";
import TopBar from "@/components/TopBar.vue";

import {ref} from 'vue';

const collapsed = ref(false);
const handleToggle = () => {
  collapsed.value = !collapsed.value;
}

</script>
<template>
  <a-config-provider :theme="{ token: { fontFamily: 'Poppins' } }">
    <a-layout class="h-screen overflow-hidden bg-smoke ">

      <!--SIDE NAVBAR-->
      <Navbar :collapsed="collapsed"/>

      <a-layout class="!bg-smoke transition-all duration-300"
                :class="collapsed ? 'ml-20' : 'ml-[200px]'"
      >
        <!--TOP NAVBAR-->
        <TopBar :collapsed=collapsed :handleToggle="handleToggle"/>


        <!--MAIN CONTENT-->
        <a-layout-content class="overflow-y-auto custom-scrollbar" >
          <div class="container p-6">
            <RouterView/>
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>


<style scoped>
/* Optional: Make the scrollbar look cleaner */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #A1DF8C; /* Your mint color */
  border-radius: 10px;
}
</style>



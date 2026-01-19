<script setup>
import Banner from "@/components/Banner.vue";
import {useMealStore} from "../../store/mealStore.js";
import {onMounted, ref} from "vue";
import Select from "@/components/ui/Select.vue";
import Skeleton from "@/components/ui/Skeleton.vue";
import Card from "@/components/ui/Card.vue";
import MealAreaCard from "@/components/MealAreaCard.vue";

const mealStore = useMealStore()
const selectedArea = ref(null)

onMounted(() => {
  mealStore.fetchAreaList()
})

const handleAreaChange = async (value) => {
  await mealStore.fetchAreaMeals(value)
  console.log(mealStore.areaMeals)
}
</script>
<template>
  <Banner
      title="Regional Search"
      description="Discover what’s growing in your area. Use our regional filter to see tailored results and support the local ecosystem by choosing ingredients sourced from your community."
  />

  <div class="my-4">
    <Select v-model:value="selectedArea" :options="mealStore.area" @change="handleAreaChange"/>
  </div>

  <div v-if="mealStore.areaMeals.length > 1">
    <div v-if="mealStore.isLoading">
      <div v-for="n in 2" :key="n" class="w-full p-4 bg-white rounded-lg border border-gray-100 mb-4">
        <Skeleton active :paragraph="{ rows: 8 }"/>
      </div>
    </div>
    <div v-else>
      <MealAreaCard
          v-for="meal in mealStore.areaMeals"
          :key="meal.idMeal"
          :meal="meal"
      />
    </div>
  </div>


</template>
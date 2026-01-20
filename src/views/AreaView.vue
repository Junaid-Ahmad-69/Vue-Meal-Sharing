<script setup>
import Banner from "@/components/Banner.vue";
import {useMealStore} from "../../store/mealStore.js";
import {onMounted, ref} from "vue";
import Select from "@/components/ui/Select.vue";
import Skeleton from "@/components/ui/Skeleton.vue";
import MealAreaCard from "@/components/MealAreaCard.vue";
import Empty from "@/components/ui/Empty.vue";
import {storeToRefs} from "pinia";

const mealStore = useMealStore()

const {fetchAreaList, fetchAreaMeals} = mealStore
const {area, isLoading, hasAreaMealCount, areaMeals} = storeToRefs(mealStore)

const selectedArea = ref(null)
const hasSearched = ref(false)

onMounted(() => {
  fetchAreaList()
})

const handleAreaChange = async (value) => {
  hasSearched.value = true
  await fetchAreaMeals(value)
}
</script>
<template>

  <Banner
      title="Regional Search"
      description="Discover what’s growing in your area. Use our regional filter to see tailored results and support the local ecosystem by choosing ingredients sourced from your community."
  />

  <div class="my-4">
    <Select v-model:value="selectedArea" :loading="isLoading" :options="area" @change="handleAreaChange"/>
  </div>

  <div v-if="hasSearched">

    <div v-if="isLoading">
      <div v-for="n in 2" :key="n" class="w-full p-4 bg-white rounded-lg border border-gray-100 mb-4">
        <Skeleton active :paragraph="{ rows: 8 }"/>
      </div>
    </div>

    <div v-else-if="hasAreaMealCount" class="text-center lg:pt-60 pt-32">
      <Empty description="No Meals Found in this Region!"/>
    </div>

    <div v-else class="space-y-4">
      <MealAreaCard
          v-for="meal in areaMeals"
          :key="meal.idMeal"
          :meal="meal"
      />
    </div>

  </div>


</template>
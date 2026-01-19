<script setup>
import Banner from "@/components/Banner.vue";
import {useMealStore} from "../../store/mealStore.js";
import {onMounted} from "vue";
import Card from "@/components/ui/Card.vue";
import Skeleton from "@/components/ui/Skeleton.vue";

const mealStore = useMealStore()

onMounted(() => {
  mealStore.fetchCategoryMeals()
})

</script>
<template>
  <Banner title="Recipe Categories"
          description="Every great chef knows that quality meals begin with quality ingredients. Explore our categories to find inspiration and the building blocks for a healthier lifestyle."/>

  <div v-if="mealStore.isLoading" class="flex flex-wrap items-center justify-between">
    <div v-for="n in 8" :key="n" class="w-80 p-4 bg-white rounded-lg border border-gray-100 m-4">
      <Skeleton active :paragraph="{ rows: 8 }" />
    </div>
  </div>
  <div class="mt-8 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5" v-else>
    <Card
        v-for="category in mealStore.categories"
        :key="category.idCategory"
        :description="category.strCategoryDescription"
        :name="category.strCategory"
        :src="category.strCategoryThumb"/>
  </div>

</template>
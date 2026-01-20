<script setup>
import {useMealStore} from "../../store/mealStore.js";
import {onMounted, ref} from "vue";
import Card from "@/components/ui/Card.vue";
import Banner from "@/components/Banner.vue";
import Skeleton from "@/components/ui/Skeleton.vue";
import {storeToRefs} from "pinia";
import Button from "@/components/ui/Button.vue";
import Empty from "@/components/ui/Empty.vue";


const mealStore = useMealStore()
const {fetchAlphabetsMeals} = mealStore
const {meals, isLoading, hasMealCount} = storeToRefs(mealStore)

const searchAlphabets = ref('m')

onMounted(() => {
  fetchAlphabetsMeals(searchAlphabets.value)
})
const alphabets = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

const handleSearchMeal = (value) => {
  const letter = value.toLowerCase();
  searchAlphabets.value = letter;
  fetchAlphabetsMeals(letter);
}

</script>

<template>

  <Banner
      title="Today's Meals Deal"
      description="A delicious meal is more than just sustenance; it is a symphony of flavors and aromas that
      brings comfort to the soul and joy to the senses. Whether shared with loved ones or enjoyed in a quiet moment,
      every bite tells a story of culture, tradition, and the simple pleasure of good taste."/>

  <ul class="flex items-center my-8 flex-wrap gap-4">
    <li v-for="alpha in alphabets" :key="alpha">
      <Button variant="outline" @click="()=>handleSearchMeal(alpha)" :class="alpha.toLowerCase() === searchAlphabets  ? '!bg-mint !text-white': ''"> {{alpha}}</Button>
    </li>
  </ul>

  <div v-if="isLoading" class="flex flex-wrap items-center justify-between">
    <div v-for="n in 8" :key="n" class="w-80 p-4 bg-white rounded-lg border border-gray-100 m-4">
      <Skeleton active :paragraph="{ rows: 8 }" />
    </div>
  </div>

  <div v-else-if="hasMealCount" class="text-center lg:pt-60 pt-32">
    <Empty :description="`Currently No Meal Available for ${searchAlphabets.toUpperCase()}!`"/>
  </div>

  <div class="mt-8 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5" v-else>
    <Card
        v-for="meal in meals"
        :key="meal.idMeal"
        :id="meal.idMeal"
        :name="meal.strMeal"
        :src="meal.strMealThumb"
        :description="meal.strInstructions"
        :isSearchMeal="true"
    />
  </div>
</template>

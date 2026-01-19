<script setup>
import {useMealStore} from "../../store/mealStore.js";
import {onMounted} from "vue";
import Card from "@/components/ui/Card.vue";
import Banner from "@/components/Banner.vue";


const mealStore= useMealStore()


onMounted(() => {
  mealStore.fetchListMeals()
})


</script>


<template>

  <Banner
      title="Today's Meals Deal"
      description="A delicious meal is more than just sustenance; it is a symphony of flavors and aromas that
      brings comfort to the soul and joy to the senses. Whether shared with loved ones or enjoyed in a quiet moment,
      every bite tells a story of culture, tradition, and the simple pleasure of good taste." />


  <div v-if="mealStore.isLoading">Loading....</div>

  <div class="flex flex-wrap items-center justify-between" v-else>
    <Card
        v-for="meal in mealStore.meals"
        :key="meal.idIngredient"
        :name="meal.strIngredient"
        :src="meal.strThumb"
        :description="meal.strDescription"
    />
  </div>
</template>

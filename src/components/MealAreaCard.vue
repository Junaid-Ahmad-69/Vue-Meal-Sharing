<script setup>
import {ref} from "vue";

const props = defineProps({
  meal: {
    type: Object,
    required: true
  },
})

const TOTAL_INGREDIENTS = 20

const ingredients = ref([])
for (let i = 1; i < TOTAL_INGREDIENTS; i++) {
  const ingredient = props.meal[`strIngredient${i}`]
  const measure = props.meal[`strMeasure${i}`]
  if (ingredient && ingredient.trim() !== "") {
    ingredients.value.push({
      name: ingredient,
      measure: measure
    })
  }

}
</script>
<template>
  <a-card class="mb-4">
    <div class="grid grid-cols-[300px_1fr] gap-8">
      <div class="h-[340px] w-[300px] overflow-hidden rounded-l-lg">
        <img
            :alt="meal.idMeal"
            :src="meal.strMealThumb"
            class="h-full !rounded-lg w-full object-cover"
            loading="lazy"
        />
      </div>

      <div class="flex flex-col justify-between py-2 pr-2">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="font-semibold truncate text-base">
              {{ meal.strMeal }}
            </span>
            <span
                class="text-xs font-bold uppercase text-orange bg-orange/10 px-2 py-0.5 rounded">
              {{ meal.strArea }}
            </span>
          </div>
          <div class="line-clamp-4 text-sm mb-3">
            {{ meal.strInstructions }}
          </div>
        </div>

        <div>
          <span class="font-semibold text-sm block mb-2">Ingredients</span>

          <div
              v-if="ingredients.length"
              class="max-h-[160px] overflow-y-auto pr-2"
          >
            <div class="grid grid-cols-2 gap-2">
              <div
                  v-for="(item, index) in ingredients"
                  :key="index"
                  class="flex justify-between items-center p-2 bg-mint/20 border-l-4 border-orange rounded-r-lg"
              >
                <span class="font-semibold truncate">
                  {{ item.name }}
                </span>
                <span class="text-sm italic whitespace-nowrap">
                  {{ item.measure }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a-card>
</template>

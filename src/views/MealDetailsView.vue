<script setup>
import {computed, watch} from 'vue';
import {
  ArrowLeftOutlined,
  YoutubeOutlined,
  GlobalOutlined,
  TagOutlined,
  ClockCircleOutlined,
  CheckCircleTwoTone
} from '@ant-design/icons-vue';
import {useMealStore} from "../../store/mealStore.js";
import {useRoute} from "vue-router";
import {storeToRefs} from "pinia";
import Skeleton from "@/components/ui/Skeleton.vue";
import Empty from "@/components/ui/Empty.vue";
import Button from "@/components/ui/Button.vue";
import Tag from "@/components/ui/Tag.vue";


const mealStore = useMealStore();
const {fetchMealDetails} = mealStore;

const {mealDetails, isLoading, hasMealDetailCount} = storeToRefs(mealStore)

const route = useRoute();
const mealID = route.params.id

watch(
    () => mealID,
    (newId) => {
      if (newId) {
        fetchMealDetails(newId);
      }
    },
    {immediate: true}
);


const ingredients = computed(() => {
  const list = [];
  const meal = mealDetails.value[0];

  for (let i = 1; i <= 20; i++) {
    const name = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (name && name.trim() !== "") {
      list.push({name, measure});
    }
  }
  return list;
});

const formattedInstructions = computed(() => {
  return mealDetails.value[0].strInstructions
      ?.split(/\r?\n/)
      .filter(step => step.trim().length > 5);
});
</script>

<template>

  <div v-if="isLoading">
    <div v-for="n in 1" :key="n" class="w-full p-4 bg-white rounded-lg border border-gray-100 m-4">
      <Skeleton active :paragraph="{ rows: 12 }"/>
    </div>
  </div>

  <div v-else-if="hasMealDetailCount" class="text-center lg:pt-60 pt-32">
    <Empty description="No Detail Found!"/>
  </div>

  <div class="min-h-screen bg-gray-50 pb-20" v-else>
    <div v-if="mealDetails && mealDetails.length > 0">
      <div
          class="min-h-screen bg-gray-50 pb-20"
          v-for="meal in mealDetails"
          :key="meal.idMeal"
      >

        <div class="relative h-[60vh] w-full overflow-hidden group">
          <img
              :src="meal.strMealThumb"
              class="w-full h-full object-cover transform transition-transform duration-[10000ms] ease-linear group-hover:scale-110"
              alt="Meal Image"
          />

          <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

          <div class="absolute bottom-10 left-0 w-full px-6 md:px-20 text-white">
            <Button
                class="!text-white hover:!bg-none !border-none !bg-transparent !p-0 mb-4 flex items-center opacity-80 hover:opacity-100"
                @click="$router.back()">
              <ArrowLeftOutlined/>
              Back to Search
            </Button>
            <div class="flex flex-wrap gap-2 mb-4">
              <Tag color="orange" :label="meal.strArea">
                <template #icon>
                  <GlobalOutlined/>
                </template>
              </Tag>

              <Tag color="blue" :label="meal.strCategory"></Tag>

            </div>
            <h1 class="text-4xl md:text-6xl font-black mb-2">{{ meal.strMeal }}</h1>
            <p v-if="meal.strTags" class="text-gray-300 italic">
              <TagOutlined class="mr-2"/>
              {{ meal.strTags.split(',').join(' • ') }}
            </p>
          </div>
        </div>

        <div class=" px-6 -mt-8 relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <div class="lg:col-span-1">
              <a-card class="rounded-2xl shadow-xl border-none sticky top-24">
                <h3 class="text-xl font-bold text-sea mb-6 border-b pb-4 flex items-center justify-between">
                  Ingredients
                  <span class="text-sm font-normal text-sea">{{ ingredients.length }} items</span>
                </h3>
                <ul class="space-y-4">
                  <li v-for="(item, idx) in ingredients" :key="idx" class="flex justify-between items-center group">
                    <div class="flex items-center gap-3">
                      <CheckCircleTwoTone two-tone-color="#52c41a"/>
                      <span class="text-mint font-medium group-hover:text-orange transition-colors">
                    {{ item.name }}
                  </span>
                    </div>
                    <span class="text-sm bg-gray-100 px-2 py-1 rounded-md text-fossil font-mono">
                  {{ item.measure }}
                </span>
                  </li>
                </ul>

                <a-divider/>

                <div class="flex flex-col gap-3">
                  <a-button v-if="meal.strYoutube" danger block size="large" :href="meal.strYoutube"
                            target="_blank" class="flex items-center justify-center gap-2 font-bold rounded-xl">
                    <YoutubeOutlined/> Watch Tutorial
                  </a-button>
                  <a-button v-if="meal.strSource" block size="large" :href="meal.strSource" target="_blank" class="rounded-xl">
                    View Original Source
                  </a-button>
                </div>
              </a-card>
            </div>

            <div class="lg:col-span-2">
              <a-card class="rounded-2xl shadow-xl border-none p-4">
                <div class="flex items-center justify-between mb-8">
                  <h3 class="text-2xl font-black text-sea">Cooking Instructions</h3>
                  <div class="flex items-center text-fossil gap-2">
                    <ClockCircleOutlined/>
                    <span class="text-sm font-bold">~45 Mins</span>
                  </div>
                </div>

                <div class="space-y-8">
                  <div v-for="(step, index) in formattedInstructions" :key="index" class="flex gap-6">
                    <div class="flex-shrink-0">
                       <span
                           class="w-10 h-10 rounded-full bg-orange text-white flex items-center justify-center font-black text-lg shadow-lg shadow-orange/30">
                           {{ index + 1 }}
                       </span>
                    </div>
                    <div class="pt-1">
                      <p class="text-gray-600 leading-relaxed text-lg">
                        {{ step.replace(/^\d+\r?\n?/, '') }} </p>
                    </div>
                  </div>
                </div>
              </a-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

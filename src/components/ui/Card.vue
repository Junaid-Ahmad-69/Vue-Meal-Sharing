<script setup>

import {useRouter} from "vue-router";
import {APP_ROUTES} from "../../../utils/config.js";

const router = useRouter();
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description : {
    type: String,
    required: true
  },
  isSearchMeal: {
    type: Boolean,
    default: false
  },
  id: {
    type: String,
    default: null
  },
})

const handleNavigate= ()=> {
  props.isSearchMeal && router.push(APP_ROUTES.MEAL_DETAILS.replace(":id", props.id));
}



</script>
<template>
  <a-card @click="handleNavigate" class="shadow-lg">
    <template #cover>
      <img :alt="props.name" :src="props.src" :class="!isSearchMeal ?  'h-48 object-contain' : 'h-full object-cover'" />
    </template>
    <a-card-meta :title="props.name">
      <template #description>
        <div class="line-clamp-6 min-h-[4.5rem] text-sm">
          {{ description }}
        </div>
      </template>
    </a-card-meta>
  </a-card>
</template>
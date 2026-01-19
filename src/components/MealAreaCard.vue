<script setup>
defineProps({
  meal: {
    type: Object,
    required: true
  }
})


</script>
<template>
  <a-card class="mb-4 flex flex-row">
    <template #cover>
      <div class="h-[400px] !w-[300px]">
      <img :alt="meal.idMeal" :src="meal.strMealThumb" class="h-full w-full object-fill" />
      </div>
    </template>
    <a-card-meta :title="meal.strMeal">
      <template #description>
        <div class="line-clamp-6 min-h-[4.5rem] text-sm">
          {{ meal.strInstructions }}
        </div>
      </template>
    </a-card-meta>
  </a-card>

</template>
<style scope>
:where(.css-dev-only-do-not-override-1scv9o6).ant-card .ant-card-cover img{
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-top-right-radius: unset;
}
</style>
<script setup>
import { ref } from 'vue';

// Create a reactive variable for the date
const selectedDate = ref(null);

const handleDateChange = (date, dateString) => {
  console.log('Selected Date:', date);
  console.log('Formatted String:', dateString);
};
</script>

<template>
  <div style="padding: 20px;">
    <h3>Select a Date:</h3>
    <a-date-picker
        v-model:value="selectedDate"
        @change="handleDateChange"
        placeholder="Select vegetable harvest date"
    />

    <p v-if="selectedDate">
      You selected: {{ selectedDate.format('YYYY-MM-DD') }}
    </p>
  </div>

    <div style="padding: 50px; text-align: center;">
      <a-button type="primary" size="large">
        If you see this Blue Button, it works!
      </a-button>
      <br /><br />
      <a-date-picker />
    </div>
</template>
<template>
  <button @click="getData">eee</button>
  <div v-for="prayer in data" :key="prayer">
    <br />
    <p>{{ prayer.english }}</p>
    <p>{{ prayer.time }}</p>
    <p>{{ prayer.arabic }}</p>
    <br />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import getDataHelper from './helpers/getData';

export let data = ref({});

export const getData = async () => (data.value = await getDataHelper());
</script>

<style lang="postcss">
@tailwind base;

html,
body {
  height: 100%;
}

body {
  user-select: none;
  background: linear-gradient(#031b4b, #660ca1);
  color: white;
}
</style>

<style lang="postcss" scoped>
.s {
  color: red;
  &_no {
    color: green;
  }
}
</style>

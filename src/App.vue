<template>
  <Timer />
  <Heading class="heading" />
  <Prayer v-for="prayer in store.prayers" :key="prayer" v-bind="prayer" />
</template>

<script lang="ts" setup>
import { onMounted, Component } from 'vue';
import { url } from './config';
import { IApi } from './interfaces';
import Store from './store'; // @ts-ignore
import TimerComponent from './components/Timer.vue'; // @ts-ignore
import HeadingComponent from './components/Heading.vue';
import PrayerComponent from './components/Prayer.vue';
import getDataHelper from './helpers/getData';
import setDataHelper from './helpers/setData';
import setConvertedTimeHelper from './helpers/setConvertedTime';
import setNextPrayerHelper from './helpers/setNextPrayer';

// state
export const store: object = Store;

// components
export const Timer: Component = TimerComponent;
export const Heading: Component = HeadingComponent;
export const Prayer: Component = PrayerComponent;

// hooks
onMounted(async () => {
  try {
    const data: IApi = await getDataHelper(url);
    setDataHelper(data);
    setConvertedTimeHelper();
    setNextPrayerHelper();
  } catch (error) {
    console.error(error);
  }
});
</script>

<style lang="postcss">
@tailwind base;

html,
body {
  @apply .h-full;
}

body {
  font-family: 'Roboto';
  background: linear-gradient(#031b4b, #660ca1);
  @apply .text-white .select-none .p-4;
}
</style>

<style lang="postcss" scoped>
.heading {
  @apply .mb-8;
}
</style>

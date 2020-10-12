<template>
  <Timer />
  <Heading class="heading" />
  <Prayer v-for="prayer in store.prayers" :key="prayer" v-bind="prayer" />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Store from './store'; // @ts-ignore
import TimerComponent from './components/Timer.vue'; // @ts-ignore
import HeadingComponent from './components/Heading.vue';
import PrayerComponent from './components/Prayer.vue';
import setDataHelper from './helpers/setData';
import setConvertedTimeHelper from './helpers/setConvertedTime';
import setNextPrayerHelper from './helpers/setNextPrayer';

// state
export const store = Store;

// components
export const Timer = TimerComponent;
export const Heading = HeadingComponent;
export const Prayer = PrayerComponent;

// hooks
onMounted(async () => {
  await setDataHelper();
  setConvertedTimeHelper();
  setNextPrayerHelper();
});
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
  font-family: 'Roboto';
  padding: 16px;
}
</style>

<style lang="postcss" scoped>
.heading {
  margin-bottom: 32px;
}
</style>

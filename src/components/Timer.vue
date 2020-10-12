<template>
  <div class="timer">
    <p class="timer__item" v-if="store.nextPrayerIndex !== -1">{{ store.prayers[store.nextPrayerIndex].english }} in</p>
    <p class="timer__item timer--time" v-if="store.nextPrayerIndex !== -1">{{ store.remainder }}</p>
    <p class="timer__item" v-else>All prayers passed</p>
  </div>
</template>

<script lang="ts" setup>
import Store from '../store';
export const store = Store;
</script>

<style lang="postcss" scoped>
.timer {
  @apply .mb-8 .grid .justify-items-center;

  &__item {
    @apply .opacity-50 .text-sm;
  }

  &--time {
    @apply .opacity-100 .text-2xl;
  }
}
</style>

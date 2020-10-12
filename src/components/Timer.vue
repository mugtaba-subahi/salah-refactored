<template>
  <div class="timer">
    <p class="timer__item" v-if="store.nextPrayerIndex !== -1">{{ store.prayers[store.nextPrayerIndex].english }} in</p>
    <p class="timer__item timer--timer" v-if="store.nextPrayerIndex !== -1">{{ store.remainder }}</p>
    <p class="timer__item" v-else>All prayers passed</p>
  </div>
</template>

<script lang="ts" setup>
// @ts-nocheck
import Store from '../store';

// state
export const store = Store;
</script>

<style lang="postcss" scoped>
.timer {
  margin-bottom: 32px;
  display: grid;
  justify-items: center;

  &__item {
    opacity: 0.5;
    font-size: 0.8889rem;
    line-height: 1.5rem;
  }

  &--timer {
    font-size: 1.4238rem;
    line-height: 1.875rem;
    opacity: 1;
  }
}
</style>

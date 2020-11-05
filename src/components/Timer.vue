<template>
  <div class="timer">
    <p class="timer__item" v-if="SState.nextPrayerIndex !== -1">{{ SState.prayers[SState.nextPrayerIndex].english }} in</p>
    <p class="timer__item timer--time" v-if="SState.nextPrayerIndex !== -1">{{ SState.remainder }}</p>
    <p class="timer__item" v-else>All prayers passed</p>
  </div>
</template>

<script lang="ts" setup>
import * as Store from '../store';

export const { state: SState } = Store;
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

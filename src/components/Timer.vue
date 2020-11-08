<template>
  <div class="timer">
    <p class="timer__item" v-if="State().nextPrayerIndex !== -1">{{ State().prayers[State().nextPrayerIndex].english }} in</p>
    <p class="timer__item timer--time" v-if="State().nextPrayerIndex !== -1">{{ State().remainder }}</p>
    <p class="timer__item" v-else>All prayers passed</p>
  </div>
</template>

<script lang="ts" setup>
export { state as State } from '../store';
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

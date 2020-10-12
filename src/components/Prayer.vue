<template>
  <div class="prayer" :class="{ passed: passed, isNext: isNext }">
    <p class="prayer__item prayer__item--english">{{ english }}</p>
    <p class="prayer__item prayer__item--time">{{ time }}</p>
    <p class="prayer__item prayer__item--arabic">{{ arabic }}</p>
  </div>
</template>

<script lang="ts" setup="props">
export default {
  props: {
    english: { type: String, required: true },
    time: { type: String, required: true },
    arabic: { type: String, required: true },
    passed: { type: Boolean, required: true },
    isNext: { type: Boolean, required: true }
  },
  inheritAttrs: false
};
</script>

<style lang="postcss" scoped>
.prayer {
  @apply .grid .grid-cols-3 .justify-items-center .text-lg .rounded .px-5 .opacity-50 .duration-300;

  &__item {
    @apply .py-3 .justify-items-center;

    &--english {
      @apply .justify-self-start;
    }

    &--arabic {
      @apply .justify-self-end .leading-6 .tracking-wide .text-xl;
    }
  }
}

.isNext,
.passed {
  @apply .opacity-100;
}

.isNext {
  background-color: #0d6cda;
}
</style>

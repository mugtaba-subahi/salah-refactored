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
  font-size: 1.125rem;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  transition: 0.3s;
  opacity: 0.5;
  padding: 0 20px;
  border-radius: 3px;

  &__item {
    justify-items: center;
    padding-top: 12px;
    padding-bottom: 12px;

    &--english {
      justify-self: start;
    }

    &--arabic {
      justify-self: end;
      font-size: 1.25rem;
      line-height: 1.4rem;
      letter-spacing: 0.3px;
    }
  }
}

.isNext,
.passed {
  opacity: 1;
}

.isNext {
  background-color: #0d6cda;
}
</style>

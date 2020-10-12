<template>
  <section class="heading">
    <p class="heading--location">London, UK</p>
    <p class="heading--date">{{ date }}</p>
    <img class="heading--img" src="@/assets/mosque.svg" alt="Icon of a mosque" />
  </section>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';
import getDate from '../helpers/getDate';

// state
export const date: Ref<string> = ref(getDate);
</script>

<style lang="postcss" scoped>
.heading {
  grid-template-columns: 1fr auto;
  grid-template-areas:
    'location  img'
    'date      img';

  @apply .grid;

  &--location {
    grid-area: location;
    @apply .opacity-50 .tracking-wide;
  }
  &--date {
    @apply .text-lg .leading-6;
  }

  &--img {
    grid-area: img;
    filter: drop-shadow(0 2px 3px hsla(0, 91%, 45%, 0.22));
    @apply .w-12 .pointer-events-none;
  }
}
</style>

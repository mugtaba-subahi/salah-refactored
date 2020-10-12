<template>
  <section class="heading">
    <p class="heading--location">London, UK</p>
    <p class="heading--date">{{ date }}</p>
    <img class="heading--img" src="@/assets/mosque.svg" alt="Icon of a mosque" />
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import getDate from '../helpers/getDate';

export const date = ref(getDate);
</script>

<style lang="postcss" scoped>
.heading {
  display: grid;
  grid-auto-rows: max-content;
  grid-template-columns: 1fr auto;
  grid-template-areas:
    'location img'
    'date    img';

  &--location {
    letter-spacing: 0.5px;
    opacity: 0.5;
    grid-area: location;
  }
  &--date {
    font-size: 1.125rem;
    line-height: 1.5rem;
  }

  &--img {
    grid-area: img;
    width: 50px;
    pointer-events: none;
    filter: drop-shadow(0 2px 3px hsla(0, 91%, 45%, 0.22));
  }
}
</style>

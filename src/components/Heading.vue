<template>
  <section class="section-component">
    <p class="heading">London, UK</p>
    <p class="date">{{ date }}</p>
    <img class="img" src="@/assets/mosque.svg" alt="Icon of a mosque" />
  </section>
</template>

<script>
import getDate from "../helpers/getDate.js";

export default {
  data() {
    return {
      date: ""
    };
  },
  mounted() {
    this.date = getDate;
  }
};
</script>

<style lang="scss" scoped>
.section-component {
  display: grid;
  grid-auto-rows: max-content;
  grid-template-columns: 1fr auto;
  grid-template-areas:
    "heading img"
    "date    img";
}

.heading {
  letter-spacing: 0.5px;
  opacity: 0.5;
  grid-area: heading;
}
.date {
  font-size: 1.125rem;
  line-height: 1.5rem;
}

.img {
  grid-area: img;
  width: 50px;
  pointer-events: none;
  filter: drop-shadow(0 2px 3px hsla(0, 91%, 45%, 0.22));
}
</style>

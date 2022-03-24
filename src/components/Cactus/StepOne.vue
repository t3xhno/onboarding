<template>
  <div class="step-container">
    {{ message }}
    <button @click="clickHandler()" v-if="hasQuitButton">QUIT</button>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "",
    },
    hasQuitButton: {
      type: Boolean,
      default: false,
    },
  },
  setup() {},
};
</script>

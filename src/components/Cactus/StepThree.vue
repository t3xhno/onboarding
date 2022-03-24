<template>
  <div class="step-container">{{ message }}</div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "",
    },
  },
  setup() {},
};
</script>

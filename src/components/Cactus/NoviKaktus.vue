<template>
  <component :is="component" />
  nova komponenta, sigurno sam ja !
</template>

<script>
export default {
  props: {
    component: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  {{ modules }}
</template>

<script>
// import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const modules = Object.keys(store.state);

    return {
      modules,
    };
  },
};
</script>

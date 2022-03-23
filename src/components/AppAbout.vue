<template>
  {{ message }}
  {{ moduleName }}
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const message = computed(() => store.getters["about/getByKey"]("message"));
    const moduleName = computed(() =>
      store.getters["about/getByKey"]("moduleName")
    );

    return {
      message,
      moduleName,
    };
  },
};
</script>

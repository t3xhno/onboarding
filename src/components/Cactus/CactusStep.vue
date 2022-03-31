<template>
  <div class="step-container">
    {{ message }}
    <button @click="goToRoute('Home')" v-if="hasQuitButton">
      Go to Homepage
    </button>
    {{ fullName }}
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

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
  setup() {
    const store = useStore();
    const router = useRouter();
    const goToRoute = (route) => router.push({ name: route });
    const fullName = computed(() => store.getters["auth/getByKey"]("fullName"));

    return {
      fullName,
      goToRoute,
    };
  },
};
</script>

<template>
  <div class="step-container">
    {{ message }}
    <button @click="goToRoute('Home')" v-if="hasQuitButton">
      Go to Homepage
    </button>
  </div>
</template>

<script>
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
    const router = useRouter();
    const goToRoute = (route) => router.push({ name: route });
    return {
      goToRoute,
    };
  },
};
</script>

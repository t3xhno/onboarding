<template>
  <div class="app-container">
    <div class="button-container">
      <button @click="goToRoute('Home')">Go to Home</button>
      <button @click="goToRoute('About')">Go to About</button>
      <button @click="goToRoute('Modules')">Go to Modules</button>
    </div>
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "App",
  setup() {
    const router = useRouter();
    const goToRoute = (route) => router.push({ name: route });

    return {
      goToRoute,
    };
  },
};
</script>

<style lang="scss" src="@/assets/styles/base.scss" />

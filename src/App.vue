<template>
  <div class="app-container">
    <div class="button-container">
      <button
        :key="index"
        @click="goToRoute(entry.name)"
        v-for="(entry, index) in navEntries"
      >
        {{ entry.text }}
      </button>
    </div>
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import navEntries from "@/json/navEntries";

export default {
  name: "App",
  setup() {
    const router = useRouter();
    const goToRoute = (route) => router.push({ name: route });

    return {
      goToRoute,
      navEntries,
    };
  },
};
</script>

<style lang="scss" src="@/assets/styles/base.scss" />

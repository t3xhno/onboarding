<template>
  <header>
    <the-header>
      <template v-slot:header>Ovo ide u header slot</template>
      11111 51651616846 asddqwd
    </the-header>
  </header>
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
import TheHeader from "@/components/Slots/TheHeader";

export default {
  name: "App",
  components: {
    TheHeader,
  },
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

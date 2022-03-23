<template>
  {{ lol }}
  {{ kaca }}
  <button @click="changeName('noob')">CHANGE NAME</button>
  <button @click="resetState()">RESET STATE</button>
  <button @click="changeNameAsync('async noob')">ASYNC CHANGE</button>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const kaca = computed(() => store.getters["auth/getByKey"]("kaca"));
    const lol = computed(() => store.getters["auth/getByKey"]("lol"));
    const resetState = () => store.commit("auth/resetState");
    const changeNameAsync = (newName) =>
      store.dispatch("auth/setWithDelay", {
        kaca: newName,
        lol: "async hehe xd",
      });
    const changeName = (newName) =>
      store.commit("auth/setByKey", {
        kaca: newName,
        lol: "novo lol",
      });

    return {
      lol,
      kaca,
      changeName,
      resetState,
      changeNameAsync,
    };
  },
};
</script>

<template>
  <page-layout>
    <template v-slot:pera>OVO IDE U PERU</template>
    qwdqwdqwdq qweqweqweqwe qwedqwsqwdqw 1231231312
    <button @click="alertMe('clicked!!!')">CLICK ME</button>
  </page-layout>
</template>

<script>
import PageLayout from "./PageLayout.vue";
export default {
  components: {
    PageLayout,
  },
  setup() {
    const alertMe = (message) => alert(message);

    return {
      alertMe,
    };
  },
};
</script>

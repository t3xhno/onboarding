<template>
  {{ renderComponent }}
  <component
    :is="renderComponent"
    :message="cacti[currentStep].message"
    :componentLol="cacti[currentStep].childComp"
    :hasQuitButton="cacti[currentStep].hasQuitButton"
  />
  {{ deepRef }}
  {{ currentStep }}
  <button @click="incrementStep()">Inc</button>
  <button @click="changeName('Novo ime')">Change name</button>
  <button @click="getFullName()">GET NAME</button>
  {{ fullName }}
</template>

<script>
import { useStore } from "vuex";
import cacti from "@/json/cacti";
import { ref, reactive, computed } from "vue";
import ChildComp from "@/components/Cactus/ChildComp";
import CactusStep from "@/components/Cactus/CactusStep";

export default {
  components: {
    ChildComp,
    CactusStep,
  },
  setup() {
    const store = useStore();
    const currentStep = ref(0);
    const deepRef = reactive({
      name: "Petar",
      lastName: "Lazic",
    });

    const incrementStep = (step = 1) => {
      currentStep.value += step;
      currentStep.value = currentStep.value % cacti.length;
    };

    const fullName = computed(() => store.getters["auth/getByKey"]("fullName"));

    fullName.value.lastName = "Jovan";

    const getFullName = async () => await store.dispatch("auth/getFullName");

    const renderComponent = computed(() => cacti[currentStep.value].component);

    const changeName = (newName) => (deepRef.name = newName);

    return {
      cacti,
      deepRef,
      fullName,
      changeName,
      getFullName,
      currentStep,
      incrementStep,
      renderComponent,
    };
  },
};
</script>

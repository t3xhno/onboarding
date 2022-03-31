<template>
  {{ renderComponent }}
  <component
    :is="renderComponent"
    :component="cacti[currentStep].childComp"
    :message="cacti[currentStep].message"
    :hasQuitButton="cacti[currentStep].hasQuitButton"
  />
  {{ deepRef }}
  {{ currentStep }}
  <button @click="incrementStep()">Inc</button>
  <button @click="changeName('Novo ime')">Change name</button>
</template>

<script>
import cacti from "@/json/cacti";
import { ref, reactive, computed } from "vue";
import ChildComp from "@/components/Cactus/ChildComp";
import CactusStep from "@/components/Cactus/CactusStep";
import NovaKomponenta from "@/components/Cactus/CactusStep";

export default {
  components: {
    ChildComp,
    CactusStep,
    NovaKomponenta,
  },
  setup() {
    const currentStep = ref(0);
    const deepRef = reactive({
      name: "Petar",
      lastName: "Lazic",
    });

    const incrementStep = (step = 1) => {
      currentStep.value += step;
      currentStep.value = currentStep.value % cacti.length;
    };

    const renderComponent = computed(() => cacti[currentStep.value].component);

    const changeName = (newName) => (deepRef.name = newName);

    return {
      cacti,
      deepRef,
      changeName,
      currentStep,
      incrementStep,
      renderComponent,
    };
  },
};
</script>

<template>
  {{ renderComponent }}
  <component
    :is="renderComponent"
    :message="cacti[currentStep].message"
    :hasQuitButton="cacti[currentStep].hasQuitButton"
  />
  {{ deepRef }}
  {{ currentStep }}
  <button @click="incrementStep()">Inc</button>
  <button @click="changeName('hehe xd')">Change name</button>
</template>

<script>
import cacti from "@/json/cacti";
import { ref, reactive, computed } from "vue";
import StepOne from "@/components/Cactus/StepOne";

export default {
  components: {
    StepOne,
  },
  setup() {
    const currentStep = ref(0);
    const deepRef = reactive({
      name: "Marko",
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

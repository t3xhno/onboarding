<template>
  <div class="header_test">
    <slot name="header">
      Neki default tekst koji se prkazuje kada nista ne posaljem u slot ovaj
    </slot>
    <slot />
  </div>
</template>

<template>
  <div class="inner-page-container">
    <slot name="title">Default title</slot>
    <div class="default-slot-container">
      <slot>Default content</slot>
    </div>
    <div class="named-slot-container">
      <slot name="pera">Default Pera</slot>
    </div>
  </div>
</template>

<style lang="scss" src="@/assets/styles/pageLayout.scss" />

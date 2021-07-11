<template>
  <v-container class="bloc-image">
      <v-img
  lazy-src="../assets/icon-left-font.png"
  max-height="150"
  max-width="250"
  src="../assets/icon-left-font.png"
></v-img>
  </v-container>
</template>

<script>
  export default {
    name: 'BigTitle',

    data: () => ({
      
    }),
  }
</script>

<style lang="scss">
  .bloc-image{
    display: flex;
    justify-content: center;
  }
</style>
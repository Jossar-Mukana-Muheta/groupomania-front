<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex footer"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Suivez-nous</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Groupomania</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
}
</script>

<style lang="scss">

footer{
  background-color: #BD1E51 !important
}
</style>
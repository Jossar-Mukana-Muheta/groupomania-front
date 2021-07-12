<template>
  <v-card
    class="mx-auto"
    max-width="80%"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://images.unsplash.com/photo-1587599916126-0398c7934792?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    >
      <v-card-title class="account-title">Mon Compte</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      Bonjour {{name}}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Votre email : {{email}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        style="backgroundColor:red;color:white"
        @click="deleteAccount"
      >
        Supprimer mon compte
      </v-btn>

    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "AccountCard",
  data:()=>{
    return{
      name: localStorage.getItem("name"),
      email: localStorage.getItem("email")
    }
  },
  methods:{
      deleteAccount: function() {
      this.$store.dispatch("deleteAccount").then(() => {
        this.$router.push("/login");
      })

    }
    },
}
</script>

<style lang="scss">
  .account-title{
    color: #BD1E51;
  }
</style>
<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      
      <v-toolbar-title>Groupomania</v-toolbar-title>

      <v-spacer></v-spacer>

      <div class=".d-none">
      <v-btn icon >
        <router-link to="/" style="color:white">
        <v-icon>mdi-home</v-icon>
        </router-link>
      </v-btn>
      </div>
      <v-btn icon>
        <router-link to="/moncompte" style="color:white">
        <v-icon>mdi-account</v-icon>
        </router-link>
      </v-btn>
      
      
    </v-app-bar>
  </div>
</template>

<script>



export default {
name: "Navbar",
data(){
  return{
    connecté : localStorage.getItem("isLog"),
  }
},
computed : {
  
},
methods:{
      logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
        window.location.reload()
      })

    }
    }
}
</script>

<style lang="scss">
.theme--dark.v-app-bar.v-toolbar.v-sheet {
    background-color: #BD1E51 !important;
}

</style>
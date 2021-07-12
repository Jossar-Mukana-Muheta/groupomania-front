<template>
  <div>
    <v-btn class="logout" @click="logout()">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Logout",
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
.logout{
      position: fixed;
      top: 100px;
    right: 0;
    font-size: 10px;
    background-color: red !important;
    color: white !important;
    opacity: 0,1;
    transition-duration: 0.4s;

    

}

.logout:hover{
      opacity: 0,5;
      box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)
}
    

</style>>


<template>
  <div>
    <v-btn class="delete" @click="deleteComme()">
      <v-icon>mdi-delete</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "DeleteButton",
  props : ['id'],
  methods:{
      deleteComme: function() {
        let data = {
          uid: this.id,
          userId : localStorage.getItem('id')
        }
      this.$store.dispatch("DeleteItem", data).then(() => {
        this.$store.dispatch("loadItems", data).then(() => {
      })
      })
      

    }
    }
}
</script>

<style>

</style>
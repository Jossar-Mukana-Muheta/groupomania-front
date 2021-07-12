<template>
  
    <v-form ref="form" v-model="valid" style="width:70%">
      <v-text-field
        v-model="titre"
        :counter="30"
        :rules="titreRules"
        label="Titre"
        required
      ></v-text-field>
      
      
      <v-col cols="12" md="12">
        <v-textarea
          v-model="description"
          :counter="800"
          :rules="descriptionRules"
          solo
          name="input-7-4"
          label="message"
        ></v-textarea>
      </v-col>

      <v-btn  class="mr-4" style="backgroundColor:green;color:white" @click="validate">
        Valider
      </v-btn>
      

      <v-btn @click="reset" style="backgroundColor:red;color:white">
        Effacer formulaire
      </v-btn>
    </v-form>
  
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "ProjetForm",
  data() {
    return {
      valid: true,
      titre: "",
      titreRules: [
        v => !!v || "Le titre est obligatoire !",
        v =>
          (v && v.length <= 30) ||
          "Le titre ne doit pas dépasser 30 caractères."
      ],
    
      description: "",
      descriptionRules: [
        v => !!v || "Le texte est obligatoire !",
        v =>
          (v && v.length <= 800) ||
          "Le titre ne doit pas dépasser 800 caractères."
      ],
    
      checkbox: false,
      
    
    };
  },

  methods: {
    

    validate() {
      



      let message = {
        title: this.titre,
        content: this.description,
        userName: localStorage.getItem('name'),
        userId:localStorage.getItem("id"),
      };



      this.$store.dispatch("AddItem", message).then(() => {
        this.reset();
        this.$store.dispatch("loadItems").then(() => {
      })
      });
      
    },

    reset() {
      this.$refs.form.reset();
    }
  },
  computed: {
    ...mapGetters({
      loadCommentaire : "items"
    })
  }
};
</script>

<style lang="scss" scoped>
#admin-actualites > div:nth-child(3) > div > form {
  display: flex;
  flex-direction: column;
}

#admin-actualites > button {
  margin: 20px;
}

#admin-actualites > div:nth-child(3) > div > form > input {
  margin: 20px;
}

.row {
  display: flex !important;
  justify-content: center !important;
}

form {
  width: min-content;
  margin-bottom: 30px;
}

input,
button {
  margin-bottom: 20px;
}

.mr-4{
  margin-right: 20px;
}
</style>
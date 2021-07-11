<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        
        

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Mot de passe"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Comfirmer votre Mot de passe"
            required
          ></v-text-field>
        </v-col>
        
      </v-row>
      <v-row class="form-link">
        <v-col
          cols="6"
          md="4"
        >
          <v-col
          cols="12"
          md="4"
        >
          
          <div class="text-center">
    <v-btn
      rounded
      color="red"
      class="creer"
    >
      <router-link to="/login">Créer le compte</router-link>
    </v-btn>
  </div>
          
        </v-col>
          
          
        </v-col>
        <v-col
          cols="6"
          md="4"
        >
          
          <router-link to="/login">Se connecter</router-link>
          
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
  }
</script>
<style lang="scss">
.row{
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
}
.creer{
  background-color:  #0277BD !important;
}
</style>
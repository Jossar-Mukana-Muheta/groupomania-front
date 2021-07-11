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
            v-model="mdp"
            :rules="mdpRules"
            label="Mot de passe"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          
          <div class="text-center">
    <v-btn
      rounded
      color="red"
      class="valider"
    >
      Connexion
    </v-btn>
  </div>
          
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          
          <router-link to="/register">Créer un compte</router-link>
          
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
  export default {
    data: () => ({
      valid: false,
      mdp:'',
      email: '',
      emailRules: [
        v => !!v || 'E-mail est obligatoire',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      mdpRules: [
        v => !!v || 'Le mot de passe est obligatoire',
        v => /.+@.+/.test(v) || 'mot de passe must be valid',
      ],
    }),
  }
</script>
<style lang="scss">
.row{
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
}
.valider{
  background-color:  #43A047 !important;
}
</style>
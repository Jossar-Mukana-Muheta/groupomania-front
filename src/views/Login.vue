<template>
  <div class="login_container">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field> 

      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Entrez votre mot de passe"
        hint="8 characters"
        counter
        @click:append="show1 = !show1"
      ></v-text-field>

      <v-btn style="backgroundColor:green" class="mr-4" @click="validate">
        Connexion
      </v-btn>
      <router-link to="/register">Créer un compte</router-link>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    show1: false,
    email: "",
    emailRules: [
      v => !!v || "E-mail est obligatoire",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    password: "",
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters"
    }
  }),

  methods: {
    validate() {
      
      this.$refs.form.validate();
      let userData = {
        email: this.email,
        password: this.password
      };

      console.log(userData)

      this.$store.dispatch("login", userData).then(() => {
        this.$router.push("/")
        .catch(error => {
   console.info(error.message)
})
        
        
      }).catch(() => {})
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.login_container {
  display: flex;
  justify-content: center;
  margin-top: 20vh;
}

form {
  width: 60vw;

  @include desktop {
    width: 40vw !important ;
  }
}

button {
  margin: 20px;
}
</style>

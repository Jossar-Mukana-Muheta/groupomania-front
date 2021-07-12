<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-container>
      <v-row>
        
        
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Votre Pseudo"
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
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Mot de passe"
            type="password"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="confirmpassword"
            :rules="confirmpasswordRules"
            label="Comfirmer votre Mot de passe"
            type="password"
            required
          ></v-text-field>
        </v-col>
        
      </v-row>
      <p class="errorpass">{{errormessage}}</p>
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
      @click="register"
    >
    Créer le compte
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
    name: "Register",
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Votre pseudo est obligatoire',
        v => v.length <= 6 || 'Minimum 6 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Votre E-mail est obligatoire',
        v => /.+@.+/.test(v) || 'E-mail doit etre valid',
      ],
      password:'',
      passwordRules: [
        v => !!v || 'Le mot de passe est obligatoire',
        v => v.length <= 10 || '10 characters maximum',
      ],
      confirmpassword:'',
      confirmpasswordRules: [
        v => !!v || 'La confirmation du mot de passe est obligatoire',
        v => v.length <= 10 || '10 characters maximum',
      ],
      errormessage : "",
    }),
    methods:{
      register: function() {
        this.$refs.form.validate()
        if(this.password !== this.confirmpassword){
          console.log('mdp error ')
          this.errormessage = "Les mots de passe ne correspondent pas"
        }else{
          let user = {
          name : this.name,
          email: this.email,
          password: this.password
        }
        console.log(user)
        this.$store.dispatch("register",user).then(() => {
        this.$router.push("/login");
      })
        }
        

    }
    }
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
  background-color:  green !important;
}
.errorpass{
  text-align: center;
  color: red;
}
.validpass{
  text-align: center;
  color:green;
}
</style>
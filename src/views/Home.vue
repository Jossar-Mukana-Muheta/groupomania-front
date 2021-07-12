<template>
<div class="bloc-card">
  <Logout/>
  <Textarea/>  
<div>
<h1>Les derniers messages</h1> 
</div> 
<div class="tweet" v-for="elements in commentaires" :key="elements.title">
      <div class="box" >
        <article class="media" >
          <div class="media-left">
            <figure class="image">
              <img src="../assets/icon.png">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p><strong>{{elements.userName}}</strong> <small>{{elements.publier}}</small></p>
              <p>{{elements.title}}</p>
              <p class="content">{{elements.content}}</p>
            </div>
          </div>
        </article>
      </div>
      <DeleteButton v-if="isAdmin === 'isAdmin'" :id="elements.uid"/>
    </div>
    
</div>
  
</template>

<script>
  
  import { mapGetters } from 'vuex';
  import Logout from  "../components/Logout.vue"
  import DeleteButton from "../components/DeleteButton.vue"


  
  import Textarea from '../components/Textarea.vue'
  

  export default {

    name: 'Home',
    data () {
       return{
        isAdmin : localStorage.getItem("isAdmin")
       } 
    },

    components: {
    
      Textarea,
      Logout,
      DeleteButton
        
       
    },
    mounted () {
        this.$store.dispatch('loadItems')
    },
    
    computed: {
      ...mapGetters({
        commentaires : "items"
      }),
    },
    methods:{
      logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      })

    }
    },
  }
</script>
<style lang="scss">
.bloc-card{
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
strong {
  font-weight: 800;
}
p {
  line-height: 1.2;
  + p {
    margin-top: 5px;
  }
}


.tweet {
  background-color: #fff;
  color: #373737;
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  padding: 30px;
      min-width: 70%;
    margin-top: 40px;
    margin-bottom: 40px;
  + .tweet {
    margin-top: 20px;
  }
  .media {
    display: flex;
  }
  img {
    width: 64px;
    margin-right: 15px;
  }
  small {
    font-size: 14px;
    color: #657786;
  }
}


</style>

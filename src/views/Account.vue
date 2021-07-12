<template>
  <div class="bloc-account">
    <Logout/>
    <AccountCard/>
    <h1>Mes posts : </h1>
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
      <DeleteButton :id="elements.uid"/>
    </div>
  </div>
</template>

<script>
import AccountCard from "../components/AccountCard.vue"
import Logout from '../components/Logout.vue'
import DeleteButton from "../components/DeleteButton"
import { mapGetters } from 'vuex';

export default {
  name: "Account",
  components: {
    AccountCard,
    Logout,
    DeleteButton
  },
  mounted () {
        this.$store.dispatch('loadById')
    },
    
    computed: {
      ...mapGetters({
        commentaires : "itemsId"
      }),
    },
    
}
</script>

<style lang="scss">
h1{
  margin-top: 20px;
  margin-bottom: 20px;
}
  .bloc-account{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    min-height: 100%;
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
<template>
<div class="main">
  <Navbar/>
  <BigTitle />
  <router-view />
  <Footer/>
</div>
  
</template>

<script>

import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"
import BigTitle from './components/BigTitle.vue'

export default {
  name: 'App',
  components: {
      Navbar,
      Footer,
      BigTitle
    },
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
<style lang="scss">
body{
  font-family: 'Muli', sans-serif;
}

.main{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
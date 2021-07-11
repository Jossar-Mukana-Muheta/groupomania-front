<template>
  <div class="bloc-account">
    <AccountCard/>
    <Logout/>
  </div>
</template>

<script>
import AccountCard from "../components/AccountCard.vue"
import Logout from '../components/Logout.vue'
export default {
  name: "Account",
  components: {
    AccountCard,
    Logout
  }
}
</script>

<style lang="scss">
  .bloc-account{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 20px;
  }
</style>
<template>
  <ul>
    <User v-for="(user, index) in users" :key="index" :user="user"/>
  </ul>
</template>

<script>
  import User from "@/components/User";

  export default {
    async asyncData({store}) {
      await store.dispatch('getUsers');
      // console.log(store.getters.users);
      return {
        users: store.getters.users
      }
    },
    components: {
      User
    }
  }
</script>

<style scoped>
  ul{
    margin-top: 20px;
  }
  li{
    display: block;
    cursor: pointer;
    max-width: 200px;
    border-radius: 10px;
    box-shadow: 1px 1px 2px #7F828B;
    margin-bottom: 10px;
    padding: 10px;
  }
</style>

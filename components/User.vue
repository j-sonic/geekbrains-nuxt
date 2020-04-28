<template>
<!--  <li @click="removeUser(index)">{{user.name}}</li>-->
  <li @click="removeUser(user.id)">{{user.name}}</li>
</template>

<script>
  export default {
    props: ['user'],
    methods: {
      removeUser(id) {
        console.log('remove user', id);
        this.$store.dispatch('removeUser', id);
        // this.users = this.$store.getters.users;
        // console.log(this.users);
      }
    }
  }
</script>

<style scoped>

</style>

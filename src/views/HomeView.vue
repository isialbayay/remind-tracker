<template>
  <div class="main-container">
    <h2>Home Page</h2>
    <p>Bienvenido {{user.username}}</p>
  </div>
</template>

<script>
import { mapState} from 'vuex';
export default {
  computed:{
        ...mapState(['user'])
    },
};
</script>

<style>
</style>

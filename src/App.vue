<template>
<div class="container">
  <NavBar></NavBar>
  <router-view/>
</div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default{
  components:{
    NavBar
  }
}
</script>

<style>
.main-container{
  background-color: rgb(233, 233, 233);
  height: 100vh;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

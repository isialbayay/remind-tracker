<template>
  <NavBar></NavBar>
  <router-view/>
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
  background-color: #d6dada;
  min-height: calc(100vh - 56px);
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

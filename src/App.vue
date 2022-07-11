<template>
  <SimpleNavBar></SimpleNavBar>
  <router-view/>
</template>

<script>
//import NavBar from './components/NavBar.vue'
import SimpleNavBar from './components/SimpleNavBar.vue'

export default{
  components:{
    //NavBar
    SimpleNavBar
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

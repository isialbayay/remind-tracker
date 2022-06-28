<template>
<div class="container-lg">
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
  min-height: calc(100vh - 56px);
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

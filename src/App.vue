<template>
  <!-- <SimpleNavBar v-if="!logged"></SimpleNavBar> -->
  <!-- <NavBar></NavBar> -->
  <router-view />
</template>

<script>
export default{
  components:{

  },
}
</script>

<style>
.main-container {
  background-color: #d6dada;
  min-height: calc(100vh - 56px);
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

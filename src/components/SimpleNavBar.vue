<template>
  <nav class="navbar navbar-expand-lg bg-dark ">
  <div class="container-fluid d-flex justify-content-center">
    <a class="navbar-brand" href="/">RemindTracker</a>
  </div>
</nav>
</template>

<script>
import {mapState} from 'vuex';

export default {
  computed:{
        ...mapState(['user'])
    },
};
</script>

<style scoped>
.navbar{
  background: linear-gradient(to top, #560bad, #430988);
}

.nav-item a{
  color: white;
  font-weight: 400;
}

.dropdown-item{
  color: black !important;
}

.nav-item a:hover{
  color: #0089d9;
}

.navbar-brand{
  color: white;
}
.navbar-brand:hover{
  color: white;
}

.navbar-toggler-icon {
  background-image: url("@/assets/menu.png");
}

.navbar-toggler {
  border-color: white;
} 

</style>

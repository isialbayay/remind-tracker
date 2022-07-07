<template>
  <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">RemindTracker</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav d-flex justify-content-between w-100">
        <div class="d-flex navbar-nav">

          <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" to="/sessions">Sessions</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" to="/performance">Performance</router-link>
          </li>
        </div>
        <!-- Wea -->
        <div>
          <li class="nav-item dropdown d-flex">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">{{user.username}}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Log out</a></li>
            </ul>
          </li>
        </div>
      </ul>
    </div>
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

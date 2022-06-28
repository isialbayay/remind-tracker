<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">RemindTracker</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav d-flex justify-content-between w-100">
        <div class="d-flex">

          <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" to="/performance">Performance</router-link>
          </li>
        </div>
        <!-- Wea -->
        <div>
          <li class="nav-item dropdown d-flex">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Username
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
export default {};
</script>

<style></style>

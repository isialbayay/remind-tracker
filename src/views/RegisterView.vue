<template>
  <div class="main-container">

    <div class="container text-left mt-5">

      <div class="container col-4 mt-5">
        <label class="form-label">Username</label>
        <input type="text" class="form-control" id="username" placeholder="Username...">
      </div>

      <div class="container col-4 mt-5">
        <label class="form-label">Password</label>
        <input type="text" class="form-control" id="password" placeholder="Password...">
      </div>

      
      <div class="container d-grid gap-2 col-4  mt-5">
        <button class="btn btn-primary" type="button">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container{
  font-size: 25px;
  min-width: 300px;
}
</style>

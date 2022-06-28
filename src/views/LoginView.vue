<template>
  <div class="main-container">

    <div class="container text-left mt-5">

      <div class="container col-4 mt-5">
        <label class="form-label">Username</label>
        <input type="text" class="form-control" id="username" placeholder="Username...">
      </div>

      <div class="container col-4 mt-5">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password...">
      </div>

      <div class="container col-4 mt-3">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheck">
          <label class="form-check-label">
          <p>Remember me</p>
          </label>
        </div>
      </div>
      
      <div class="container d-grid gap-2 col-4  mt-5">
        <button class="btn btn-primary btnespecial" type="button">Login</button>
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
.form-control{
  font-size: 20px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  border-radius: 0px 16px 0px 16px;
}
</style>

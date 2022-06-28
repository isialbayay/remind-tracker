<template>
  <div class="main-container">

    <div class="container text-left mt-5">

      <div class="container col-4 mt-5">
        <label class="form-label ">Username</label>
        <input type="text" class="form-control " id="username" placeholder="Username...">
      </div>

      <div class="container col-4 mt-5">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password...">
      </div>

      
      <div class="container d-grid gap-2 col-4  mt-5">
        <button class="btn btn-primary btnespecial" type="button">Register</button>
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

<style>
.btnespecial{
  box-shadow: 0px 1px 0px 0px #fff6af;
	background:linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
	background-color:#ffec64;
	border-radius:6px;
	border:1px solid #ffaa22;
	color:#333333;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
}
.btnespecial:hover {
	background:linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
	background-color:#ffab23;
  color:#333333;
}
</style>

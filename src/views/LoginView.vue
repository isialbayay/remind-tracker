<template>
	<SimpleNavBar></SimpleNavBar>
	<div class="main-container">
		<div class="container mt-5" id="container">
			<div class="form-container sign-up-container ">
				<div class="formulario">
					<form>
						<h1>Create Account</h1>
						<span>Join us to track your sessions</span>
						<input id="name-register" type="text" placeholder="Username" required />
						<input id="password-register" type="password" placeholder="Password" required />
					</form>
					<button @click="getDataForm()">Sign Up</button>
				</div>
			</div>
			<div class="form-container sign-in-container">
				<div class="formulario">
					<form>
						<h1>Sign in</h1>
						<span>or use your account</span>
						<input id="name-login" key="" type="text" placeholder="Username" required />
						<input id="password-login" type="password" placeholder="Password" required />
					</form>
					<button @click="checkUser()">Sign In</button>
				</div>
			</div>
			<div class="overlay-container">
				<div class="overlay">
					<div class="overlay-panel overlay-left">
						<h1>Welcome Back!</h1>
						<p>To keep connected with us please login with your personal info</p>
						<button class="ghost" id="signIn">Sign In</button>
					</div>
					<div class="overlay-panel overlay-right">
						<h1>Hello, Friend!</h1>
						<p>Enter your personal details and start journey with us</p>
						<button class="ghost" id="signUp">Sign Up</button>
					</div>
				</div>
			</div>
		</div>
		<vue-basic-alert ref="alert" :duration="300" :closeIn="3000" />
	</div>
</template>

<script>
import axios from "axios"
import SimpleNavBar from "@/components/SimpleNavBar.vue";
import VueBasicAlert from 'vue-basic-alert';
import { mapState } from "vuex";

export default {
	mounted() {
		console.log("LOG "+this.isLogin)
		//funcionalidades esteticas login
		const signUpButton = document.getElementById("signUp");
		const signInButton = document.getElementById("signIn");
		const container = document.getElementById("container");
		signUpButton.addEventListener("click", () => {
			container.classList.add("right-panel-active");
		});
		signInButton.addEventListener("click", () => {
			container.classList.remove("right-panel-active");
		});
		if (localStorage.getItem("user_token")) {
			this.$router.push("/sessions");
		}

		if(this.isLogin === 1){
			container.classList.add("right-panel-active");
		}

	},
	computed:{
		...mapState(["isLogin"])
	},
	methods: {
		async getDataForm() {
			let username = document.getElementById("name-register").value;
			let password = document.getElementById("password-register").value;
			let users = [];

			if (document.getElementById("name-register").value < 1 || document.getElementById("password-register").value < 1) {
				this.$refs.alert
					.showAlert(
						'error', 
						'Please fill all fields', 
						'Error', 
						'error', 							
					);
			}

			await axios.get("/profe",{ crossdomain: true })
				.then((response) => {
					users = response.data;
				});
			users.forEach((user) => {
				if (username === user.username) {
					this.registerUser(user, password);
				}
				else if(!(document.getElementById("name-register").value < 1 || document.getElementById("password-register").value < 1)){
					this.$refs.alert
						.showAlert(
							'error', 
							'You cannot register this user!',
							'Error', 
							'error', 
							''  							
						);
				}
			});
		},
		async registerUser(user, password) {
			let newUser = {
				username: user.username,
				password: password,
				session: user.sessions
			};
			await axios.post("http://localhost:9000/api/auth/signup", newUser)
				.then((response) => {
					this.$refs.alert
						.showAlert(
							'success', 
							'User registered succesfully', 
							'Success', 
							'success', 
							'' + response								
						);
				})
				.catch((error) => {
					this.$refs.alert
						.showAlert(
							'error',
							'Error, this user is already registered', 
							'Error', 
							'error', 
							'' + error 
						)
				});


		},
		async checkUser() {
			let username = document.getElementById("name-login").value;
			let password = document.getElementById("password-login").value;
			let logUser = {
				username: username,
				password: password,
				session: []
			};

			if (document.getElementById("name-login").value < 1 || document.getElementById("password-login").value < 1) {
				this.$refs.alert
					.showAlert(
						'error',
						'Please fill all fields',
						'Error',
						'error', 
						''  								
					);
			}

			await axios.post("http://localhost:9000/api/auth/signin", logUser).then((response) => {
				if (response.status == 200) {
					console.log(response.status)
					console.log(response.data);
					localStorage.setItem("user_token", response.data.accessToken);
					localStorage.setItem("user_id", response.data.id);
					this.$router.push("/sessions");
				}
			})
				.catch((error) => {
					console.log(error);
					if (error.response.status == 404 && !(document.getElementById("name-login").value < 1 || document.getElementById("password-login").value < 1)) {
						this.$refs.alert
							.showAlert(
								'error', 
								'Error, incorrect user or password', 
								'Error: 404', 
								'Error', 
								'' + error 								
							);
					}
					if (error.response.status == 401 && !(document.getElementById("name-login").value < 1 || document.getElementById("password-login").value < 1)) {
						this.$refs.alert
							.showAlert(
								'error', 
								'Error, incorrect user or password',
								'Error: 401', 
								'Error',
								'' + error 
							);
					}
				});
		}
	},
	components: { SimpleNavBar, VueBasicAlert }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

* {
	box-sizing: border-box;
}

body {
	background: #f6f5f7;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: 'Montserrat', sans-serif;
	height: 100vh;
	margin: -20px 0 50px;
}

h1 {
	font-weight: bold;
	margin: 0;
}

h2 {
	text-align: center;
}

p {
	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
}

span {
	font-size: 12px;
}

a {
	color: #333;
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
}

button {
	border-radius: 20px;
	border: 1px solid #560bad;
	background-color: #560bad;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
}

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}

button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
}

form {}

input {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}

.container {
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
		0 10px 10px rgba(0, 0, 0, 0.22);
	position: relative;
	overflow: hidden;
	width: 768px;
	max-width: 100%;
	min-height: 480px;
}

.form-container {
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
}

.sign-in-container {
	left: 0;
	width: 50%;
	z-index: 2;
}

.container.right-panel-active .sign-in-container {
	transform: translateX(100%);
}

.sign-up-container {
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1;
}

.container.right-panel-active .sign-up-container {
	transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	animation: show 0.6s;
}

@keyframes show {

	0%,
	49.99% {
		opacity: 0;
		z-index: 1;
	}

	50%,
	100% {
		opacity: 1;
		z-index: 5;
	}
}

.overlay-container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
}

.container.right-panel-active .overlay-container {
	transform: translateX(-100%);
}

.formulario {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}


.overlay {
	background: #560bad;
	background: -webkit-linear-gradient(to right, #560bad, #430988);
	background: linear-gradient(to right, #560bad, #430988);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
	transform: translateX(50%);
}

.overlay-panel {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.overlay-left {
	transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
	transform: translateX(0);
}

.overlay-right {
	right: 0;
	transform: translateX(0);
}

.container.right-panel-active .overlay-right {
	transform: translateX(20%);
}

.social-container {
	margin: 20px 0;
}

.social-container a {
	border: 1px solid #DDDDDD;
	border-radius: 50%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	height: 40px;
	width: 40px;
}
</style>

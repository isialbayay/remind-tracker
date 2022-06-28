<template>
  <div class="main-container d-flex flex-row justify-content-around flex-wrap">
    <div class="info">
        <h1>Keep track of your study sessions</h1>
        <p>Join us to discover the opportunities that RemindTracker has for you</p>
        <div class="buttons flex-wrap">
            <router-link class="button" to="/login">Log in</router-link>
            <router-link class="button" to="/register">Register</router-link>
        </div>
    </div>
    <div>
        <img class="landing-img" src="@/assets/juicy-girl-working-at-home.gif">
    </div>
  </div>
</template>

<script>

export default {
  }

</script>

<style>

.info{
display: flex;
flex-direction: column;
align-items: center;
}

.buttons{
    width: 50%;
    display: flex;
    justify-content: space-around;
}

/* From uiverse.io */
.button {
display: flex;
text-decoration: none;
justify-content: center;
align-content: center;
 --color: #560bad;
 font-family: inherit;
 width: 8em;
 height: 2.6em;
 line-height: 2.5em;
 position: relative;
 overflow: hidden;
 border: 2px solid var(--color);
 transition: color .5s;
 z-index: 1;
 font-size: 17px;
 border-radius: 6px;
 font-weight: 500;
 color: var(--color);
}

.button:before {
 content: "";
 position: absolute;
 z-index: -1;
 background: var(--color);
 height: 150px;
 width: 200px;
 border-radius: 50%;
}

.button:hover {
 color: #fff;
}

.button:before {
 top: 100%;
 left: 100%;
 transition: all .7s;
}

.button:hover:before {
 top: -30px;
 left: -30px;
}

.button:active:before {
 background: #3a0ca3;
 transition: background 0s;
}

.landing-img{
    width: 100%;
}
</style>

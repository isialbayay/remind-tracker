<template>
  <div class="main-container">
    <h2>Sessions</h2>
    <p>Welcome {{ user.username }}</p>
    <div class="sessions d-flex">
      <div v-for="session in user.sessions" :key="session.id" class="card">
        <div class="card-img" :class="{orange: session.id%2,}">
          <p class="text-title">Session #{{session.id}}</p>
          </div>
        <div class="card-info">
          <p>{{session.date}}</p>
          <div class="d-flex">
            <div class="score d-flex">
              <img src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png" width="24" height="24" alt="">
              <p> {{session.score}} / 5</p>
            </div>
            <div class="duration d-flex"> 
              <img src="@/assets/clock.png" width="24" height="24" alt="">
              <p>{{session.duration}} min</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
//import axios from 'axios';

export default {
  async mounted(){
     


  },
  methods:{
    
    
    //getUserData(){
    //  await axios.get("https://7qak3a37b4dh7kisebhllubdxq0dnehm.lambda-url.us-east-1.on.aws/")
    //    .then((response) => {

    //    })
    //}

  },
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style>
.sessions {
  max-width: 900px;
  flex-wrap: wrap;
  justify-content: center;
}

.score{
  margin-right: 32px;
}
.score p{
  margin-left: 12px;
}

.duration p{
  margin-left: 12px;

}

  /* From uiverse.io by @alexruix */

.card {
  margin: 8px;
  width: 244px;
  height: 300px;
  border: none !important;
  border-radius: 1em !important;
  padding: 1.4rem;
  background: #f5f5f5;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 20px rgba(43, 8, 37, 0.2);
  --bs-card-inner-border-radius: 12px !important;

}

.card:before {

  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: rgba(238, 116, 116, 0.4);
  z-index: 2;
  transition: 0.5s;
}


.card-info {
  margin-top: 30px;
  position: relative;
  z-index: 3;
  color: #f5f5f5;
  opacity: 0;
  transform: translateY(20%);
  transition: 0.5s;
  width: 100%;
}

/*Text*/
.text-title {
  margin: 12px;
  font-size: 1.5rem;
  font-weight: 500;
}

.text-body {
  letter-spacing: 1px;
  font-size: 0.9rem;
  margin: 5px 0 15px 0;
}

/*Image*/
.card-img {
  width: 100%;
  height: 100%;
  position: absolute;
  color: white;
  top: 0;
  left: 0;
  border-radius: 12px !important;
  /* background: #9cbfee; */
  /* background: linear-gradient(to bottom, #008ed4, #1e8dc5d3); */
  background: linear-gradient(to bottom,#9cbfee, #629ae4);

}

.orange{
  background: linear-gradient(to top, #560bad, #570badcc);

}

/*Hover*/
.card:hover {
  transform: translateY(5%);
}

.card:hover:before {
  opacity: 1;
}

.card:hover .card-info {
  opacity: 1;
  transform: translateY(0);
}

</style>

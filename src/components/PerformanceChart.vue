<template>
  <div class="container-chart">
    <canvas id="performance-chart"></canvas>
    <!-- {{user.id}} -->
  </div>
</template>

<script>
import Chart from "chart.js";
import axios from "axios"
// import { mapState } from "vuex";

export default {
  name: "PerformanceChart",
  data() {
    return {
      userId:"",
      user:"",
      performanceChartData: {
        type: "line",
        data: {
          labels: [],
          datasets: [
            {
              label: "Your performance",
              data: [],
              backgroundColor: "#9cbfeebe",
              borderColor: "#629ae4",
              borderWidth: 3,
            },
          ],
        },
        options: {
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 25,
                },
              },
            ],
          },
        },
      },
    };
  },
  computed:{
    // ...mapState(['user'])
  },
    async mounted() {
          if(localStorage.getItem("user_token")){
      console.log("logeado pa")
      this.userId = localStorage.getItem("user_id")
      await axios.get("http://localhost:9000/api/users/"+this.userId).then((response)=> {
        this.user = response.data
      })
    }else{
      this.$router.push("/login")
    }

      this.performanceChartData.data.labels = this.user.session.map((response) => "Session #"+(this.user.session.indexOf(response)+1));
      this.performanceChartData.data.datasets[0].data = this.user.session.map(({ score }) => score);

      const ctx = document.getElementById("performance-chart");
      new Chart(ctx, this.performanceChartData);
    },
};
</script>

<style>
.container-chart {
  width: 70%;
  min-width: 300px;
}
</style>

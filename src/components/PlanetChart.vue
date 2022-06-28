<template>
  <div class="container-chart">
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import {mapState} from 'vuex';

export default {
    computed:{
        ...mapState(['user'])
    },
  name: 'PlanetChart',
  data() {
    return {
      planetChartData: {
    type: "line",
    data: {
      labels: ["Session #1", "Session #2", "Session #3", "Session #4", "Session #5", "Session #6"],
      datasets: [
        {
          label: "Your performance",
          data: [1,2,3,2,3,2],
          backgroundColor: "#eec19cbe",
          borderColor: "#eea76e",
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 25
            }
          }
        ]
      }
    }
  }
    }
  },
  mounted() {
    const ctx = document.getElementById('planet-chart');
    new Chart(ctx, this.planetChartData);
  },
  
   
}
</script>

<style>

.container-chart{
    width: 800px;
}

</style>
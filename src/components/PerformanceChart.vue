<template>
  <div class="container-chart">
    <canvas id="performance-chart"></canvas>
    <!-- {{user.id}} -->
  </div>
</template>

<script>
import Chart from "chart.js";
import { mapState } from "vuex";

export default {
  name: "PerformanceChart",
  data() {
    return {
      labels:[],
      score:[],
      performanceChartData: {
        type: "line",
        data: {
          labels: [],
          datasets: [
            {
              label: "Your performance",
              data: [],
              backgroundColor: "#eec19cbe",
              borderColor: "#eea76e",
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
    ...mapState(['user'])
  },
    mounted() {
      this.user.sessions.forEach(element => {
        this.labels.push("Session #"+element.id)
        this.score.push(element.score)
      });

      this.performanceChartData.data.labels = this.labels
      this.performanceChartData.data.datasets[0].data = this.score

      const ctx = document.getElementById("performance-chart");
      new Chart(ctx, this.performanceChartData);
    },
};
</script>

<style>
.container-chart {
  width: 70%;
}
</style>

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
    ...mapState(['user'])
  },
    mounted() {
      this.performanceChartData.data.labels = this.user.sessions.map(({ id }) => "Session #"+id);
      this.performanceChartData.data.datasets[0].data = this.user.sessions.map(({ score }) => score);

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

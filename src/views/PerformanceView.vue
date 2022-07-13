<template>
  <NavBar></NavBar>
  <div class="main-container">
    <h2>Performance Page</h2>
    <PerformanceChart></PerformanceChart>
  </div>
</template>

<script>
import PerformanceChart from "@/components/PerformanceChart.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    PerformanceChart,
    NavBar,
  },
  mounted() {
    if (localStorage.getItem("user_token")) {
      console.log("logeado pa");
    } else {
      this.$router.push("/login");
    }
  },
};
</script>

<style></style>

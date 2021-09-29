<template>
  <TheNavigation />
  <router-view></router-view>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";
export default {
  components: { TheNavigation },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #f7f7f7;
}
#app {
  font-family: "Chakra Petch", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

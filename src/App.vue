<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <TheHomePage msg="Hello Vue 3 + Vite" />
  <TheDupa />
</template>

<script>
import TheHomePage from "@/views/TheHomePage.vue";
import TheDupa from "./views/TheDupa.vue";
export default {
  components: {
    TheHomePage,
    TheDupa,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

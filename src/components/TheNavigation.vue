<template>
  <nav class="navigation">
    <ul class="navigation-list">
      <li class="navigation-list-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="navigation-list-item">
        <router-link to="/about">About</router-link>
      </li>
      <li class="navigation-list-item">
        <router-link to="/search">Search</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
}
.navigation-list {
  list-style: none;
  display: flex;
}
.navigation-list-item {
  padding: 0 20px;
}
</style>

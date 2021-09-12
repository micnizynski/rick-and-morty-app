<template>
  <div class="card">
    <figure class="avatar">
      <img :src="props.character.image" :alt="props.character.name" />
    </figure>
    <p class="description">
      <span class="name">Name: {{ props.character.name }}</span
      ><br />
      <span class="status">Status: {{ props.character.status }}</span>
      <br />
      <span class="species">Species: {{ props.character.species }}</span>
      <br />
      <span class="gender">Gender: {{ props.character.gender }}</span>
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  character: {
    type: Object,
    default: () => {},
  },
});

// console.log(props.character);
</script>
<style scoped>
.card {
  background: #fff;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  display: flex;
  margin: 50px;
  padding: 20px;
  border-radius: 15px;
}
</style>

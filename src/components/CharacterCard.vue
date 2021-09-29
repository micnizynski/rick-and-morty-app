<template>
  <div class="card">
    <figure v-if="props.character" class="avatar">
      <img :src="props.character.image" :alt="props.character.name" />
    </figure>
    <p class="description">
      <span class="name title"
        >Name: <span class="value">{{ props.character.name }}</span></span
      ><br />
      <span class="status title"
        >Status: <span class="value">{{ props.character.status }}</span></span
      >
      <br />
      <span class="species title"
        >Species: <span class="value">{{ props.character.species }}</span></span
      >
      <br />
      <span class="gender title"
        >Gender: <span class="value">{{ props.character.gender }}</span></span
      >
    </p>
  </div>
</template>

<script setup>
// import CharacterCardLoader from "../components/CharacterCardLoader.vue";
const props = defineProps({
  character: {
    type: Object,
    default: () => {},
  },
});
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
.avatar {
  width: 300px;
  height: 300px;
  margin-right: 50px;
}
.description {
  font-size: 25px;
  text-align: left;
}
.title {
  font-weight: bold;
}
.value {
  font-weight: normal;
}
.name .value {
  font-weight: bold;
}
</style>

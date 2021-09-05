<template>
  <div class="pagination">
    <button class="button-previous" @click="changePage(--pageNumber)">
      Prev.
    </button>
    <span class="current-page">{{ pageNumber }}</span>
    <button class="button-next" @click="changePage(++pageNumber)">Next</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { fetchCharacters } from "../api/characters";
const fetchData = ref({});
const pageNumber = ref(1);

const changePage = (page = pageNumber.value) => {
  if (page < 1) return (pageNumber.value = 1);
  fetchCharacters(page).then(({ data }) => (fetchData.value = data));
};
</script>

<style></style>

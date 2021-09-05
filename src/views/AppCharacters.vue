<template>
  <div class=""></div>
  <SearchBar />
  <p class="characters-number">
    <!-- Search from {{ characters.info.count }} available characters -->
  </p>
  <PaginationBar />
  <CharacterCard
    v-for="character in characters.results"
    :key="character.id"
    :character="character"
  />
  {{ characters.info }}
  <PaginationBar />
  <!-- <div class="pagination">
    <button class="button-previous" @click="changePage(--pageNumber)">
      Prev.
    </button>
    <span class="current-page">{{ pageNumber }}</span>
    <button class="button-next" @click="changePage(++pageNumber)">Next</button>
  </div> -->
</template>

<script setup>
import { ref } from "vue";
import SearchBar from "../components/SearchBar.vue";
import PaginationBar from "../components/PaginationBar.vue";
import CharacterCard from "../components/CharacterCard.vue";
import { fetchCharacters } from "../api/characters";

const characters = ref({});
fetchCharacters().then(({ data }) => (characters.value = data));
</script>

<style scoped>
.pagination {
  margin: 20px 0;
}
.current-page {
  font-weight: bold;
  margin: 0 20px;
}
.button-previous,
.button-next {
  border: none;
  border-radius: 5px;
  width: 60px;
  height: 25px;
  background: #06d6a0;
  color: #fff;
  -webkit-box-shadow: 0px 6px 15px 5px rgba(0, 0, 0, 0.24);
  box-shadow: 0px 6px 15px 5px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  font-weight: bold;
}
</style>

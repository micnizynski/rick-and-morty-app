<template>
  <div class=""></div>
  <SearchBar />
  <p class="characters-number">
    <!-- Search from {{ characters.info.count }} available characters -->
  </p>
  <PaginationBar :current="currentPage" @fetch="fetchNewCharacters" />
  <CharacterCard
    v-for="character in characters.results"
    :key="character.id"
    :character="character"
  />
  <PaginationBar :current="currentPage" @fetch="fetchNewCharacters" />
</template>

<script setup>
import { ref } from "vue";
import SearchBar from "../components/SearchBar.vue";
import PaginationBar from "../components/PaginationBar.vue";
import CharacterCard from "../components/CharacterCard.vue";
import { fetchCharacters } from "../api/characters";

const characters = ref({});
const currentPage = ref(1);
fetchCharacters().then(({ data }) => (characters.value = data));
const fetchNewCharacters = (e) => {
  characters.value = e;
  const url = new URL(characters.value.info.next);
  const urlParams = new URLSearchParams(url.search);
  const nextPage = urlParams.get("page");
  currentPage.value = nextPage - 1;
};
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

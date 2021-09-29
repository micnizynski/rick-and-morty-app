<template>
  <div class=""></div>
  <p class="characters-number">
    <!-- Search from {{ characters.info.count }} available characters -->
  </p>
  <PaginationBar :current="currentPage" @fetch="fetchNewCharacters" />
  <div v-if="characters !== null" class="cards-container">
    <transition-group name="slide-in-top">
      <CharacterCard
        v-for="character in characters.results"
        :key="character.id"
        :character="character"
      />
    </transition-group>
  </div>
  <div v-else class="loaders-container">
    <CharacterCardLoader />
    <CharacterCardLoader />
    <CharacterCardLoader />
    <CharacterCardLoader />
  </div>
  <PaginationBar :current="currentPage" @fetch="fetchNewCharacters" />
</template>

<script setup>
import { ref } from "vue";
import PaginationBar from "../components/PaginationBar.vue";
import CharacterCard from "../components/CharacterCard.vue";
import CharacterCardLoader from "../components/CharacterCardLoader.vue";
import { fetchCharacters } from "../api/characters";

const characters = ref(null);
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
.slide-in-top-enter-active {
  animation: fade 0.5s ease;
}
.slide-in-top-leave-active {
  animation: fade 0.5s ease reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
  }
}
</style>

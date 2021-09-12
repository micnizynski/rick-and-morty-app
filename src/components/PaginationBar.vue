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
import { ref, watchEffect } from "vue";
import { fetchCharacters } from "../api/characters";
const props = defineProps({
  current: {
    type: Number,
    default: 1,
  },
});
const emit = defineEmits(["fetch"]);
const pageNumber = ref(1);
watchEffect(() => {
  pageNumber.value = props.current;
});

const changePage = (page = pageNumber.value) => {
  if (page < 1) return (pageNumber.value = 1);
  fetchCharacters(page).then(({ data }) => {
    emit("fetch", data);
  });
};
</script>

<style></style>

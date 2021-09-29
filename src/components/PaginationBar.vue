<template>
  <div class="pagination">
    <button class="button button-previous" @click="changePage(--pageNumber)">
      <IconNext class="icon-prev" /> Prev.
    </button>
    <span class="current-page">{{ pageNumber }}</span>
    <button class="button button-next" @click="changePage(++pageNumber)">
      Next <IconNext class="icon-next" />
    </button>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { fetchCharacters } from "../api/characters";
import IconNext from "../components/icons/IconNext.vue";
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

<style>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}
.current-page,
.button {
  font-family: "Chakra Petch", sans-serif;
}
.current-page {
  width: 20px;
  margin: 0 20px;
  font-size: 20px;
  font-weight: bold;
}
.button {
  display: flex;
  align-items: center;
  width: 75px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background: #292c6a;
  color: white;
  cursor: pointer;
}
.button-next {
  padding-left: 15px;
}
.button-previous {
  padding-right: 15px;
}
.icon-prev,
.icon-next {
  color: white;
}
.icon-prev {
  transform: rotate(180deg);
}
</style>

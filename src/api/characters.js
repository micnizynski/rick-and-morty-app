import axios from "axios";

export const fetchCharacters = (page = 1) => {
  const params = {
    page: page,
  };
  return axios
    .get("https://rickandmortyapi.com/api/character", { params })
    .then((response) => response);
};

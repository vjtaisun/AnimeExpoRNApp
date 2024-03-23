export const setAnimeList = (data) => ({
  type: "SET_ANIME_LIST",
  payload: data,
});

export const toggleFavorite = (itemId) => ({
  type: "TOGGLE_FAVORITE",
  payload: itemId,
});

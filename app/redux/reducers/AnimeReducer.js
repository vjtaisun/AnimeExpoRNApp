const initialState = {
  animeList: [],
  favorites: [],
};

const AnimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ANIME_LIST":
      return {
        ...state,
        animeList: action.payload,
        loading: false,
        error: null,
      };
    case "TOGGLE_FAVORITE":
      const itemId = action.payload;
      const isFavorited = state.favorites.includes(itemId);
      const updatedFavorites = isFavorited
        ? state.favorites.filter((id) => id !== itemId)
        : [...state.favorites, itemId];
      return {
        ...state,
        favorites: updatedFavorites,
      };
    default:
      return state;
  }
};

export default AnimeReducer;

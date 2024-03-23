import { combineReducers } from "redux";
import AnimeReducer from "./AnimeReducer";

const rootReducer = combineReducers({
  animeList: AnimeReducer,
});

export default rootReducer;

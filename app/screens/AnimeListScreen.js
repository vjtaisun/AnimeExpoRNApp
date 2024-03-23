// AnimeListScreen.js
import React, { useState, useEffect } from "react";
import {
  View,
  RefreshControl,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { fetchAnimeListAPI } from "../apis/api";
import AnimeListItem from "./AnimeListItem";
import { Header, AppTextInput, AppText } from "../components";
import { AppStrings } from "../modules";
import { useSelector, useDispatch } from "react-redux";

const AnimeListScreen = () => {

  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const originalAnimeList = useSelector((state) => state.animeList.animeList);


  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await fetchAnimeListAPI();
      dispatch({ type: "SET_ANIME_LIST", payload: data });
      setAnimeList(data);
    } catch (error) {
      console.error("Error fetching anime list:", error);
      if (error.message === "Network Error: No response received from server") {
        setError(
          "Network Error: Unable to connect to server. Please check your internet connection."
        );
      } else if (error.message.startsWith("Server Error")) {
        setError(
          "Server Error: Unable to fetch anime list. Please try again later."
        );
      } else {
        setError("An unexpected error occurred while fetching anime list.");
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  const handleSearch = (text) => {
    try {
      setSearchQuery(text);
      const normalizedText = text.toLowerCase();

      if (!text.trim()) {
        setAnimeList(originalAnimeList);
        return;
      }

      const filteredList = originalAnimeList.filter((anime) =>
        anime.title.toLowerCase().includes(normalizedText)
      );

      setAnimeList(filteredList);
    } catch (error) {
      console.error("Error handling search:", error);
    }
  };


  const renderItem = ({ item }) => (
    <AnimeListItem
      item={item}
      onPress={() => navigation.navigate("AnimeDetail", { anime: item })}
    />
  );

  return (
    <View style={styles.container}>
      <Header header={AppStrings.SHOWS.toUpperCase()} />
      <AppTextInput
        // autoFocus={true}
        placeholder={AppStrings.SEARCH_PLACEHOLDER}
        numberOfLines={1}
        maxLength={20}
        inputContainer={{
          marginTop: 14,
          // marginBottom: 8,
          width: "90%",
          marginHorizontal: 20,
        }}
        value={searchQuery}
        onChangeText={handleSearch}
      />

      <View style={styles.listContainer}>
        {loading ? (
          <ActivityIndicator size="large" color={"rgb(57,62,68)"} />
        ) : animeList ? (
          <FlatList
            numColumns={2}
            data={animeList}
            keyExtractor={(item) => item.mal_id.toString()}
            renderItem={renderItem}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        ) : (
          <AppText style={styles.errorText} title={AppStrings.NO_SHOWS} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  listContainer: {
    flex: 1,
    justifyContent: "center",
    margin: 8,
  },
  searchInput: {
    padding: 10,
    margin: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
  errorText: {
    fontSize: 18,
    marginBottom: 5,
    textAlign:'center'
  },
});

export default AnimeListScreen;
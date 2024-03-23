// AnimeDetailScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import {Header} from "../components";
import { AppButton, AppText } from "../components";
import { AppStrings } from "../modules";
import { useSelector, useDispatch } from "react-redux";

const AnimeDetailScreen = ({ route }) => {
    const { anime } = route.params;
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.animeList.favorites);
    const isFavorite = favorites.includes(anime.mal_id);

    useEffect(() => {
  
    }, [isFavorite]);

    const handleToggleFavorite = () => {
      dispatch({ type: "TOGGLE_FAVORITE", payload: anime.mal_id });
    };

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Header header={anime.title} />
        <Image
          source={{ uri: anime.images.jpg.large_image_url }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.detailsContainer}>
          {anime.background ? (
            <AppText style={styles.detailText} title={`${anime.background}`} />
          ) : null}
          {anime.season ? (
            <AppText
              style={styles.detailText}
              title={`Season: ${anime.season}`}
            />
          ) : null}

          {anime.popularity ? (
            <AppText
              style={styles.detailText}
              title={`Popularity: ${anime.popularity}`}
            />
          ) : null}

          {anime.rank ? (
            <AppText style={styles.detailText} title={`Rank: ${anime.rank}`} />
          ) : null}
          {anime.year ? (
            <AppText style={styles.detailText} title={`Year: ${anime.year}`} />
          ) : null}
          {anime.episodes ? (
            <AppText
              style={styles.detailText}
              title={`Episodes: ${anime.episodes}`}
            />
          ) : null}
          {anime.rating ? (
            <AppText
              style={styles.detailText}
              title={`Rating: ${anime.rating}`}
            />
          ) : null}
          
        </View>
        <AppButton
          style={styles.favButton}
          title={isFavorite ? AppStrings.FAVOURITE : AppStrings.MARK_FAVOURITE}
          onPress={handleToggleFavorite}
        />
      </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom:8
  },
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 8,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detailText: {
    fontSize: 18,
    marginBottom: 5,
  },
  favButton:{
    width:'50%'
  }
});

export default AnimeDetailScreen;
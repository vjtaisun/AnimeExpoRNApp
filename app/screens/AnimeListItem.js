// AnimeListItem.js
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { AppText } from "../components";

const AnimeListItem = ({ item, onPress, isFavorite }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        source={{ uri: item.images.jpg.large_image_url }}
        style={styles.image}
      ></Image>
      <View style={styles.overlay}>
        <AppText style={styles.title} title={item.title.toUpperCase()} />
        {isFavorite && <Text style={styles.favorite}>Favorited</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 2,
    marginVertical: 2,
    elevation: 4,
    borderRadius: 2,
    overflow: "hidden",
    borderWidth: .6,
    borderColor: "black",
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    height: 240,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
  },
  title: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default AnimeListItem;

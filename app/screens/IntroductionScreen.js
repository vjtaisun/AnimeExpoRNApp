import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { AppButton, AppText } from "../components";
import {AppStrings} from "../modules"
import { Images } from "../assets";

const IntroductionScreen = ({ navigation }) => {
  const handleNavigate = () => {
    navigation.navigate("AnimeList");
  };

  return (
    <View style={styles.container}>
      <Image
        style={[Images.animeLogo.style, styles.animeLogo]}
        source={Images.animeLogo.source}
      />
      <Image
        style={[
          Images.introductionImg.style,
          { resizeMode: "contain", flex: 0.6 },
        ]}
        source={Images.introductionImg.source}
      />

      <View style={styles.buttomCotainer}>
        <AppText style={styles.description} title={AppStrings.INTRODUCTION} />
        <AppText
          style={styles.consentMsg}
          title={AppStrings.GDPR_CONSENT_MSG}
        />
        <AppButton title={AppStrings.START} onPress={handleNavigate} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  animeLogo:{ resizeMode: "center", width: 100, height: 60, marginBottom:16 },
  buttomCotainer:{
    // flex:0.4,
    alignItems:'center',
    justifyContent:'flex-end',
    paddingHorizontal:16
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 4,
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    fontWeight:'bold',
    marginTop:14,
    marginBottom: 10,
    textAlign: "center",
  },
  consentMsg: {
    fontSize: 10,
    margin: 10,
    textAlign: "center",
  },
});

export default IntroductionScreen;

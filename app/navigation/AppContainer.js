import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AnimeListScreen from "../screens/AnimeListScreen";
import AnimeDetailScreen from "../screens/AnimeDetailScreen";
import IntroductionScreen from "../screens/IntroductionScreen";

const Stack = createStackNavigator();

function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="IntroductionScreen"
          component={IntroductionScreen}
        />
        <Stack.Screen name="AnimeList" component={AnimeListScreen} />
        <Stack.Screen name="AnimeDetail" component={AnimeDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;

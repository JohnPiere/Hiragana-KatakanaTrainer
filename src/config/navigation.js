import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/mainmenu/home";
import HiraganaTrainerScreen from "../screens/mainmenu/hiraganatrainerscreen";
import KatakanaTrainerScreen from "../screens/mainmenu/katakanatrainerscreen";

//Hiragana Section
import ATrainer from "../screens/trainer/hiraganatrainer/ATrainer";
import KaTrainer from "../screens/trainer/hiraganatrainer/KaTrainer";
import HaTrainer from "../screens/trainer/hiraganatrainer/HaTrainer";
import MaTrainer from "../screens/trainer/hiraganatrainer/MaTrainer";
import NaTrainer from "../screens/trainer/hiraganatrainer/NaTrainer";
import RaTrainer from "../screens/trainer/hiraganatrainer/RaTrainer";
import SaTrainer from "../screens/trainer/hiraganatrainer/SaTrainer";
import TaTrainer from "../screens/trainer/hiraganatrainer/TaTrainer";
import WaTrainer from "../screens/trainer/hiraganatrainer/WaTrainer";
import YaTrainer from "../screens/trainer/hiraganatrainer/YaTrainer";

//KatakanaSection
import AKaTrainer from "../screens/trainer/katakanatrainer/AKaTrainer";
import KaKaTrainer from "../screens/trainer/katakanatrainer/KaKaTrainer";
import HaKaTrainer from "../screens/trainer/katakanatrainer/HaKaTrainer";
import MaKaTrainer from "../screens/trainer/katakanatrainer/MaKaTrainer";
import NaKaTrainer from "../screens/trainer/katakanatrainer/NaKaTrainer";
import RaKaTrainer from "../screens/trainer/katakanatrainer/RaKaTrainer";
import SaKaTrainer from "../screens/trainer/katakanatrainer/SaKaTrainer";
import TaKaTrainer from "../screens/trainer/katakanatrainer/TaKaTrainer";
import WaKaTrainer from "../screens/trainer/katakanatrainer/WaKaTrainer";
import YaKaTrainer from "../screens/trainer/katakanatrainer/YaKaTrainer";

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AuthStack.Screen name="Home" component={HomeScreen} />
    <AuthStack.Screen
      name="HiraganaTrainerScreen"
      component={HiraganaTrainerStackScreen}
    />
    <AuthStack.Screen
      name="KatakanaTrainerScreen"
      component={KatakanaTrainerStackScreen}
    />
  </AuthStack.Navigator>
);

const HiraganaTrainerStack = createStackNavigator();
const HiraganaTrainerStackScreen = () => (
  <HiraganaTrainerStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <HiraganaTrainerStack.Screen
      name="HiraganaTrainerScreen"
      component={HiraganaTrainerScreen}
    />
    <HiraganaTrainerStack.Screen name="ATrainer" component={ATrainer} />
    <HiraganaTrainerStack.Screen name="KaTrainer" component={KaTrainer} />
    <HiraganaTrainerStack.Screen name="HaTrainer" component={HaTrainer} />
    <HiraganaTrainerStack.Screen name="MaTrainer" component={MaTrainer} />
    <HiraganaTrainerStack.Screen name="NaTrainer" component={NaTrainer} />
    <HiraganaTrainerStack.Screen name="RaTrainer" component={RaTrainer} />
    <HiraganaTrainerStack.Screen name="SaTrainer" component={SaTrainer} />
    <HiraganaTrainerStack.Screen name="TaTrainer" component={TaTrainer} />
    <HiraganaTrainerStack.Screen name="WaTrainer" component={WaTrainer} />
    <HiraganaTrainerStack.Screen name="YaTrainer" component={YaTrainer} />
  </HiraganaTrainerStack.Navigator>
);

const KatakanaTrainerStack = createStackNavigator();
const KatakanaTrainerStackScreen = () => (
  <KatakanaTrainerStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <KatakanaTrainerStack.Screen
      name="KatakanaTrainerScreen"
      component={KatakanaTrainerScreen}
    />
    <KatakanaTrainerStack.Screen name="AKaTrainer" component={AKaTrainer} />
    <KatakanaTrainerStack.Screen name="KaKaTrainer" component={KaKaTrainer} />
    <KatakanaTrainerStack.Screen name="HaKaTrainer" component={HaKaTrainer} />
    <KatakanaTrainerStack.Screen name="MaKaTrainer" component={MaKaTrainer} />
    <KatakanaTrainerStack.Screen name="NaKaTrainer" component={NaKaTrainer} />
    <KatakanaTrainerStack.Screen name="RaKaTrainer" component={RaKaTrainer} />
    <KatakanaTrainerStack.Screen name="SaKaTrainer" component={SaKaTrainer} />
    <KatakanaTrainerStack.Screen name="TaKaTrainer" component={TaKaTrainer} />
    <KatakanaTrainerStack.Screen name="WaKaTrainer" component={WaKaTrainer} />
    <KatakanaTrainerStack.Screen name="YaKaTrainer" component={YaKaTrainer} />
  </KatakanaTrainerStack.Navigator>
);

export default () => {
  return (
    <NavigationContainer>
      <AuthStackScreen />
    </NavigationContainer>
  );
};

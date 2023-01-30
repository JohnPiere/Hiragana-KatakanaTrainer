import React from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("HiraganaTrainerScreen")}
        >
          <Text style={styles.cardText}>Hiragana Trainer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("KatakanaTrainerScreen")}
        >
          <Text style={styles.cardText}>Katakana Trainer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(40, 40, 40, 1)",
    flex: 1,
  },
  card: {
    marginTop: "10%",
    alignSelf: "center",
    width: "80%",
    height: 100,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    marginTop: "50%",
  },
  cardText: {
    fontSize: 20,
  },
});

export default Home;

import React from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HiraganaTrainerScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.pop()}>
        <Text>Back to previous menu</Text>
      </TouchableOpacity>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("ATrainer")}
        >
          <Text style={styles.title}>Trainer 1</Text>
          <Text style={styles.cardText}>あいうえお</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("KaTrainer")}
        >
          <Text style={styles.title}>Trainer 2</Text>
          <Text style={styles.cardText}>かきくけこ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("SaTrainer")}
        >
          <Text style={styles.title}>Trainer 3</Text>
          <Text style={styles.cardText}>さしすせそ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("TaTrainer")}
        >
          <Text style={styles.title}>Trainer 4</Text>
          <Text style={styles.cardText}>たちつてと</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("NaTrainer")}
        >
          <Text style={styles.title}>Trainer 5</Text>
          <Text style={styles.cardText}>なにぬねの</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("HaTrainer")}
        >
          <Text style={styles.title}>Trainer 6</Text>
          <Text style={styles.cardText}>はひふへほ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("MaTrainer")}
        >
          <Text style={styles.title}>Trainer 7</Text>
          <Text style={styles.cardText}>まみむめも</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("YaTrainer")}
        >
          <Text style={styles.title}>Trainer 8</Text>
          <Text style={styles.cardText}>やゆよ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("RaTrainer")}
        >
          <Text style={styles.title}>Trainer 9</Text>
          <Text style={styles.cardText}>らりるれろ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("WaTrainer")}
        >
          <Text style={styles.title}>Trainer 9</Text>
          <Text style={styles.cardText}>わをん</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  card: {
    width: "45%",
    height: 100,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    width: "90%",
    height: 40,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HiraganaTrainerScreen;

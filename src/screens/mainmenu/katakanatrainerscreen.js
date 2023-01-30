import React from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const KatakanaTrainerScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.pop()}>
        <Text>Back to previous menu</Text>
      </TouchableOpacity>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("AKaTrainer")}
        >
          <Text style={styles.title}>Trainer 1</Text>
          <Text style={styles.cardText}>ア イ ウ エ オ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("KaKaTrainer")}
        >
          <Text style={styles.title}>Trainer 2</Text>
          <Text style={styles.cardText}>カ キ ク ケ コ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("SaKaTrainer")}
        >
          <Text style={styles.title}>Trainer 3</Text>
          <Text style={styles.cardText}>サ シ ス セ ソ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("TaKaTrainer")}
        >
          <Text style={styles.title}>Trainer 4</Text>
          <Text style={styles.cardText}>タ チ ツ テ ト</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("NaKaTrainer")}
        >
          <Text style={styles.title}>Trainer 5</Text>
          <Text style={styles.cardText}>ナ ニ ヌ ネ ノ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("HaKaTrainer")}
        >
          <Text style={styles.title}>Trainer 6</Text>
          <Text style={styles.cardText}>ハ ヒ フ ヘ ホ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("MaKaTrainer")}
        >
          <Text style={styles.title}>Trainer 7</Text>
          <Text style={styles.cardText}>マ ミ ム メ モ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("YaKaTrainer")}
        >
          <Text style={styles.title}>Trainer 8</Text>
          <Text style={styles.cardText}>ヤ ユ ヨ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("RaKaTrainer")}
        >
          <Text style={styles.title}>Trainer 9</Text>
          <Text style={styles.cardText}>ラ リ ル レ ロ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("YaKaTrainer")}
        >
          <Text style={styles.title}>Trainer 9</Text>
          <Text style={styles.cardText}>ワ　ヲ　ン</Text>
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

export default KatakanaTrainerScreen;

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Vibration,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import * as Progress from "react-native-progress";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./TrainerStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const MaKaTrainer = ({ navigation }) => {
  // State variables to track the score and incorrectly answered characters
  const [score, setScore] = useState(0);
  const [finish, setFinish] = useState(false);
  const [totalProgress, setTotalProgress] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  // List of all Hiragana characters
  const hiragana = ["マ", "ミ", "ム", "メ", "モ"];

  // Mapping from Hiragana characters to their romanized counterparts
  const hiraganaToRomanized = {
    マ: "ma",
    ミ: "mi",
    ム: "mu",
    メ: "me",
    モ: "mo",
    // ...add the rest of the mappings here
  };

  useEffect(() => {
    if (finish) {
      setTotalProgress(100);
      setIsModalVisible(true);
      setIsDisabled(true);
    }
  }, [finish]);

  // Object to store the score for each Hiragana character
  const [characterScores, setCharacterScores] = useState(
    hiragana.reduce((acc, char) => {
      acc[char] = 0;
      return acc;
    }, {})
  );

  useEffect(() => {
    // Check if all characters have a score of 15
    if (hiragana.every((c) => characterScores[c] === 15)) {
      setFinish(true);
    }
    // Check if only one character has a score less than 15
    const charactersWithLowScore = hiragana.filter(
      (c) => characterScores[c] < 15
    );
    if (charactersWithLowScore.length === 15) {
      setFinish(true);
    }
    if (charactersWithLowScore.length === 1) {
      setFinish(true);
    }
    // Calculate and update the total progress
    const totalScore = hiragana.length * 15;
    const currentTotalProgress =
      Object.values(characterScores).reduce((a, b) => a + b, 0) / totalScore;
    setTotalProgress(currentTotalProgress);
  }, [characterScores]);

  // Helper function to get a random character from the list of Hiragana
  const getRandomCharacter = () => {
    // Get a list of all the characters except the current one
    const charactersWithLowScore = hiragana.filter(
      (c) => c !== currentCharacter && characterScores[c] < 15
    );
    if (charactersWithLowScore.length > 0) {
      return charactersWithLowScore[
        Math.floor(Math.random() * charactersWithLowScore.length)
      ];
    } else {
      return null;
    }
  };

  // Helper function to shuffle an array
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Helper function to get four multiple choice options for a given character
  const getMultipleChoiceOptions = (character) => {
    // First, get a list of all the characters except the one we are currently displaying
    let options = hiragana.filter((c) => c !== character);
    // Then shuffle the list and slice off the first four characters
    options = shuffle(options).slice(0, 4);
    // Convert the characters to their romanized counterparts
    options = options.map((option) => hiraganaToRomanized[option]);
    // Add the correct character to the list of options
    options.push(hiraganaToRomanized[character]);
    // Finally, shuffle the options again
    return shuffle(options);
  };

  // State variable to track the current character
  const [currentCharacter, setCurrentCharacter] = useState(() => {
    // If there are characters with a score less than 15, show one of those first
    const charactersWithLowScore = hiragana.filter(
      (c) => characterScores[c] < 15
    );
    if (charactersWithLowScore.length > 0) {
      return charactersWithLowScore[0];
    } else {
      setFinish(true);
      return null;
    }
  });
  // State variable to track the multiple choice options
  const [options, setOptions] = useState(() =>
    getMultipleChoiceOptions(currentCharacter)
  );

  // Function to handle when the user selects an option
  const selectOption = (selectedOption) => {
    if (currentCharacter === null) return;
    const selectedHiragana = hiragana.find(
      (char) => hiraganaToRomanized[char] === selectedOption
    );

    if (selectedHiragana === currentCharacter) {
      setScore(score + 1);
      setCharacterScores({
        ...characterScores,
        [currentCharacter]: characterScores[currentCharacter] + 1,
      });
    } else {
      Vibration.vibrate(200);
    }

    // If the score for the current character is equal to 15, the trainer is finished for that character
    if (characterScores[currentCharacter] === 15) {
      // Display a message indicating that the trainer is finished for that character
      const charactersWithLowScore = hiragana.filter(
        (c) => characterScores[c] < 15
      );
      if (charactersWithLowScore.length === 0) {
        setFinish(true);
      } else {
        setCurrentCharacter(charactersWithLowScore[0]);
        setOptions(getMultipleChoiceOptions(currentCharacter));
      }
    } else {
      // Otherwise, get a new character and set of options
      setCurrentCharacter(getRandomCharacter());
      setOptions(getMultipleChoiceOptions(currentCharacter));
    }
  };

  const reset = () => {
    setCurrentCharacter(hiragana[0]);
    setScore(0);
    setIsModalVisible(false);
    setTotalProgress(0);
    setFinish(false);
    setIsDisabled(false);
    setCharacterScores(
      hiragana.reduce((acc, char) => {
        acc[char] = 0;
        return acc;
      }, {})
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal visible={isModalVisible} animationType="fade" transparent={true}>
        <TouchableWithoutFeedback
          disabled={isDisabled}
          onPress={setIsModalVisible}
        >
          <View style={styles.modalContainer}>
            <Text style={finish ? styles.congratsText : styles.normalText}>
              Congratulations, Trainer Completed!
            </Text>
            <View style={styles.modal}>
              <TouchableOpacity
                style={finish ? styles.closeDisabled : styles.normalClose}
              >
                <MaterialIcons
                  onPress={() => {
                    setIsModalVisible(false);
                  }}
                  name="close"
                  color="white"
                  size={60}
                />
              </TouchableOpacity>
              <View style={styles.modalButtonContainer}>
                <TouchableOpacity style={styles.modalButton} onPress={reset}>
                  <View style={styles.modalButtonContent}>
                    <MaterialIcons
                      style={styles.buttonIcon}
                      name="repeat"
                      size={45}
                      color="white"
                    />
                    <Text style={styles.modalText}>Restart</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    setIsModalVisible(false);
                    navigation.pop();
                  }}
                >
                  <View style={styles.modalButtonContent}>
                    <MaterialIcons
                      style={styles.buttonIcon}
                      name="home"
                      size={45}
                      color="white"
                    />
                    <Text style={styles.modalText}>Home</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          setIsModalVisible(true);
        }}
      >
        <MaterialIcons name="menu" size={50} color="#333" />
      </TouchableOpacity>
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <Progress.Bar
            width={300}
            progress={totalProgress}
            height={15}
            color={"black"}
            borderColor={"black"}
            borderWidth={2}
            borderRadius={10}
          />
        </View>
      </View>
      <View style={styles.characterContainer}>
        <Text style={styles.character}>{currentCharacter}</Text>
      </View>
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.button}
              key={option}
              onPress={() => selectOption(option)}
            >
              <Text style={styles.buttonText}>{option}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default MaKaTrainer;

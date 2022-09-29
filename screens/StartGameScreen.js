import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";

import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";

function StartGameScreen(props) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function inputNumberHandler(userInput) {
    setEnteredNumber(userInput);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const enteredUserInput = parseInt(enteredNumber);

    if (
      isNaN(enteredUserInput) ||
      enteredUserInput <= 0 ||
      enteredUserInput > 99
    ) {
      Alert.alert(
        "Invalid Number!",
        "Input must be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    props.onPickNumber(enteredUserInput);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={inputNumberHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    marginVertical: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;

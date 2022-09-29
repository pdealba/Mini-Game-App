import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function InstructionText(props) {
  return (
    <Text style={[styles.instructionText, props.style]}>{props.children}</Text>
  );
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    fontSize: 24,
    color: Colors.accent500,
  },
});

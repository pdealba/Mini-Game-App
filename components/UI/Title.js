import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    borderWidth: 2,
    borderColor: "white",
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    padding: 12,
  },
});
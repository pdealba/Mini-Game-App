import { Text, StyleSheet } from "react-native";

function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    borderWidth: 2,
    borderColor: "#ddb52f",
    fontWeight: "bold",
    fontSize: 24,
    color: "#ddb52f",
    textAlign: "center",
    padding: 12,
  },
});

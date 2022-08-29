import { View, Text, StyleSheet, Pressable } from "react-native";

const PrimaryButton = ({ children }) => {
  const pressHandler = () => {
    console.log("button pressed");
  };
  return (
    <View style={styles.buttonOutterContainer}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        pre
      >
        <Text style={styles.textContainer}>{children}</Text>
      </Pressable>
    </View>
  );
};
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOutterContainer: {
    borderRadius: 28,

    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    // opacity: "#640233",
    backgroundColor: "#72063c",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  textContainer: {
    color: "white",
    fontSize: 15,
  },
  pressed: {
    opacity: 0.75,
  },
});

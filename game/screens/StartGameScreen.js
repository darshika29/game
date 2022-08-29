import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} keyboardType="number-pad" />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonSubContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonSubContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};
export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center", //aligning in y axis
    alignItems: "center", //aligning in x axis

    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#3b021f",
    borderRadius: 15,
    elevation: 4, //shadow in android
    //for setting shadow in ios
    shadowColor: "black", //color of shadow
    shadowOffset: { width: 0, height: 2 }, //height and width of shadow
    shadowRadius: 6, //distance of spread of shadow
    shadowOpacity: 4, //transparancy
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttonSubContainer: {
    flex: 1,
  },
});

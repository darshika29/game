import { ImageBackground, StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    //for linear gradient check expo lineargradient

    <ImageBackground
      style={styles.rootcontainer}
      source={require("./assets/images/background.png")}
      resizeMode="cover"
      imageStyle={styles.imageStyles}
    >
      <StartGameScreen />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    backgroundColor: "#ddb52f",
  },
  imageStyles: {
    opacity: 0.6,
  },
});

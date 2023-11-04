import { Raleway_200ExtraLight } from "@expo-google-fonts/raleway";
import { Quicksand_300Light } from "@expo-google-fonts/quicksand";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Raleway_200ExtraLight,
    Quicksand_300Light,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <Text>This text has default style</Text>
      <Text style={styles.raleway}>This text uses Raleway Font</Text>
      <Text style={styles.quicksand}>This text uses QuickSand Font</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  raleway: {
    fontSize: 20,
    fontFamily: "Raleway_200ExtraLight",
  },
  quicksand: {
    fontSize: 20,
    fontFamily: "Quicksand_300Light",
  },
});

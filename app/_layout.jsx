import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Text, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Boldonse: require("../assets/fonts/Boldonse-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View>
      <Text style={{ fontFamily: "Boldonse" }}>Hello, World!</Text>
    </View>
  );
}

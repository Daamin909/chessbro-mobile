import { Tabs } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Navbar from "../src/components/Navbar/Navbar";
import {
  faHome,
  faUser,
  faCog,
  faBookmark,
  faChessBoard,
} from "@fortawesome/free-solid-svg-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";
import { DefaultTheme, PaperProvider } from "react-native-paper";
import Toast from "react-native-toast-message";

async function lockOrientation() {
  await ScreenOrientation.unlockAsync();
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.PORTRAIT_UP
  );
}
const _layout = () => {
  useEffect(() => {
    lockOrientation();
  }, []);
  const theme = {
    ...DefaultTheme,
    dark: true,
    colors: {
      ...DefaultTheme.colors,
      primary: "#072434",
      primaryContainer: "#072434",
      secondary: "#072434",
      secondaryContainer: "#072434",
      background: "#072434",
      surface: "#072434",
      surfaceVariant: "#072434",
      onPrimary: "#E3EEF4",
      onPrimaryContainer: "#E3EEF4",
      onSecondary: "#E3EEF4",
      onSecondaryContainer: "#E3EEF4",
      onBackground: "#E3EEF4",
      onSurfaceVariant: "#E3EEF4",
      outline: "#bec8cd",
      placeholder: "#bec8cd",
      disabled: "#bec8cd",
    },
  };

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
          <PaperProvider theme={theme}>
            <Navbar />
            <Tabs screenOptions={{ headerShown: false }}>
              <Tabs.Screen
                name="SavedGames"
                options={{
                  title: "Saved Games",
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesomeIcon
                      icon={faBookmark}
                      size={size}
                      color={color}
                    />
                  ),
                }}
              />
              <Tabs.Screen
                name="GameReview"
                options={{
                  title: "Game Review",
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesomeIcon
                      icon={faChessBoard}
                      size={size}
                      color={color}
                    />
                  ),
                }}
              />
              <Tabs.Screen
                name="index"
                options={{
                  title: "Home",
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesomeIcon icon={faHome} size={size} color={color} />
                  ),
                }}
              />
              <Tabs.Screen
                name="MyGames"
                options={{
                  title: "My Games",
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesomeIcon icon={faUser} size={size} color={color} />
                  ),
                }}
              />
              <Tabs.Screen
                name="Settings"
                options={{
                  title: "Settings",
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesomeIcon icon={faCog} size={size} color={color} />
                  ),
                }}
              />
            </Tabs>
            <Toast />
          </PaperProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};
export default _layout;

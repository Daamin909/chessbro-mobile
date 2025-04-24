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
import { SafeAreaView } from "react-native-safe-area-context";

const _layout = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{ flex: 1 }}>
        <Navbar />
        <Tabs screenOptions={{ headerShown: false }}>
          <Tabs.Screen
            name="SavedGames"
            options={{
              title: "Saved Games",
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon icon={faBookmark} size={size} color={color} />
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
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};
export default _layout;

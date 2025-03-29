import { useFonts } from "expo-font";
import { Tabs } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faUser,
  faCog,
  faBookmark,
  faChessBoard,
} from "@fortawesome/free-solid-svg-icons";
export default function RootLayout() {
  useFonts({
    Boldonse: require("../assets/fonts/Boldonse-Regular.ttf"),
  });

  return (
    <Tabs>
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
            <FontAwesomeIcon icon={faChessBoard} size={size} color={color} />
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
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faCog} size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

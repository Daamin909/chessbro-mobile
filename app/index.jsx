import { StyleSheet, Text, SafeAreaView } from "react-native";
import Navbar from "../src/components/Navbar/Navbar";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default App;

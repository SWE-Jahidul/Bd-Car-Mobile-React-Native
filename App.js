import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link, NativeRouter, Route, Routes } from "react-router-native";
import About from "./Component.js/About/About";
import Home from "./Component.js/Home/Home";
import Products from "./Component.js/Products/Products";
import { Box, NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider style={styles.container}>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Hii Rokib ! i am Hare test </Text>
        <Text>Hii Shafiur ! i am Hare. What's up guru? </Text>
        <StatusBar style="auto" />
        <NativeRouter>
          <Link to="/">
            <Text> Home </Text>
          </Link>
          <Link to="/home">
            <Text> Home </Text>
          </Link>

          <Link to="/about">
            <Text> About </Text>
          </Link>

          <Link to="/products">
            <Text> Products </Text>
          </Link>

          <Routes>
            <Route path="/" element={<Home></Home>}></Route>

            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/products" element={<Products></Products>}></Route>
          </Routes>
        </NativeRouter>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

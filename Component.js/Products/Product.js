import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";

const styles = StyleSheet.create({
  mainCard: {
    margin: 5,
    padding: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    marginVertical: 10,
  },
  producttilte: {
    color: "blue",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
  },

  productimages: {
    alignItems: "center",
    justifyContent: "center",
  },

  productDiscription: {
    fontSize: 16,
    color: "black",
    marginVertical: 5,
  },
});

import { VStack, Box, Divider } from "native-base";

export default function Product({ product }) {
  const { title, thabnil, discription } = product;
  return (
    <Box style={styles.mainCard}>
      <VStack>
        <Image
          style={styles.productimages}
          source={{
            uri: `data:image/png;base64,${thabnil}`,
            uri: "https://i.ytimg.com/vi/dip_8dmrcaU/maxresdefault.jpg",
          }}
          style={{ height: 200, width: 380 }}
        />

        <Text style={styles.producttilte}> {title}</Text>
        <Text style={styles.productDiscription}> {discription}</Text>
      </VStack>
    </Box>
  );
}

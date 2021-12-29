import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Product from "./Product";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://shrouded-harbor-84354.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <View>
      <Text> i am Products {products.length}</Text>

      <ScrollView>
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </ScrollView>
    </View>
  );
}

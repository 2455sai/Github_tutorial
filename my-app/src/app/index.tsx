import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";

import Navbar from "./Navbar";
import { mobileData } from "./data";

export default function Home() {
  return (
    <View style={styles.container}>

      <Navbar />

      <ScrollView>
        {mobileData.map((product) => (
          <View key={product.id} style={styles.card}>

            <Image
              source={product.image}
              style={styles.image}
            />

            <Text style={styles.name}>
              {product.model}
            </Text>

            <Text style={styles.price}>
              ₹{product.price}
            </Text>

          </View>
        ))}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },

  card: {
    margin: 10,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 8,
  },

  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },

  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
});
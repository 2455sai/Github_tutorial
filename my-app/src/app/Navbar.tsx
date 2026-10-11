import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Navbar() {
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.navbar}>

        {/* Top Row */}
        <View style={styles.topRow}>

          {/* Logo */}
          <Text
            style={[
              styles.logo,
              { fontSize: width < 400 ? 20 : 24 },
            ]}
          >
            Amazon App
          </Text>

          {/* Sign in */}
          <TouchableOpacity style={styles.signIn}>
            <Text style={styles.smallText}>Sign in</Text>
            <Text style={styles.smallText}>Sign up</Text>
          </TouchableOpacity>

          {/* Cart */}
          <TouchableOpacity style={styles.cart}>
            <Text style={styles.cartIcon}>🛒</Text>
            <Text style={styles.smallText}>Cart</Text>
          </TouchableOpacity>

        </View>

        {/* Search Row */}
        <View style={styles.searchRow}>

          <TextInput
            placeholder="Search products"
            placeholderTextColor="#666"
            style={styles.searchInput}
          />

          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchText}>SEARCH</Text>
          </TouchableOpacity>

        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#232F3E",
  },

  navbar: {
    backgroundColor: "#232F3E",
    paddingHorizontal: 12,
    paddingBottom: 10,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 55,
  },

  logo: {
    color: "white",
    fontWeight: "bold",
    flex: 1,
  },

  signIn: {
    alignItems: "center",
    marginHorizontal: 8,
  },

  cart: {
    alignItems: "center",
    marginLeft: 8,
  },

  cartIcon: {
    fontSize: 20,
  },

  smallText: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
  },

  searchRow: {
    flexDirection: "row",
    width: "100%",
    marginTop: 8,
  },

  searchInput: {
    flex: 1,
    height: 42,
    backgroundColor: "white",
    borderRadius: 4,
    paddingHorizontal: 10,
    fontSize: 14,
  },

  searchButton: {
    width: 75,
    height: 42,
    backgroundColor: "#FF9900",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    borderRadius: 4,
  },

  searchText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 12,
  },
});
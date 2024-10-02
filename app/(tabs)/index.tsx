import { NewsItem } from "@/components/NewsItem";
import { useNewsApi } from "@/hooks/api/useNewsApi";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View
} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logoText}>News Reader</Text>
      </View>
      <FlatList
        data={useNewsApi("https://newsapi.org/v2/top-headlines", {
          country: "us",
          apiKey: "3ca52dccb8094d808a60331d6e07905b",
        })}
        keyExtractor={(item) => item.url}
        renderItem={ ({ item }) => <NewsItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

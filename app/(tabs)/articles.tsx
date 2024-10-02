import { NewsItem } from "@/components/NewsItem";
import { useNewsApi } from "@/hooks/api/useNewsApi";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Articles() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Articles</Text>
      </View>
      <FlatList
        data={useNewsApi("https://newsapi.org/v2/everything", {
          q: "japan",
          searchIn: "title,description,content",
          apiKey: "3ca52dccb8094d808a60331d6e07905b",
        })}
        keyExtractor={(item) => item.publishedAt}
        renderItem={({ item }) => <NewsItem item={item} />}
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
    backgroundColor: "#f0f0f0",
    padding: 16,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

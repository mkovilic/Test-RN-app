import React from "react";
import { NewsItem } from "@/components/NewsItem";
import { useNewsApi } from "@/hooks/api/useNewsApi";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Loader } from "@/components/Loader";

export default function Articles() {
  const { news, loading, error } = useNewsApi(
    "https://newsapi.org/v2/everything",
    {
      q: "japan",
      serachIn: "title,description,content",
      apiKey: process.env.API_KEY,
    }
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Articles</Text>
      </View>
      <FlatList
        data={news}
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

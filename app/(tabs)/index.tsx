import { NewsItem } from "@/components/NewsItem";
import { useNewsApi } from "@/hooks/api/useNewsApi";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Loader } from "@/components/Loader";

export default function Index() {
  const { news, loading, error } = useNewsApi(
    "https://newsapi.org/v2/top-headlines",
    { country: "us", apiKey: process.env.API_KEY }
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
        <Text style={styles.logoText}>News Reader</Text>
      </View>
      <FlatList
        data={news}
        keyExtractor={(item) => item.url}
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
    alignItems: "center",
    marginBottom: 16,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

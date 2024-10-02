import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import { useNewsApi } from "@/hooks/api/useNewsApi";
import { NewsItem } from "@/components/NewsItem";
import { SearchBar } from "@/components/SearchBar";
import { Loader } from "@/components/Loader";

export default function Search() {
  const [searchText, setSearchText] = useState("");

  const { news, loading, error } = useNewsApi(
    "https://newsapi.org/v2/everything",
    {
      q: searchText || "japan",
      searchIn: "title",
      apiKey: process.env.API_KEY,
    },
    [searchText]
  );

  if (loading) {
    return <Loader/>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  function handleTextChange(text: string) {
    setSearchText(text);
  }

  console.log("Searching for:", searchText);
  return (
    <View style={styles.container}>
      <SearchBar
        searchText={searchText}
        onChange={handleTextChange}
        onClear={() => setSearchText("")}
      />
      <Text>Search results</Text>
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
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

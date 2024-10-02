import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, StyleSheet, View, Pressable } from "react-native";

export function SearchBar({
  searchText,
  onChange,
  onClear,
}: {
  searchText: string;
  onChange: (text: string) => void;
  onClear: () => void;
}) {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color="black" />
      <TextInput
        style={styles.input}
        placeholder="Search articles..."
        value={searchText}
        onChangeText={onChange}
      />
      {searchText.trim().length > 0 && (
        <Ionicons
          style={styles.trailingIcon}
          name="close"
          size={24}
          color="black"
          onPress={onClear}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 6,
    width: "100%",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    paddingHorizontal: 10,
  },
  trailingIcon: {
    marginLeft: "auto",
  },
});

import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Detail() {
  const params = useLocalSearchParams();
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>{params.title}</Text>
      <Image
        source={{ uri: `${params.imageUrl}` }}
        style={ styles.image}
      />
      <Text style={styles.description}>{params.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    padding: 16,
    alignItems: "center",
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    marginTop: 16,
  },
    image: {
        width: 300,
        height: 300,
        borderRadius: 16,
        marginTop: 16,
    },
});

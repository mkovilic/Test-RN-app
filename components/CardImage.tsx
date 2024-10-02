import { ThemedText } from "./ThemedText";
import { Image, StyleSheet, View } from "react-native";
import { Link } from "expo-router";

type CardImageProps = {
  imageUri: string;
  title: string;
};

export function CardImage({ imageUri, title }: CardImageProps) {
  return (
    <Link
      href={{
        pathname: "./detail/",
        params: { title: title, imageUri: imageUri },
      }}
    >
      <View style={styles.card}>
        <Image
          source={{ uri: imageUri }}
          style={{ width: 150, height: 150, borderRadius: 16 }}
        />
        <ThemedText>{title}</ThemedText>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "gray",
    padding: 12,
    borderRadius: 16,
  },
});

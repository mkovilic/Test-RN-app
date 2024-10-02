import { Pressable, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from './ThemedText';

type PrimaryButtonProps = {
    title: string;
    onPress: () => void;
    };

export function PrimaryButton({ title, onPress }: PrimaryButtonProps) {
  return (
    <Pressable style = {styles.button} onPress={onPress} >
      <ThemedText type='defaultSemiBold'>{title}</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "blue",
        padding: 16,
        marginHorizontal: 16,
        borderRadius: 8,
        alignItems: "center",
    },
});
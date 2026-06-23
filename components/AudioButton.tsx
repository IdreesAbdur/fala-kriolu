//components/AudioButton.tsx
//A small, independent piece - knows nothing about
//VocabCard, QuizOption, or any component it'll live inside

import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet } from "react-native";
import { speakKriolu } from "../services/audioService";

type AudioButtonProps = {
  text: string;
  size?: number;
};

export default function AudioButton({ text, size = 24 }: AudioButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => speakKriolu(text)}>
      <Ionicons name="volume-high" size={size} color="#1a5c52" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: { padding: 8},
});

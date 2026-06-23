// components/QuizOption.tsx
// Completely independent of VocabCard and AudioButton -
// it doesn't extend or know about either one.
// We'll COMPOSE this info quiz screens starting module 16

import { TouchableOpacity, Text, StyleSheet } from "react-native";

type QuizOptionProps = {
    label: string;
    onPress: () => void;
    state?: 'default' | 'correct' | 'wrong';
};

export default function QuizOption({ label, onPress, state = 'default'}: QuizOptionProps) {
    return (
        <TouchableOpacity style={[styles.option, styles[state]]}
        onPress={onPress}
        >
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    option: { padding: 12, borderRadius: 8, borderWidth: 1.5, borderColor: '#ddd', marginBottom: 8 },
    default: { backgroundColor: 'white' },
    correct: { backgroundColor: '#d4f4e8', borderColor: '#2d8b7a' },
    wrong: { backgroundColor: '#fde8e8', borderColor: '#c0392b' },
    label: { fontSize: 15 },  
});
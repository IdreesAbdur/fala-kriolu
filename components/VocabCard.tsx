//components/VocabCard.tsx
// COMPOSES AudioButton as a child - no inheritance
// just nesting one independent piece inside another

import { View, Text, StyleSheet } from 'react-native';
import AudioButton from './AudioButton';

type VocabCardProps = {
    kriolu: string;
    english: string;
    pronunciation: string;
};

export default function VocabCard({ kriolu, english, pronunciation }: VocabCardProps) {
    return (
        <View style={styles.card}>
            <View style={styles.row}>
                <Text style={styles.kriolu}>{kriolu}</Text>
                { /* AudioButton composed in - VocabCard doesn't
                know or care HOW audio works, just that AudioButton handles it */
                }
                <AudioButton text={kriolu} />
            </View>
            <Text style={styles.english}>{english}</Text>
            <Text style={styles.pronunciation}>{pronunciation}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: { backgroundColor: '#faf6f0', borderRadius: 10, padding: 16, marginBottom: 12 },
    row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'},
    kriolu: { fontSize: 18, fontWeight: 'bold', color: '#1a5c52'},
    english: { fontSize: 15, color: '#333', marginTop: 4},
    pronunciation: {fontSize: 15, color: '#888', fontStyle: 'italic', marginTop: 2 },
});


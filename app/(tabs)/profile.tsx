import { View, Text, StyleSheet, Switch } from 'react-native';
import { useProgressStore } from '../../store/useProgressStore';

export default function ProfileScreen() {
    // Each of these only re-renders THIS component
    // when that specific value changes - not on
    // every unrelated store update

    const StreakCount = useProgressStore((state) => state.streakCount);
    const completedChapterIds = useProgressStore((state) => state.completedChapterIds);
    const audioEnabled = useProgressStore((state) => state.audioEnabled);
    const toggleAudio = useProgressStore((state) => state.toggleAudio);


    return (
        <View style={styles.container}>
            <Text style={styles.stat}> Streak: {StreakCount} days</Text>
            <Text style={styles.stat}>
                Chapters completed: {completedChapterIds.length}
            </Text>
            <View style={styles.row}>
                <Text>Audio pronunciation</Text>
                <Switch value={audioEnabled} onValueChange={toggleAudio} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cntainer: { flex: 1, padding: 20 },
    stat: { fontSize: 18, marginBottom: 16, fontWeight: '600' },
    row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 },
});
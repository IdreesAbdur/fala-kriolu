//components/ChapterCard.tsx
//SRP: this components ONLY job is rendering a chapter card
//ISP: it only accepts the exact props it needs - nothing more

import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Chapter } from '../constants/chapters';

//ISP: this type contains ONLY what ChapterCard needs
type ChapterCardProps = {
    chapter: Chapter;
    onPress: () => void;
};


// ISP: this type contains ONLY what ChapterCard needs

export default function chapterCard({
    chapter, onPress }: ChapterCardProps)
{
    return  (
        <TouchableOpacity onPress= {chapter.isLocked ? undefined : onPress}>
            <View style={styles.card}>
                <Image source={{ uri: chapter.imageUrl }} 
                style={styles.image} />

                <View style={styles.overlay}>
                    <Text style={styles.title}>
                        {chapter.titleEnglish}</Text>
                    <Text style={styles.subtitle}>
                        {chapter.titleKriolu}</Text>
                </View>
                {chapter.isLocked && (
                    <View style= { styles.lockBadge}>
                        <Ionicons name="lock-closed" size={20} color="white" />
                    </View>               
                )}
            </View>
        </TouchableOpacity>

    );
    
}

const styles = StyleSheet.create({
    card: { borderRadius: 12, overflow: 'hidden', marginBottom: 16, height: 160},
    image: { width: '100%', height: '100%', position: 'absolute'},
    overlay: {position: 'absolute', bottom: 0, left: 0, padding: 16, backgroundColor: 'rgba(0,0,0,0.4', width: '100%'},
    title: {color: 'white', fontSize: 20, fontWeight: 'bold'},
    subtitle: {color: 'white', fontSize: 14, opacity: 0.85 },
    lockBadge: {position: 'absolute', top: '45%', left:'45%'},
});
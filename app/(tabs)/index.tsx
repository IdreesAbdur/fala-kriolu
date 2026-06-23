import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import ChapterCard from '../../components/ChapterCard';
import { getChapters } from '../../services/chaptersService';
import { Chapter } from '../../constants/chapters';

export default function LearnScreen() {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const router = useRouter();

  useEffect(() => {
    getChapters().then(setChapters);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {chapters.map((chapter) => (
        <ChapterCard
          key={chapter.id}
          chapter={chapter}
          onPress={() => router.push(`/chapter/${chapter.id}`)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});
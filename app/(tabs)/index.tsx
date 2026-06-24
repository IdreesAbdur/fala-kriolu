import { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import ChapterCard from "../../components/ChapterCard";
import { getChapters } from "../../services/chaptersService";
import { Chapter } from "../../constants/chapters";
import { useProgressStore } from "../../store/useProgressStore";
import { Button } from "react-native";

export default function LearnScreen() {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const router = useRouter();

  const markChapterComplete = useProgressStore(
    (state) => state.markChapterComplete
  );
  const incrementStreak = useProgressStore((state) => state.incrementStreak);

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

      {/* <Button
        title="Test: Complete Greetings + Streak"
        onPress={() => {
          markChapterComplete("greetings");
          incrementStreak();
        }}
      /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});

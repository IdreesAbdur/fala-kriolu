import { ScrollView } from "react-native";
import VocabCard from "../../components/VocabCard";

import TopicTree from "../../components/TopicTree";
import { CULTURE_TOPICS } from "../../constants/cultureTopics";

export default function PracticeScreen() {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <VocabCard
        kriolu="Mantenha"
        english="Hello / Greetings"
        pronunciation="mahn-TEN-ya"
      />
      <VocabCard
        kriolu="Obrigadu"
        english="Thank You"
        pronunciation="oh-bri-GAH-du"
      />

      {CULTURE_TOPICS.map((topic) => (
        <TopicTree key={topic.id} topic={topic} />
      ))}
    </ScrollView>
  );
}

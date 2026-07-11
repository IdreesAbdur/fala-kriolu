// components/TopicTree.tsx
// A RECURSIVE component - it renders itself inside itself
// for however many levels deep the data actually goes

import { View, Text, StyleSheet } from 'react-native';
import { Topic } from '../constants/cultureTopics';

type TopicTreeProps = {
    topic: Topic;
    depth?: number; // tracks how deep we are, for indentation
};

export default function TopicTree({ topic, depth = 0 }: TopicTreeProps) {
    // BASE CASE: no subtopics - render just this item, stop recursing
    if (topic.subtopics.length === 0) {
        return (
            <Text style={[styles.item, { marginLeft: depth * 16 }]}>
                {topic.title}
            </Text>
        );
    }

    //RECURSIVE CASE: render this item, then render
    // EACH subtopic by calling TopicTree again - 
    // same component, one level deeper
    return (
        <View>
            <Text style={[styles.title, { marginLeft: depth * 16}]}>
                {topic.title}
            </Text>
            {topic.subtopics.map((sub) => (
                <TopicTree key={sub.id} topic={sub}
                depth={depth + 1} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    title:
     {fontSize: 16, fontWeight: 'bold', color: '#1a5c52', marginTop: 8 },
     item: { fontSize: 14, color: '#444', marginTop: 4 },
});
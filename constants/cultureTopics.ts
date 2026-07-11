// constants/cultureTopics.ts
// Notice: Topic's "subtopics" field is an array OF Topic itself
// This self-reference is what makes it a tree shape

export type Topic = {
    id: string;
    title: string;
    subtopics: Topic[]; // can be empty , or contain more Topics
};

// Placeholder structure - Module 25 fills in
// the real content from your study guide outline

export const CULTURE_TOPICS: Topic[] = [
    {
        id: 'origins',
        title: 'Origins of Kriolu',
        subtopics: [
            { id: 'portuguese-contact', title: 'Portuguese Colonial Contact', subtopics: []},
            { id: 'african-substrate', title: 'African Substrate Languages', subtopics: [
                {id: 'mandinka', title: 'Mandinka Influence', subtopics: [] },
                { id: 'wolof', title: 'Wolof Influence', subtopics: [] },
            ]},
        ],
    },
    {
        id: 'dialects',
        title: 'Island Dialects',
        subtopics: [
            { id: 'sotavento', title: 'Sotavento (Badiu)', subtopics: [] },
            { id: 'barlavento', title: 'Barlavento (Sanpadjudu)', subtopics: [] },
        ]
    }
]
// constants/chapter.ts
//SRP: This files ONLY job is defining chapter data shape + content 

export type Chapter = {
    id: string;
    titleEnglish: string;
    titleKriolu: string;
    imageUrl: string;
    isLocked: boolean;
};


//Placeholder data for now = Module 8 replaces this with real Supabase queries. Notice that NOTHING else in our app needs to change when we make that swap Because of DIP

export const CHAPTERS: Chapter[] = [
    {
        id: 'greetings',
        titleEnglish: 'Greetings & Introductions',
        titleKriolu: 'Mantenha y Introduson',
        imageUrl: 'https://placehold.co/600x300',
            isLocked: false,
    },
    { 
        id: 'colors',
        titleEnglish: 'Colors', 
        titleKriolu: 'Kor',
        imageUrl: 'https://placehold.co/600x300',
            isLocked: true,
    },
];
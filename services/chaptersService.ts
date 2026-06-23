// services/chaptersService.ts
//SRP: this files ONLY job is fetching chapter data
//DIP: LearnScreen will depend on THIS, not on the data source directly

import { CHAPTERS, Chapter } from "../constants/chapters";

export async function getChapters():
Promise<Chapter[]> {

    //Today 6/19: returns placeholder data
    //Module 8: this becomes a real Supabase query.
    //LearnScreen will NEVER need to know the difference.

    return CHAPTERS;
}
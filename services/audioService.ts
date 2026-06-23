//services/audioService.ts
// SRP from module 3: this file's ONLY job is speech logic

import * as Speech from 'expo-speech';

export function speakKriolu(text: string) {
    Speech.stop();
    Speech.speak(text, {
        language: 'pt-PT',
        pitch: 1.0,
        rate: 0.85,
    });
}
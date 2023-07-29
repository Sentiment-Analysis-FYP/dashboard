import {AnalyzedDataItem} from "@/utils/scraper";

export enum EmotionType {
    Anger = 'anger',
    Disgust = 'disgust',
    Fear = 'fear',
    Joy = 'joy',
    Neutral = 'neutral',
    Sadness = 'sadness',
    Surprise = 'surprise'
}

export function getEmotionPolarity(emotion: string): "positive" | "negative" {
    switch (emotion) {
        case EmotionType.Joy:
        case EmotionType.Neutral:
        case EmotionType.Surprise:
            return 'positive';
        case EmotionType.Anger:
        case EmotionType.Disgust:
        case EmotionType.Fear:
        case EmotionType.Sadness:
            return 'negative';
        default:
            // If the provided emotion is not recognized, you can handle it according to your needs.
            // In this case, we return 'negative' as a default fallback.
            return 'negative';
    }
}

export function getHighestOccurringEmotion(dataItems: AnalyzedDataItem[]): string {
    // Create an object to count the occurrences of each emotion
    const emotionCounts: { [emotion: string]: number } = {};
    if (!dataItems.length) return 'negative'
    // Count the occurrences of each emotion
    for (const dataItem of dataItems) {
        const emotion = dataItem.emotion_label;
        emotionCounts[emotion] = (emotionCounts[emotion] || 0) + 1;
    }

    // Find the emotion with the highest occurrence
    let highestOccurrence = 0;
    let highestEmotion: string = EmotionType.Neutral

    for (const emotion in emotionCounts) {
        if (emotionCounts[emotion] > highestOccurrence) {
            highestOccurrence = emotionCounts[emotion];
            highestEmotion = emotion;
        }
    }

    return highestEmotion;
}
import {AnalyzedDataItem} from "@/utils/scraper";

export enum SentimentType {
    Negative = 0,
    Positive = 1,
}

export function getHighestOccurringSentiment(dataItems: AnalyzedDataItem[]): string {
    // Count the occurrences of negative and positive sentiments
    let negativeCount = 0;
    let positiveCount = 0;
    if (!dataItems.length) return 'negative'

    for (const dataItem of dataItems) {
        if (dataItem.score === SentimentType.Negative) {
            negativeCount++
        } else if (dataItem.score === SentimentType.Positive) {
            positiveCount++
        }
    }

    // Determine the highest occurring sentiment
    if (positiveCount > negativeCount) {
        return 'positive';
    } else if (negativeCount > positiveCount) {
        return 'negative';
    } else {
        // If both sentiments occur equally, return null or choose a default sentiment
        return 'positive';
    }
}

export function getAdvisoryRemark(sentiment: string, emotionPolarity: string): string {
    // Define the advisory remarks based on sentiment and emotion polarity
    if (sentiment === 'positive' && emotionPolarity === 'positive') {
        return 'Great! The situation seems positive, and the emotions are positive as well. Keep up the good work!';
    } else if (sentiment === 'positive' && emotionPolarity === 'negative') {
        return 'It looks positive overall, but emotions are indicating some negative aspects. Stay vigilant and address any concerns.';
    } else if (sentiment === 'negative' && emotionPolarity === 'positive') {
        return 'Though the situation is negative, the emotions seem positive. Find strength in positivity and work towards improvement.';
    } else if (sentiment === 'negative' && emotionPolarity === 'negative') {
        return 'The situation is negative, and emotions reflect the same. Take necessary actions to overcome challenges and stay positive.';
    } else {
        // If the provided sentiment or emotion polarity is not recognized, return a generic advisory remark.
        return 'Based on the available data, it seems advisable to assess the situation further.';
    }
}
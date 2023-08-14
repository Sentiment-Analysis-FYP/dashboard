import {AnalyzedData, AnalyzedDataItem} from "@/utils/scraper";

const randomFloatInRange = (min: number, max: number) =>
    Math.random() * (max - min) + min;

const randomZeroOrOne = () => Math.round(Math.random());

const randomDate = () =>
    new Date(new Date().getTime() - Math.random() * 10000000000).toISOString().split('T')[0];

const randomText = (length: number) => {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

const randomId = () => {
    const idLength = 19;
    let result = "";
    for (let i = 0; i < idLength; i++) {
        result += Math.floor(Math.random() * 10);
    }
    return result;
};

function generateRandomData(): AnalyzedDataItem {
    return {
        id: randomId(),
        created_at: randomDate(),
        text: randomText(50), // Adjust the length of the random text as needed.
        username: randomText(7) + Math.floor(Math.random() * 100), // Adjust the length of the username as needed.
        v_sentiment_neg: randomFloatInRange(0, 1),
        v_sentiment_pos: randomFloatInRange(0, 1),
        v_sentiment_polarity: randomFloatInRange(-1, 1),
        t_sentiment_polarity: randomFloatInRange(-1, 1),
        t_sentiment_subjectivity: randomFloatInRange(0, 1),
        // score: randomZeroOrOne(),
        score: Number(randomFloatInRange(-1, 1).toFixed(2)),
        emotion_label: "",
        emotion_score: 0,
        lr_sentiment: 0
    };
}

function generate500Items(): AnalyzedDataItem[] {
    const items: AnalyzedDataItem[] = [];
    for (let i = 0; i < 500; i++) {
        const newItem = generateRandomData();
        items.push(newItem);
    }
    return items;
}

const dataItems: AnalyzedDataItem[] = generate500Items();

export const dummyData: AnalyzedData = {
    scrapeId: randomId(),
    data: dataItems
}
import {AnalyzedData, AnalyzedDataItem, getSentimentScore} from "@/utils/scraper";
import {PorterStemmer} from "natural";
import lemmatizer from "lemmatizer";

export interface WordCloudItem {
    value: string,
    count: number
}

export const getSentimentList = (data: AnalyzedData, sentiment: string): AnalyzedDataItem[] => {
    let sentimentList = data.data

    console.log(`data has ${data.data.length} items`)

    if (sentiment == 'negative') {
        sentimentList = sentimentList
            .filter((dataItem) => Number(getSentimentScore(dataItem)) < 0)
    } else if (sentiment == 'positive') {
        sentimentList = sentimentList
            .filter((dataItem) => Number(getSentimentScore(dataItem)) > 0)
    }

    console.log(`${sentiment} has ${sentimentList.length} items`)

    return sentimentList
}

// export const getWordCloudItemList = (dataItems: AnalyzedDataItem[]): WordCloudItem => {
//     let wordCloudItemList = dataItems.map((dataItem) => [])
// }

// export const getWordFrequency = (texts: string[])

const stopwords = ['a', 'about', 'above', 'after', 'again', 'ain', 'all', 'am', 'an',
    'and', 'any', 'are', 'as', 'at', 'be', 'because', 'been', 'before',
    'being', 'below', 'between', 'both', 'by', 'can', 'd', 'did', 'do',
    'does', 'doing', 'down', 'during', 'each', 'few', 'for', 'from',
    'further', 'had', 'has', 'have', 'having', 'he', 'her', 'here',
    'hers', 'herself', 'him', 'himself', 'his', 'how', 'i', 'if', 'in',
    'into', 'is', 'it', 'its', 'itself', 'just', 'll', 'm', 'ma',
    'me', 'more', 'most', 'my', 'myself', 'now', 'o', 'of', 'on', 'once',
    'only', 'or', 'other', 'our', 'ours', 'ourselves', 'out', 'own', 're', 's', 'same', 'she', "shes", 'should', "shouldve", 'so', 'some', 'such',
    't', 'than', 'that', "thatll", 'the', 'their', 'theirs', 'them',
    'themselves', 'then', 'there', 'these', 'they', 'this', 'those',
    'through', 'to', 'too', 'under', 'until', 'up', 've', 'very', 'was',
    'we', 'were', 'what', 'when', 'where', 'which', 'while', 'who', 'whom',
    'why', 'will', 'with', 'won', 'y', 'you', "youd", "youll", "youre",
    "youve", 'your', 'yours', 'yourself', 'yourselves']

function cleaning_stopwords(text: string) {
    const STOPWORDS: Set<string> = new Set(stopwords);
    return text
        .split(' ')
        .filter(word => !STOPWORDS.has(word))
        .join(' ');
}

function cleaningPunctuations(text: string): string {
    const englishPunctuations = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

    const punctuationRegex = new RegExp(`[${englishPunctuations}]`, 'g');
    return text.replace(punctuationRegex, '');
}

function cleaningRepeatingChar(text: string): string {
    return text.replace(/(.)\1+/g, '$1');
}

function cleaningURLs(data: string): string {
    return data.replace(/((www\.\S+)|(https?:\/\/\S+))/g, ' ');
}

function cleaningNumbers(data: string): string {
    return data.replace(/[0-9]+/g, '');
}

// function tokenizeText(inputText: string): string[] {
//     const tokenizer = new RegexpTokenizer({pattern: /\w+/});
//     return tokenizer.tokenize(inputText)!;
// }
//
//
// function stemmingOnText(data: string[]): string[] {
//     return data.map(word => PorterStemmer.stem(word));
// }

function tokenizeThenStem(inputText: string) {
    return PorterStemmer.tokenizeAndStem(inputText)
}


function lemmatizerOnText(data: string[]): string[] {
    return data.map(word => lemmatizer(word));
}

function getStringFrequency(arrays: string[][]): Map<string, number> {
    const frequencyMap = new Map<string, number>();

    arrays.forEach(array => {
        array.forEach(item => {
            if (frequencyMap.has(item)) {
                frequencyMap.set(item, frequencyMap.get(item)! + 1);
            } else {
                frequencyMap.set(item, 1);
            }
        });
    });

    return frequencyMap;
}

function mapToWordCloudItemArray(map: Map<string, number>): WordCloudItem[] {
    // return Array.from(map, ([word, frequency]) => ([word, frequency]));
    return Array.from(map, ([word, frequency]) =>
        ({value: word, count: frequency}));
}

export const generateWordCloudItemList = (data: AnalyzedDataItem[]): WordCloudItem[] => {
    let tokenList: string[][] = []

    // data.map((dataItem) => wordCloudItemList.push(cleaning_stopwords(dataItem.text)))
    data.map((dataItem) =>
        tokenList.push(
            lemmatizerOnText(
                tokenizeThenStem(
                    cleaningNumbers(
                        cleaningURLs(
                            cleaningRepeatingChar(
                                cleaningPunctuations(cleaning_stopwords(dataItem.text)))))))))

    const frequencyMap = getStringFrequency(tokenList)
    return mapToWordCloudItemArray(frequencyMap)
}
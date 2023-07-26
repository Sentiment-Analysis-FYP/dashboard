import {AnalyzedData, AnalyzedDataItem} from "@/utils/scraper";
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
            .filter((dataItem) => Number(dataItem.score) < 0)
    } else if (sentiment == 'positive') {
        sentimentList = sentimentList
            .filter((dataItem) => Number(dataItem.score) > 0)
    }

    console.log(`${sentiment} has ${sentimentList.length} items`)

    return sentimentList
}

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

export interface GroupedDataItem {
    count: number,
    date: string,
    positiveCount: number,
    negativeCount: number
}

export const getDataItemsCountGroupedBy = (data: AnalyzedDataItem[], groupBy: string): GroupedDataItem[] => {
    const groupedData: { [key: string]: GroupedDataItem } = {};

    data.forEach((item) => {
        let dateGroup;
        switch (groupBy) {
            case 'day':
                dateGroup = item.created_at.substring(0, 10); // Extracting the date up to the day (YYYY-MM-DD)
                break;
            case 'month':
                dateGroup = item.created_at.substring(0, 7); // Extracting the date up to the month (YYYY-MM)
                break;
            case 'year':
                dateGroup = item.created_at.substring(0, 4); // Extracting the date up to the year (YYYY)
                break;
            default:
                throw new Error(`Invalid groupBy option: ${groupBy}`);
        }

        if (groupedData[dateGroup]) {
            // Group already exists, update counts
            groupedData[dateGroup].count++
            Number(item.score) < 0 ? groupedData[dateGroup].negativeCount-- : groupedData[dateGroup].positiveCount++
        } else {
            // Create a new group
            groupedData[dateGroup] = {
                count: 1,
                date: dateGroup,
                negativeCount: Number(item.score) < 0 ? -1 : 0,
                positiveCount: Number(item.score) < 0 ? 0 : 1
            };
        }
    })

    return Object.values(groupedData)
        .sort((a, b) => a.date.localeCompare(b.date));
}

// export const sortByCreatedAt = (data: AnalyzedDataItem[]): GroupedDataItem[] => {
//     // Custom compare function to sort by 'created_at' date
//     const compareByCreatedAt = (a: AnalyzedDataItem, b: AnalyzedDataItem): number => {
//         const dateA = new Date(a.created_at);
//         const dateB = new Date(b.created_at);
//         return dateA.getTime() - dateB.getTime();
//     };
//
//     const groupeData = getDataItemsCountGroupedBy(data, )
//     // Sorting the array based on 'created_at' date
//     let tempArray = [...data]
//     return tempArray.sort(compareByCreatedAt);
// };

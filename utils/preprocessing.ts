import {AnalyzedData, AnalyzedDataItem} from "@/utils/scraper";
import {
    cleaning_stopwords,
    cleaningNumbers,
    cleaningPunctuations,
    cleaningRepeatingChar,
    cleaningURLs
} from "@/utils/visualizations";

export const removeStopwordsFromAnalyzedData = (analyzedData: AnalyzedData): AnalyzedData => {
    const cleanedData: AnalyzedDataItem[] = analyzedData.data.map((item) => {
        const cleanedText = cleaning_stopwords(item.text);
        return {
            ...item,
            text: cleanedText,
        };
    });

    return {
        ...analyzedData,
        data: cleanedData,
    };
};

export const removePunctuationFromAnalyzedData = (analyzedData: AnalyzedData): AnalyzedData => {
    const cleanedData: AnalyzedDataItem[] = analyzedData.data.map((item) => {
        const cleanedText = cleaningPunctuations(item.text);
        return {
            ...item,
            text: cleanedText,
        };
    });

    return {
        ...analyzedData,
        data: cleanedData,
    };
};

export const removeRepeatingCharactersFromAnalyzedData = (analyzedData: AnalyzedData): AnalyzedData => {
    const cleanedData: AnalyzedDataItem[] = analyzedData.data.map((item) => {
        const cleanedText = cleaningRepeatingChar(item.text);
        return {
            ...item,
            text: cleanedText,
        };
    });

    return {
        ...analyzedData,
        data: cleanedData,
    };
};

export const removeURLsFromAnalyzedData = (analyzedData: AnalyzedData): AnalyzedData => {
    const cleanedData: AnalyzedDataItem[] = analyzedData.data.map((item) => {
        const cleanedText = cleaningURLs(item.text);
        return {
            ...item,
            text: cleanedText,
        };
    });

    return {
        ...analyzedData,
        data: cleanedData,
    };
};


export const removeNumbersFromAnalyzedData = (analyzedData: AnalyzedData): AnalyzedData => {
    const cleanedData: AnalyzedDataItem[] = analyzedData.data.map((item) => {
        const cleanedText = cleaningNumbers(item.text);
        return {
            ...item,
            text: cleanedText,
        };
    });

    return {
        ...analyzedData,
        data: cleanedData,
    };
};
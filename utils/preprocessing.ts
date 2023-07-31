import {AnalyzedData, AnalyzedDataItem} from "@/utils/scraper"
import {
    cleaning_stopwords,
    cleaningNumbers,
    cleaningPunctuations,
    cleaningRepeatingChar,
    cleaningURLs, cleanEmojis, lemmatizerOnText
} from "@/utils/visualizations"
import {saveAs} from "file-saver"
import {PorterStemmer, WordTokenizer} from "natural";

export const removeStopwordsFromAnalyzedData = (analyzedData: AnalyzedData): AnalyzedData => {
    const cleanedData: AnalyzedDataItem[] = analyzedData.data.map((item) => {
        const cleanedText = cleaning_stopwords(item.text)
        return {
            ...item,
            text: cleanedText,
        }
    })

    return {
        ...analyzedData,
        data: cleanedData,
    }
}

export const removePunctuationFromAnalyzedData = (analyzedData: AnalyzedData): AnalyzedData => {
    const cleanedData: AnalyzedDataItem[] = analyzedData.data.map((item) => {
        const cleanedText = cleaningPunctuations(item.text)
        return {
            ...item,
            text: cleanedText,
        }
    })

    return {
        ...analyzedData,
        data: cleanedData,
    }
}

// export const removeDuplicateWordsFromAnalyzedData = (analyzedData: AnalyzedData): AnalyzedData => {
//     const cleanedData: AnalyzedDataItem[] = analyzedData.data.map((item) => {
//         const cleanedText = cleaningRepeatingChar(item.text)
//         return {
//             ...item,
//             text: cleanedText,
//         }
//     })
//
//     return {
//         ...analyzedData,
//         data: cleanedData,
//     }
// }

export const removeURLsFromAnalyzedData = (analyzedData: AnalyzedData): AnalyzedData => {
    const cleanedData: AnalyzedDataItem[] = analyzedData.data.map((item) => {
        const cleanedText = cleaningURLs(item.text)
        return {
            ...item,
            text: cleanedText,
        }
    })

    return {
        ...analyzedData,
        data: cleanedData,
    }
}


export const removeNumbersFromAnalyzedData = (analyzedData: AnalyzedData): AnalyzedData => {
    const cleanedData: AnalyzedDataItem[] = analyzedData.data.map((item) => {
        const cleanedText = cleaningNumbers(item.text)
        return {
            ...item,
            text: cleanedText,
        }
    })

    return {
        ...analyzedData,
        data: cleanedData,
    }
}

export const removeEmojisFromAnalyzedData = (analyzedData: AnalyzedData): AnalyzedData => {
    const cleanedData: AnalyzedDataItem[] = analyzedData.data.map((item) => {
        const cleanedText = cleanEmojis(item.text)
        return {
            ...item,
            text: cleanedText,
        }
    })

    return {
        ...analyzedData,
        data: cleanedData,
    }
}


function escapeCSVText(text: string): string {
    // If the text contains double quotes, replace them with two double quotes (escaping)
    return text.replace(/"/g, '""');
}

export function exportToCSV(analyzedData: AnalyzedData): void {
    let csvContent = 'id,created_at,text,username,v_sentiment_neg,v_sentiment_pos,v_sentiment_polarity,t_sentiment_polarity,t_sentiment_subjectivity,lr_sentiment,score\n';

    analyzedData.data.forEach((item: AnalyzedDataItem) => {
        // Escape each field before including it in the CSV row
        const escapedText = escapeCSVText(item.text);
        const row = `${item.id},"${item.created_at}","${item.username}","${escapedText}",${item.v_sentiment_neg},${item.v_sentiment_pos},${item.v_sentiment_polarity},${item.t_sentiment_polarity},${item.t_sentiment_subjectivity},${item.lr_sentiment},"${item.score}"\n`;
        csvContent += row;
    });

    const blob = new Blob([csvContent], {type: 'text/csv;charset=utf-8'});

    // Prompt the user to save the file
    const defaultFileName = 'analyzed_data ' + new Date().toISOString().split('.')[0] + '.csv'
    saveAs(blob, defaultFileName);
}

export function getTokenizedTextFromAnalyzedData(analyzedData: AnalyzedData): AnalyzedData {
    const tokenize = (text: string): string[] => {
        const tokenizer = new WordTokenizer()
        // Basic tokenization using space as the separator
        return tokenizer.tokenize(text)!
    };

    const tokenizedData: AnalyzedDataItem[] = analyzedData.data.map((item) => {
        const tokens = tokenize(item.text);
        return {
            ...item,
            text: `${tokens}`,
        };
    });

    return {
        ...analyzedData,
        data: tokenizedData,
    };
}

export function getLemmatizedTextFromAnalyzedData(analyzedData: AnalyzedData): AnalyzedData {
    const lemmatizedData: AnalyzedDataItem[] = analyzedData.data.map((item) => {
        const lemmatizedText = lemmatizerOnText(item.text.split(' ')).join(' ');
        return {
            ...item,
            text: lemmatizedText,
        };
    });

    return {
        ...analyzedData,
        data: lemmatizedData,
    };
}

export function getStemmedTextFromAnalyzedData(analyzedData: AnalyzedData): AnalyzedData {
    const stemmer = PorterStemmer;

    const stemmedData: AnalyzedDataItem[] = analyzedData.data.map((item) => {
        const stemmedText = item.text
            .split(' ')
            .map((word) => stemmer.stem(word))
            .join(' ');
        return {
            ...item,
            text: stemmedText,
        };
    });

    return {
        ...analyzedData,
        data: stemmedData,
    };
}

const removeDuplicateWords = (text: string): string => {
    const words = text.split(' ');
    const uniqueWords = Array.from(new Set(words));
    return uniqueWords.join(' ');
};

export const removeDuplicateWordsFromAnalyzedData = (data: AnalyzedData): AnalyzedData => {
    const newData: AnalyzedDataItem[] = data.data.map((item) => ({
        ...item,
        text: removeDuplicateWords(item.text),
    }));

    return {...data, data: newData};
};

const removeUsernames = (text: string): string => {
    return text.replace(/@\w+/g, ''); // Removes all Twitter handles starting with '@'
};

export const removeUsernamesFromAnalyzedData = (data: AnalyzedData): AnalyzedData => {
    const newData: AnalyzedDataItem[] = data.data.map((item) => ({
        ...item,
        text: removeUsernames(item.text),
    }));

    return {...data, data: newData};
};
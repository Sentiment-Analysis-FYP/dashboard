import {AnalyzedData, AnalyzedDataItem} from "@/utils/scraper"
import {
    cleaning_stopwords,
    cleaningNumbers,
    cleaningPunctuations,
    cleaningRepeatingChar,
    cleaningURLs, cleanEmojis
} from "@/utils/visualizations"
import {saveAs} from "file-saver"

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

export const removeRepeatingCharactersFromAnalyzedData = (analyzedData: AnalyzedData): AnalyzedData => {
    const cleanedData: AnalyzedDataItem[] = analyzedData.data.map((item) => {
        const cleanedText = cleaningRepeatingChar(item.text)
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


export function exportToCSV(analyzedData: AnalyzedData): void {
    let csvContent = 'id,created_at,text,v_sentiment_neg,v_sentiment_pos,v_sentiment_polarity,t_sentiment_polarity,t_sentiment_subjectivity,lr_sentiment,score\n'

    analyzedData.data.forEach((item: AnalyzedDataItem) => {
        const row = `${item.id},"${item.created_at}","${item.text}",${item.v_sentiment_neg},${item.v_sentiment_pos},${item.v_sentiment_polarity},${item.t_sentiment_polarity},${item.t_sentiment_subjectivity},${item.lr_sentiment},"${item.score}"\n`
        csvContent += row
    })

    const blob = new Blob([csvContent], {type: 'text/csvcharset=utf-8'})

    // Prompt the user to save the file
    const defaultFileName = 'analyzed_data.csv'
    saveAs(blob, defaultFileName)
}
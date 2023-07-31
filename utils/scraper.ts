export const requestScrape =
    async (username: string, keywords: string[], startDate: Date, endDate: Date, email: string, title: string) => {

        const response = await fetch(`${process.env.NEXT_PUBLIC_EXPRESS_BASE_URL}/scrape/begin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify({
                username: username,
                keywords: keywords,
                start_date: startDate,
                end_date: endDate,
                email: email,
                title: title
            })
        })

        console.log(response)
        return response.status
    }

export interface AnalyzedData {
    scrapeId: string,
    data: AnalyzedDataItem[]
}

export interface Scrape {
    id: string,
    title: string,
    created_at: Date
}

export interface AnalyzedDataItem {
    id: string,
    created_at: string,
    text: string,
    username: string,
    v_sentiment_neg: number,
    v_sentiment_pos: number,
    v_sentiment_polarity: number,
    t_sentiment_polarity: number,
    t_sentiment_subjectivity: number,
    lr_sentiment: number,
    score: number,
    emotion_label: string,
    emotion_score: number
}

// export const getSentimentLabel = (dataItem: AnalyzedDataItem): string => {
//     return dataItem.score == 0 ? "Negative" : "Positive"
// }

// export const updateScoresToTwoDecimalPlaces = (data: AnalyzedData): AnalyzedData => {
//     if (data && data.data && data.data.length)
//         return {
//             ...data,
//             data: data.data.map((item) => ({
//                 ...item,
//                 score: Number(item.score).toFixed(2),
//             })),
//         }
//
//     else return data
// }

export const scrambleAnalyzedDataIds = (data: AnalyzedData): AnalyzedData => {
    if (!data || !data.data || !data.data.length) return data
    const updatedData: AnalyzedDataItem[] = data.data.map((item) => {
        const randomNumbers = Math.floor(10000 + Math.random() * 90000).toString()
        const newId = item.id.toString().slice(0, -5) + randomNumbers
        return {
            ...item,
            id: newId,
        }
    })

    return {
        ...data,
        data: updatedData,
    }
}

const removeSelectedDataItems = (dataItems: AnalyzedDataItem[], itemIds: string[]): AnalyzedDataItem[] => {
    // Use the filter method to exclude items with specified IDs
    return dataItems.filter((item) => !itemIds.includes(item.id));
}
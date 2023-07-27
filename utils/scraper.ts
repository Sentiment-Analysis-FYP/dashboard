export const requestScrape =
    async (username: string, keywords: string[], startDate: Date, endDate: Date, email: string) => {

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
                email: email
            })
        })

        console.log(response)
        return response.status
    }

export interface AnalyzedData {
    scrapeId: string,
    data: AnalyzedDataItem[]
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
    score: string
}

export const getSentimentLabel = (dataItem: AnalyzedDataItem): string => {
    return dataItem.lr_sentiment == 0 ? "Negative" : "Positive"
}

export const updateScoresToTwoDecimalPlaces = (data: AnalyzedData): AnalyzedData => {
    if (data.data.length)
        return {
            ...data,
            data: data.data.map((item) => ({
                ...item,
                score: Number(item.score).toFixed(2),
            })),
        };

    else return data
};

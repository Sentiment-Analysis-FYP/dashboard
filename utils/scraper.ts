export const requestScrape =
    async (username: string, keywords: string[], startDate: Date, endDate: Date) => {
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
                startDate: startDate,
                endDate: endDate
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
    created_at: Date,
    text: string,
    username: string,
    v_sentiment_neg: number,
    v_sentiment_pos: number,
    v_sentiment_polarity: number,
    t_sentiment_polarity: number,
    t_sentiment_subjectivity: number,
    lr_sentiment: number
}

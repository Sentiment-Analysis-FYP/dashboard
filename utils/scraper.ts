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

interface ScrapeData {
    scrapeId: string,
    data: ScrapeDataItem[]
}

interface ScrapeDataItem {
    id: string,
    created_at: Date,
    text: string,
    username: string,
}

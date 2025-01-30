import { supabase } from "./supabase";


interface NewsItem {
    content: string
    image_url: string
    publish_date: Date
    author: string
    feed: number
}

export async function createGlobalFeed(): Promise<NewsItem[]> {
    try {
        const response = await fetch('/api/feed');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const serpData = await response.json();

        const supa: NewsItem[] = [];

        const { data: feedData, error: feedError } = await supabase
            .from('NewsFeed')
            .insert([{}])
            .select()
            
        serpData["news_results"].forEach(article => {
            const dateObj = new Date(article.date);
            const formattedDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit' }).format(dateObj);
            const author = article.source?.authors?.[0] ? article.source.authors[0] : "";

            supa.push({
                content: article.title,
                image_url: article.thumbnail,
                publish_date: dateObj,
                author: author,
                feed: feedData[0].id
            });

        });

        const { data: postData, error: postError } = await supabase
            .from('NewsPost')
            .insert(supa)
            .select()

        return postData;


    } catch (error) {
        console.error('Failed to fetch global feed:', error);
        return [];
    }


}
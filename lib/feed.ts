import { supabase } from "./supabase";

export interface NewsItem {
    content: string;
    image_url: string;
    publish_date: Date;
    author: string;
    feed: number;
    link: string;
    publication: string;
    id: number;
}

export async function createGlobalFeed(): Promise<NewsItem[]> {
    try {
        const response = await fetch('/api/feed');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const serpData = await response.json();

        const supa: any[] = [];

        const { data: feedData, error: feedError } = await supabase
            .from('NewsFeed')
            .insert([{}])
            .select();

        if (feedError || !feedData || feedData.length === 0) {
            throw new Error('Failed to insert into NewsFeed or feedData is null');
        }

        console.log(serpData["news_results"]);

        serpData["news_results"].forEach((article: any) => {
            if (article.highlight) { // Check if article has a highlight property
                const dateObj = new Date(article.highlight.date);
                const author = article.highlight.source?.authors?.[0] ? article.highlight.source.authors[0] : "";

                supa.push({
                    content: article.highlight.title,
                    image_url: article.highlight.thumbnail,
                    publish_date: dateObj,
                    author: author,
                    feed: feedData[0].id,
                    link: article.highlight.link,
                    publication: article.highlight.source.name
                });
            }
        });

        const { data: postData, error: postError } = await supabase
            .from('NewsPost')
            .insert(supa)
            .select();

        if (postError) {
            throw new Error('Failed to insert into NewsPost');
        }

        return postData as NewsItem[];

    } catch (error) {
        console.error('Failed to fetch global feed:', error);
        return [];
    }
}
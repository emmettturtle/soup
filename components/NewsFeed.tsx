import NewsCard from "./NewsCard"
import type { NewsItem } from "@/lib/sample-data"

interface NewsFeedProps {
  feedType: "local" | "global"
  localNews: NewsItem[]
  globalNews: NewsItem[]
}

export default function NewsFeed({ feedType, localNews, globalNews }: NewsFeedProps) {
  const newsItems = feedType === "local" ? localNews : globalNews

  return (
    <div className="divide-y divide-border">
      {newsItems.map((item) => (
        <NewsCard key={item.id} {...item} />
      ))}
    </div>
  )
}


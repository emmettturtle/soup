"use client"


import { useState, useEffect } from "react"
import NewsCard from "./NewsCard"
import type { NewsItem } from "@/lib/feed"
// import { localNews, globalNews } from "@/lib/sample-data"
import { createGlobalFeed, getFeed } from "@/lib/feed"
import NewsCardSkeleton from "./NewsCardSkeleton"

interface NewsFeedProps {
  feedType: "local" | "global"
}

export default function NewsFeed({ feedType }: NewsFeedProps) {
  const [feed, setFeed] = useState<NewsItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  // const newsItems = feedType === "local" ? localNews : feed

  useEffect(() => {
    // if (feedType === "global") {
    setIsLoading(true);
    console.log("HERE")
    getFeed().then(response => {
      console.log("Global feed created:", response)
      setFeed(response)
      setIsLoading(false)
    }).catch(error => {
      console.error("Error creating global feed:", error)
    })
  }, [])



  return (
    <div className="divide-y divide-border">
      {/* {feed.map((item) => (<NewsCard key={item.id} {...item} />))} */}
      {isLoading
        ? Array(3)
            .fill(0)
            .map((_, index) => <NewsCardSkeleton key={index} />)
        : feed.map((item) => <NewsCard key={item.id} {...item} />)}
    </div>
  )
}


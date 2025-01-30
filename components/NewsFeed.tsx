"use client"


import { useState, useEffect } from "react"
import NewsCard from "./NewsCard"
import type { NewsItem } from "@/lib/sample-data"
// import { localNews, globalNews } from "@/lib/sample-data"
import { createGlobalFeed } from "@/lib/feed"

interface NewsFeedProps {
  feedType: "local" | "global"
}

export default function NewsFeed({ feedType }: NewsFeedProps) {
  const [feed, setFeed] = useState<NewsItem[]>([])
  // const newsItems = feedType === "local" ? localNews : feed

  useEffect(() => {
    // if (feedType === "global") {
    console.log("HERE")
    createGlobalFeed().then(response => {
      console.log("Global feed created:", response)
      setFeed(response)
    }).catch(error => {
      console.error("Error creating global feed:", error)
    })
  }, [])



  return (
    <div className="divide-y divide-border">
      {feed.map((item) => (
        <NewsCard key={item.id} {...item} />
      ))}
    </div>
  )
}


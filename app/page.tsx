"use client"


import { useState, useEffect } from "react"
import Header from "@/components/Header"
import NewsFeed from "@/components/NewsFeed"
import { localNews, globalNews } from "@/lib/sample-data"
import { createGlobalFeed } from "@/lib/feed"

export default function Home() {
  const [activeTab, setActiveTab] = useState<"local" | "global">("local")



  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 max-w-2xl mx-auto w-full">
        <NewsFeed feedType={activeTab} localNews={localNews} globalNews={globalNews} />
      </div>
    </main>
  )
}


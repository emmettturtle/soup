'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import PostCard from '@/components/PostCard'
import CreatePostButton from '@/components/CreatePostButton'

const localPosts = [
  {
    id: '1',
    type: 'text' as const,
    author: 'John Doe',
    content: 'Just finished a great book! Any recommendations for my next read?',
    likes: 15,
    comments: 5,
    date: '2023-05-15T10:30:00Z'
  },
  {
    id: '2',
    type: 'image' as const,
    author: 'Jane Smith',
    content: 'Beautiful sunset at our local park today!',
    media: '/placeholder.svg?height=300&width=400',
    likes: 32,
    comments: 8,
    date: '2023-05-15T19:45:00Z'
  },
  {
    id: '3',
    type: 'text' as const,
    author: 'Local Business',
    content: 'Don\'t miss our weekend sale! 50% off on all items.',
    likes: 45,
    comments: 12,
    date: '2023-05-16T09:00:00Z'
  }
]

const globalPosts = [
  {
    id: '1',
    type: 'video' as const,
    author: 'Travel Enthusiast',
    content: 'Incredible views from my trip to the Grand Canyon!',
    media: '/placeholder.mp4',
    likes: 156,
    comments: 42,
    date: '2023-05-14T16:20:00Z'
  },
  {
    id: '2',
    type: 'text' as const,
    author: 'Tech Guru',
    content: 'Just heard about an exciting new AI breakthrough. What are your thoughts on the future of AI?',
    likes: 89,
    comments: 37,
    date: '2023-05-15T08:15:00Z'
  },
  {
    id: '3',
    type: 'image' as const,
    author: 'Nature Photographer',
    content: 'Captured this rare species during my expedition. Nature never ceases to amaze!',
    media: '/placeholder.svg?height=300&width=400',
    likes: 203,
    comments: 56,
    date: '2023-05-16T11:30:00Z'
  }
]

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<'local' | 'global'>('local')

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">coming soon . . . </h1>
        {/* <h1 className="text-2xl font-bold mb-6">{activeTab === 'local' ? 'Local' : 'Global'} Community</h1> */}
        {/* <div className="space-y-4">
          {(activeTab === 'local' ? localPosts : globalPosts).map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div> */}
      </div>
      {/* <CreatePostButton /> */}
    </main>
  )
}


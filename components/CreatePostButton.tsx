'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { PlusIcon } from 'lucide-react'

export default function CreatePostButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleCreatePost = () => {
    setIsOpen(true)
    // In a real application, this would open a modal or redirect to a create post page
    console.log('Create post clicked')
  }

  return (
    <div className="fixed bottom-4 right-4 z-20">
      <Button
        onClick={handleCreatePost}
        className="rounded-full shadow-lg"
      >
        <PlusIcon className="h-5 w-5 mr-2" />
        <span>Create Post</span>
      </Button>
    </div>
  )
}


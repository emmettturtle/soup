import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Heart } from 'lucide-react'

interface PostCardProps {
  type: 'text' | 'image' | 'video'
  author: string
  content: string
  media?: string
  likes: number
  comments: number
  date: string
}

export default function PostCard({ type, author, content, media, likes, comments, date }: PostCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-muted mr-3"></div>
          <div>
            <CardTitle className="text-lg">{author}</CardTitle>
            <time className="text-xs text-muted-foreground">{date}</time>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-foreground mb-4">{content}</p>
        {type === 'image' && media && (
          <div className="relative h-64 mb-4">
            <Image src={media} alt="Post image" fill style={{ objectFit: 'cover' }} />
          </div>
        )}
        {type === 'video' && media && (
          <video controls className="w-full mb-4">
            <source src={media} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </CardContent>
      <CardFooter>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <Heart className="h-5 w-5 mr-1" />
            <span>{likes}</span>
          </Button>
          <Button variant="ghost" size="sm">
            <MessageCircle className="h-5 w-5 mr-1" />
            <span>{comments}</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}


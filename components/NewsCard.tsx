import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Repeat2, BarChart2, Bookmark, Share, MoreHorizontal } from "lucide-react"
import type { NewsItem } from "@/lib/sample-data"

export default function NewsCard({ id, content, imageUrl, date, author, likes, comments }: NewsItem) {
  return (
    <article className="p-3 bg-background hover:bg-accent/50 transition-colors">
      <div className="flex items-start gap-2">
        {/* Author Section */}
        <Avatar className="w-8 h-8">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1 text-xs">
              <span className="font-semibold hover:underline">{author.publication}</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">{author.name}</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">{date}</span>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full h-6 w-6 -mr-2">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>

          {/* Content */}
          <Link href={`/news/${id}`}>
            <div className="mt-1">
              <p className="text-sm text-foreground">{content}</p>
              {imageUrl && (
                <div className="relative mt-2 aspect-[16/9] rounded-md overflow-hidden">
                  <Image src={imageUrl || "/placeholder.svg"} alt="Post image" fill className="object-cover" />
                </div>
              )}
            </div>
          </Link>

          {/* Engagement Metrics */}
          <div className="flex items-center justify-between mt-2 max-w-md">
            <Button variant="ghost" size="sm" className="hover:text-blue-600 p-0 h-8">
              <MessageCircle className="h-4 w-4 mr-1" />
              <span className="text-xs">{comments}</span>
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-green-600 p-0 h-8">
              <Repeat2 className="h-4 w-4 mr-1" />
              <span className="text-xs">0</span>
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-red-600 p-0 h-8">
              <Heart className="h-4 w-4 mr-1" />
              <span className="text-xs">{likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-blue-600 p-0 h-8">
              <BarChart2 className="h-4 w-4 mr-1" />
              <span className="text-xs">0</span>
            </Button>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" className="hover:text-blue-600 p-0 h-8 w-8">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-blue-600 p-0 h-8 w-8">
                <Share className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}


import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Repeat2, BarChart2, Bookmark, Share, MoreHorizontal } from "lucide-react"
import type { NewsItem } from "@/lib/sample-data"

export default function NewsCard({ content, image_url, publish_date, author, feed }: NewsItem) {
  return (
    <Card className="border-t border-border last:border-b">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold">New York Times</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">{author}</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">{publish_date}</span>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
        <Link href={`/news/${feed}`}>
          <p className="text-sm text-foreground mb-4">{content}</p>
          {image_url && (
            <div className="relative h-64 mb-4">
              <Image
                src={image_url || "/placeholder.svg"}
                alt="Post image"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
            </div>
          )}
        </Link>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex items-center justify-between w-full">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <MessageCircle className="h-5 w-5 mr-1" />
            {/* <span>{comments}</span> */}
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Repeat2 className="h-5 w-5 mr-1" />
            {/* <span>0</span> */}
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Heart className="h-5 w-5 mr-1" />
            {/* <span>{likes}</span> */}
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <BarChart2 className="h-5 w-5 mr-1" />
            {/* <span>0</span> */}
          </Button>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="text-muted-foreground p-0 h-8 w-8">
              <Bookmark className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground p-0 h-8 w-8">
              <Share className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}


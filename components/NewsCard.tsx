import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Repeat2, BarChart2, Bookmark, Share, MoreHorizontal } from "lucide-react"
import type { NewsItem } from "@/lib/sample-data"
import { formatDistanceToNow, differenceInHours, differenceInDays, differenceInMinutes } from "date-fns"

function formatTimeAgo(date: Date): string {
  const now = new Date()
  const minutes = differenceInMinutes(now, date)
  const hours = differenceInHours(now, date)
  const days = differenceInDays(now, date)

  if (days > 0) {
    return `${days}d`
  } else if (hours > 0) {
    return `${hours}h`
  } else {
    return `${minutes}m`
  }
}

export default function NewsCard({ content, image_url, publish_date, author, feed, link, publication }: NewsItem) {
  const timeAgo = formatTimeAgo(new Date(publish_date))

  return (
    <Card className="border-t border-border last:border-b">
      <CardContent className="py-2 px-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold">{publication}</span>
            {author && (
              <>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground">{author}</span>
              </>
            )}
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">{timeAgo}</span>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <p className="text-sm text-foreground mb-4">{content}</p>
          {image_url && (
            <div className="relative h-52 mb-0">
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
      <CardFooter className="py-2 px-4 pt-0">
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
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}


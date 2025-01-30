export interface NewsItem {
  content: string
  image_url: string
  publish_date: Date
  author: string
  feed: number
}
export const localNews: NewsItem[] = [
  {
    id: "1",
    content:
      "The city's central park reopens today after a 6-month renovation project. New features include updated playgrounds, improved walking trails, and a state-of-the-art water feature that will serve as a gathering point for community events.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    date: "2h",
    author: {
      publication: "City News Daily",
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      verified: true,
    },
    likes: 42,
    comments: 7,
  },
  {
    id: "2",
    content:
      "Breaking: City officials announce a new program to support small businesses with grants up to $50,000. Applications open next week. This initiative aims to revitalize our downtown area and create new jobs.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    date: "5h",
    author: {
      publication: "Business Weekly",
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      verified: true,
    },
    likes: 38,
    comments: 12,
  },
]

export const globalNews: NewsItem[] = [
  {
    id: "1",
    content:
      "Scientists announce groundbreaking discovery in carbon capture technology. New method could reduce atmospheric CO2 levels by 30% over the next decade if implemented globally.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    date: "1h",
    author: {
      publication: "Science Today",
      name: "Dr. Emily Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      verified: true,
    },
    likes: 1283,
    comments: 432,
  },
  {
    id: "2",
    content:
      "Leading tech company unveils revolutionary AI-powered devices and eco-friendly gadgets. Pre-orders start next month with global availability planned for holiday season.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    date: "3h",
    author: {
      publication: "Tech Insider",
      name: "Alex Rivera",
      avatar: "/placeholder.svg?height=40&width=40",
      verified: true,
    },
    likes: 2561,
    comments: 891,
  },
]


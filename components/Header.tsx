"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  activeTab: "local" | "global"
  setActiveTab: (tab: "local" | "global") => void
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-10 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center mb-2">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-red-500">s</span>
            <span className="text-yellow-500">o</span>
            <span className="text-green-500">u</span>
            <span className="text-blue-500">p</span>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/"
                  className={`text-sm font-medium ${pathname === "/" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className={`text-sm font-medium ${pathname === "/community" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
                >
                  Community
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex border-t border-border pt-2">
          <Button
            variant={activeTab === "local" ? "default" : "ghost"}
            className="flex-1 rounded-none"
            onClick={() => setActiveTab("local")}
          >
            Local
          </Button>
          <Button
            variant={activeTab === "global" ? "default" : "ghost"}
            className="flex-1 rounded-none"
            onClick={() => setActiveTab("global")}
          >
            Global
          </Button>
        </div>
      </div>
    </header>
  )
}


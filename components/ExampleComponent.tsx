import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"

export default function ExampleComponent() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <h2 className="text-2xl font-bold">Card Title</h2>
      </CardHeader>
      <CardContent>
        <p>This is some example content for the card.</p>
      </CardContent>
      <CardFooter>
        <Button>Click me</Button>
      </CardFooter>
    </Card>
  )
}


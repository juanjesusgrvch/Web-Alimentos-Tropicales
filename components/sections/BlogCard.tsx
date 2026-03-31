import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export interface BlogPost {
    id: string
    title: string
    excerpt: string
    date: string
    category: string
    imageUrl: string
}

interface BlogCardProps {
    post: BlogPost
}
// CARDS DE NOTICIAS
export function BlogCard({ post }: BlogCardProps) {
    return (
        <Card className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="aspect-video w-full overflow-hidden relative bg-muted">
                <img
                    src={post.imageUrl || "/placeholder.svg"}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
            </div>
            <CardHeader className="p-4 md:p-6 pb-2">
                <div className="flex justify-between items-center mb-2">
                    <Badge variant="secondary" className="font-normal">{post.category}</Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="mr-1 h-3 w-3" />
                        {post.date}
                    </div>
                </div>
                <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6 pt-0 flex-grow">
                <CardDescription className="line-clamp-3">
                    {post.excerpt}
                </CardDescription>
            </CardContent>
            <CardFooter className="p-4 md:p-6 pt-0">
                <Button variant="link" className="px-0 text-primary">Leer más →</Button>
            </CardFooter>
        </Card>
    )
}

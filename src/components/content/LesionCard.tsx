import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface LesionCardProps {
  title: string
  description: string
  features: string[]
  keyPoints?: string[]
  category?: string
  icon?: React.ReactNode
}

export function LesionCard({ title, description, features, keyPoints, category, icon }: LesionCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                {icon}
              </div>
            )}
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              {category && (
                <Badge variant="secondary" className="mt-1">{category}</Badge>
              )}
            </div>
          </div>
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold mb-2 text-primary">Histologic Features</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        {keyPoints && keyPoints.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold mb-2 text-yellow-500">Key Points</h4>
            <ul className="space-y-1">
              {keyPoints.map((point, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">!</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

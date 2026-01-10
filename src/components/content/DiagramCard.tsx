import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface DiagramElement {
  label: string
  color: string
  description?: string
}

interface DiagramCardProps {
  title: string
  elements: DiagramElement[]
  description?: string
}

export function DiagramCard({ title, elements, description }: DiagramCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4">
          {elements.map((element, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="h-4 w-4 rounded-full border-2 border-background shadow-sm"
                style={{ backgroundColor: element.color }}
              />
              <div>
                <span className="text-sm font-medium">{element.label}</span>
                {element.description && (
                  <p className="text-xs text-muted-foreground">{element.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

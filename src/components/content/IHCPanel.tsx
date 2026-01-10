import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Marker {
  name: string
  result: 'positive' | 'negative' | 'variable'
  note?: string
}

interface IHCPanelProps {
  title: string
  markers: Marker[]
  interpretation?: string
}

export function IHCPanel({ title, markers, interpretation }: IHCPanelProps) {
  const getResultBadge = (result: 'positive' | 'negative' | 'variable') => {
    switch (result) {
      case 'positive':
        return <Badge variant="success">+</Badge>
      case 'negative':
        return <Badge variant="destructive">-</Badge>
      case 'variable':
        return <Badge variant="warning">+/-</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">IHC Panel: {title}</CardTitle>
        <p className="text-xs text-muted-foreground">Conceptual only — not for diagnostic use</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {markers.map((marker, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
              <div>
                <span className="font-medium">{marker.name}</span>
                {marker.note && (
                  <span className="text-sm text-muted-foreground ml-2">({marker.note})</span>
                )}
              </div>
              {getResultBadge(marker.result)}
            </div>
          ))}
        </div>
        {interpretation && (
          <p className="mt-4 text-sm text-muted-foreground bg-muted p-3 rounded-lg">
            <strong>Interpretation:</strong> {interpretation}
          </p>
        )}
      </CardContent>
    </Card>
  )
}

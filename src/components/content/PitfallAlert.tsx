import { AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PitfallAlertProps {
  title: string
  description: string
  className?: string
}

export function PitfallAlert({ title, description, className }: PitfallAlertProps) {
  return (
    <div className={cn(
      "p-4 rounded-lg border border-yellow-500/30 bg-yellow-500/10",
      className
    )}>
      <div className="flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-yellow-500">{title}</h4>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
      </div>
    </div>
  )
}

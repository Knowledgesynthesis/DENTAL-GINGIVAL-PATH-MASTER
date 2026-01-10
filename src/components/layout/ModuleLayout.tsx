import { Link } from 'react-router-dom'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ModuleLayoutProps {
  title: string
  description: string
  children: React.ReactNode
  icon?: React.ReactNode
}

export function ModuleLayout({ title, description, children, icon }: ModuleLayoutProps) {
  return (
    <div className="container max-w-4xl px-4 py-8">
      <div className="mb-8">
        <Link to="/">
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            {icon || <BookOpen className="h-6 w-6 text-primary" />}
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h1>
            <p className="text-muted-foreground mt-1">{description}</p>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

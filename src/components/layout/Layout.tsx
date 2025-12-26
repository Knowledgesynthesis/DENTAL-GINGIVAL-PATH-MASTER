import { Header } from './Header'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <footer className="border-t py-6 bg-muted/30">
        <div className="container px-4 text-center text-sm text-muted-foreground">
          <p className="mb-2">
            <strong>Educational Use Only</strong> — Not for diagnosis or clinical decision-making.
          </p>
          <p>Dental & Gingival Path Master</p>
        </div>
      </footer>
    </div>
  )
}

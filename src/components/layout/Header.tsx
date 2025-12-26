import { Link, useLocation } from 'react-router-dom'
import { Home, Settings, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Normal Anatomy', href: '/normal' },
  { name: 'Gingiva', href: '/gingiva' },
  { name: 'Cysts', href: '/cysts' },
  { name: 'Odontogenic Tumors', href: '/odontogenic-tumors' },
  { name: 'Epithelial Lesions', href: '/epithelial-lesions' },
  { name: 'Pigmented', href: '/pigmented' },
  { name: 'Soft Tissue', href: '/soft-tissue' },
  { name: 'Salivary', href: '/salivary' },
  { name: 'Jaw', href: '/jaw' },
  { name: 'Infections', href: '/infections' },
  { name: 'Mucocutaneous', href: '/mucocutaneous' },
  { name: 'Pediatric', href: '/pediatric' },
  { name: 'IHC/Molecular', href: '/ihc-molecular' },
  { name: 'Pitfalls', href: '/pitfalls' },
  { name: 'Cases', href: '/cases' },
  { name: 'Assessment', href: '/assessment' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4">
        <Link to="/" className="flex items-center space-x-2 mr-4">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">DP</span>
          </div>
          <span className="font-bold text-lg hidden sm:inline-block">DentalPath</span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-1 flex-1 overflow-x-auto">
          {navigation.slice(0, 8).map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap",
                location.pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="relative group">
            <button className="px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-accent">
              More...
            </button>
            <div className="absolute top-full left-0 mt-1 w-48 bg-card border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              {navigation.slice(8).map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "block px-4 py-2 text-sm transition-colors",
                    location.pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="flex items-center space-x-2 ml-auto">
          <Link to="/">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Home className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/settings">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container px-4 py-4 grid grid-cols-2 gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  location.pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

import { cn } from '@/lib/utils'

interface SyntheticDiagramProps {
  type: 'cyst' | 'tumor' | 'epithelium' | 'gland' | 'tooth' | 'custom'
  variant?: string
  className?: string
  label?: string
}

export function SyntheticDiagram({ type, variant, className, label }: SyntheticDiagramProps) {
  const renderDiagram = () => {
    switch (type) {
      case 'cyst':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <linearGradient id="cystGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <ellipse cx="100" cy="100" rx="80" ry="70" fill="none" stroke="url(#cystGrad)" strokeWidth="8"/>
            <ellipse cx="100" cy="100" rx="60" ry="50" fill="#1e3a5f" opacity="0.3"/>
            {variant === 'okc' && (
              <>
                <path d="M30 100 Q50 90 70 100 Q90 110 110 100 Q130 90 150 100 Q170 110 180 100"
                      stroke="#fbbf24" strokeWidth="3" fill="none"/>
                <text x="100" y="180" textAnchor="middle" fill="#fbbf24" fontSize="10">Parakeratin lining</text>
              </>
            )}
            {variant === 'dentigerous' && (
              <>
                <rect x="85" y="130" width="30" height="40" fill="#94a3b8" rx="5"/>
                <text x="100" y="180" textAnchor="middle" fill="#94a3b8" fontSize="10">Attached to crown</text>
              </>
            )}
          </svg>
        )

      case 'tumor':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <linearGradient id="tumorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            {variant === 'ameloblastoma' && (
              <>
                <circle cx="100" cy="100" r="70" fill="none" stroke="url(#tumorGrad)" strokeWidth="4"/>
                <circle cx="70" cy="80" r="25" fill="#f472b6" opacity="0.3" stroke="#ec4899" strokeWidth="2"/>
                <circle cx="130" cy="80" r="25" fill="#f472b6" opacity="0.3" stroke="#ec4899" strokeWidth="2"/>
                <circle cx="100" cy="120" r="25" fill="#f472b6" opacity="0.3" stroke="#ec4899" strokeWidth="2"/>
                <text x="100" y="180" textAnchor="middle" fill="#ec4899" fontSize="10">Stellate reticulum pattern</text>
              </>
            )}
            {(!variant || variant === 'default') && (
              <>
                <circle cx="100" cy="100" r="60" fill="url(#tumorGrad)" opacity="0.3"/>
                <circle cx="100" cy="100" r="60" fill="none" stroke="url(#tumorGrad)" strokeWidth="3"/>
              </>
            )}
          </svg>
        )

      case 'epithelium':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-full">
            <rect x="10" y="10" width="180" height="130" fill="#1e293b" rx="5"/>
            {/* Keratin layer */}
            <rect x="20" y="20" width="160" height="15" fill="#fbbf24" opacity="0.5"/>
            {/* Epithelial layers */}
            <rect x="20" y="35" width="160" height="25" fill="#60a5fa" opacity="0.4"/>
            <rect x="20" y="60" width="160" height="25" fill="#60a5fa" opacity="0.5"/>
            <rect x="20" y="85" width="160" height="20" fill="#60a5fa" opacity="0.6"/>
            {/* Basement membrane */}
            <line x1="20" y1="105" x2="180" y2="105" stroke="#22c55e" strokeWidth="2" strokeDasharray="5,3"/>
            {/* Connective tissue */}
            <rect x="20" y="107" width="160" height="25" fill="#f97316" opacity="0.3"/>
            {variant === 'dysplasia' && (
              <>
                <circle cx="50" cy="75" r="8" fill="#ef4444" opacity="0.6"/>
                <circle cx="90" cy="55" r="10" fill="#ef4444" opacity="0.6"/>
                <circle cx="140" cy="70" r="7" fill="#ef4444" opacity="0.6"/>
                <text x="100" y="145" textAnchor="middle" fill="#ef4444" fontSize="10">Dysplastic changes</text>
              </>
            )}
          </svg>
        )

      case 'tooth':
        return (
          <svg viewBox="0 0 200 250" className="w-full h-full">
            {/* Crown */}
            <path d="M60 80 Q60 20 100 20 Q140 20 140 80 L140 120 L60 120 Z"
                  fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2"/>
            {/* Enamel label */}
            <text x="100" y="60" textAnchor="middle" fill="#64748b" fontSize="10">Enamel</text>
            {/* Dentin */}
            <path d="M70 90 Q70 50 100 50 Q130 50 130 90 L130 180 Q100 200 70 180 Z"
                  fill="#fcd34d" opacity="0.6"/>
            <text x="100" y="140" textAnchor="middle" fill="#92400e" fontSize="10">Dentin</text>
            {/* Pulp */}
            <path d="M85 100 Q85 70 100 70 Q115 70 115 100 L115 170 Q100 180 85 170 Z"
                  fill="#ef4444" opacity="0.5"/>
            <text x="100" y="160" textAnchor="middle" fill="#dc2626" fontSize="8">Pulp</text>
            {/* Roots */}
            <path d="M70 120 L60 220 Q80 230 80 220 L85 120" fill="#fcd34d" opacity="0.5" stroke="#cbd5e1" strokeWidth="1"/>
            <path d="M130 120 L140 220 Q120 230 120 220 L115 120" fill="#fcd34d" opacity="0.5" stroke="#cbd5e1" strokeWidth="1"/>
          </svg>
        )

      case 'gland':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <linearGradient id="glandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            {/* Acini */}
            <circle cx="60" cy="60" r="25" fill="url(#glandGrad)" opacity="0.4" stroke="#8b5cf6" strokeWidth="2"/>
            <circle cx="140" cy="60" r="25" fill="url(#glandGrad)" opacity="0.4" stroke="#8b5cf6" strokeWidth="2"/>
            <circle cx="60" cy="140" r="25" fill="url(#glandGrad)" opacity="0.4" stroke="#8b5cf6" strokeWidth="2"/>
            <circle cx="140" cy="140" r="25" fill="url(#glandGrad)" opacity="0.4" stroke="#8b5cf6" strokeWidth="2"/>
            <circle cx="100" cy="100" r="25" fill="url(#glandGrad)" opacity="0.4" stroke="#8b5cf6" strokeWidth="2"/>
            {/* Ducts */}
            <line x1="60" y1="85" x2="100" y2="100" stroke="#8b5cf6" strokeWidth="3"/>
            <line x1="140" y1="85" x2="100" y2="100" stroke="#8b5cf6" strokeWidth="3"/>
            <line x1="100" y1="125" x2="100" y2="180" stroke="#8b5cf6" strokeWidth="3"/>
            {variant === 'mec' && (
              <>
                <circle cx="100" cy="100" r="8" fill="#3b82f6"/>
                <circle cx="90" cy="110" r="6" fill="#ef4444"/>
                <circle cx="110" cy="110" r="6" fill="#22c55e"/>
                <text x="100" y="195" textAnchor="middle" fill="#8b5cf6" fontSize="9">3 cell types (MEC)</text>
              </>
            )}
          </svg>
        )

      default:
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <rect x="20" y="20" width="160" height="160" rx="10" fill="#334155" stroke="#64748b" strokeWidth="2"/>
            <text x="100" y="105" textAnchor="middle" fill="#94a3b8" fontSize="14">Diagram</text>
          </svg>
        )
    }
  }

  return (
    <div className={cn("bg-slate-900 rounded-lg p-4", className)}>
      <div className="aspect-square max-w-[200px] mx-auto">
        {renderDiagram()}
      </div>
      {label && (
        <p className="text-center text-sm text-muted-foreground mt-2">{label}</p>
      )}
      <p className="text-center text-xs text-muted-foreground/60 mt-1">Synthetic diagram — educational only</p>
    </div>
  )
}

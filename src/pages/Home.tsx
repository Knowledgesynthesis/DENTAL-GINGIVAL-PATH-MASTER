import { Link } from 'react-router-dom'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Microscope,
  Circle,
  Target,
  Layers,
  Palette,
  Activity,
  Droplet,
  Bone,
  Bug,
  Fingerprint,
  Baby,
  FlaskConical,
  AlertTriangle,
  BookOpen,
  ClipboardCheck,
  Scan
} from 'lucide-react'

const modules = [
  {
    title: 'Normal Anatomy',
    description: 'Oral cavity & dental histology fundamentals',
    href: '/normal',
    icon: Microscope,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10'
  },
  {
    title: 'Gingival Lesions',
    description: 'Developmental & reactive gingival pathology',
    href: '/gingiva',
    icon: Circle,
    color: 'text-pink-400',
    bg: 'bg-pink-500/10'
  },
  {
    title: 'Odontogenic Cysts',
    description: 'Inflammatory & developmental cysts',
    href: '/cysts',
    icon: Target,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10'
  },
  {
    title: 'Odontogenic Tumors',
    description: 'Epithelial, mesenchymal & mixed tumors',
    href: '/odontogenic-tumors',
    icon: Layers,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10'
  },
  {
    title: 'Epithelial Lesions',
    description: 'Benign, dysplastic & malignant lesions',
    href: '/epithelial-lesions',
    icon: Scan,
    color: 'text-red-400',
    bg: 'bg-red-500/10'
  },
  {
    title: 'Pigmented Lesions',
    description: 'Melanocytic & non-melanocytic lesions',
    href: '/pigmented',
    icon: Palette,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10'
  },
  {
    title: 'Soft Tissue',
    description: 'Mesenchymal & neural tumors',
    href: '/soft-tissue',
    icon: Activity,
    color: 'text-green-400',
    bg: 'bg-green-500/10'
  },
  {
    title: 'Salivary Gland',
    description: 'Benign & malignant salivary lesions',
    href: '/salivary',
    icon: Droplet,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10'
  },
  {
    title: 'Jaw Lesions',
    description: 'Fibro-osseous & giant cell lesions',
    href: '/jaw',
    icon: Bone,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10'
  },
  {
    title: 'Infections',
    description: 'Bacterial, fungal & viral patterns',
    href: '/infections',
    icon: Bug,
    color: 'text-lime-400',
    bg: 'bg-lime-500/10'
  },
  {
    title: 'Mucocutaneous',
    description: 'Lichen planus, pemphigus & more',
    href: '/mucocutaneous',
    icon: Fingerprint,
    color: 'text-rose-400',
    bg: 'bg-rose-500/10'
  },
  {
    title: 'Pediatric',
    description: 'Oral pathology in children',
    href: '/pediatric',
    icon: Baby,
    color: 'text-sky-400',
    bg: 'bg-sky-500/10'
  },
  {
    title: 'IHC/Molecular',
    description: 'Conceptual immunohistochemistry',
    href: '/ihc-molecular',
    icon: FlaskConical,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10'
  },
  {
    title: 'Pitfalls & Mimics',
    description: 'Dangerous look-alikes',
    href: '/pitfalls',
    icon: AlertTriangle,
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10'
  },
  {
    title: 'Case Bank',
    description: 'Integrated synthetic cases',
    href: '/cases',
    icon: BookOpen,
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10'
  },
  {
    title: 'Assessment',
    description: 'Test your knowledge',
    href: '/assessment',
    icon: ClipboardCheck,
    color: 'text-teal-400',
    bg: 'bg-teal-500/10'
  }
]

export function Home() {
  return (
    <div className="container max-w-6xl px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 mb-4">
          <Microscope className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Dental & Gingival Path Master
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A comprehensive educational platform for dental, oral, and gingival pathology.
          Designed for pathology residents on oral pathology rotations.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <Badge variant="secondary">Mobile-First</Badge>
          <Badge variant="secondary">Dark Mode</Badge>
          <Badge variant="secondary">Offline Ready</Badge>
          <Badge variant="secondary">Educational Only</Badge>
        </div>
      </div>

      {/* Module Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {modules.map((module) => (
          <Link key={module.href} to={module.href}>
            <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
              <CardHeader>
                <div className={`h-10 w-10 rounded-lg ${module.bg} flex items-center justify-center mb-2`}>
                  <module.icon className={`h-5 w-5 ${module.color}`} />
                </div>
                <CardTitle className="text-lg">{module.title}</CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-12 p-6 rounded-xl bg-muted/50 border text-center">
        <AlertTriangle className="h-6 w-6 text-yellow-500 mx-auto mb-3" />
        <h3 className="font-semibold mb-2">Educational Use Only</h3>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          This application is for educational purposes only and is not intended for clinical diagnosis
          or patient care decisions. All images are synthetic diagrammatic icons. No PHI is collected
          or stored.
        </p>
      </div>
    </div>
  )
}

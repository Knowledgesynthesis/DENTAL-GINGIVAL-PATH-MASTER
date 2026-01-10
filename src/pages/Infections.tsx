import { ModuleLayout } from '@/components/layout'
import { LesionCard, QuickQuiz, PitfallAlert } from '@/components/content'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Bug } from 'lucide-react'

const quizQuestions = [
  {
    question: "Which stain best highlights Candida pseudohyphae?",
    options: ["H&E", "PAS", "AFB", "Congo red"],
    correctIndex: 1,
    explanation: "PAS (Periodic Acid-Schiff) stain highlights fungal elements including Candida pseudohyphae and yeast forms."
  },
  {
    question: "Multinucleated giant cells with nuclear molding and ground-glass nuclei suggest:",
    options: ["Candidiasis", "Herpes simplex virus infection", "Syphilis", "Actinomycosis"],
    correctIndex: 1,
    explanation: "HSV causes characteristic multinucleated epithelial giant cells with nuclear molding, marginated chromatin, and ground-glass (Cowdry type A) inclusions."
  },
  {
    question: "Dense plasma cell infiltrate with perivascular distribution is suggestive of:",
    options: ["HSV", "HPV", "Syphilis", "Candidiasis"],
    correctIndex: 2,
    explanation: "Syphilis characteristically shows a dense plasma cell-rich inflammatory infiltrate with perivascular (cuffing) distribution."
  }
]

export function Infections() {
  return (
    <ModuleLayout
      title="Oral Infectious Lesions"
      description="Bacterial, fungal, and viral infections of the oral cavity"
      icon={<Bug className="h-6 w-6 text-primary" />}
    >
      <div className="space-y-8">
        {/* Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Oral infections can be caused by bacteria, fungi, or viruses. Recognition
              of characteristic histologic patterns and appropriate special stains are
              key to diagnosis. Clinical correlation is essential.
            </p>
          </CardContent>
        </Card>

        <Accordion type="multiple" defaultValue={["fungal"]}>
          <AccordionItem value="fungal">
            <AccordionTrigger>Fungal Infections</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <LesionCard
                  title="Candidiasis"
                  description="Most common oral fungal infection"
                  category="Fungal"
                  features={[
                    "Pseudohyphae and yeast forms",
                    "Superficial epithelial invasion",
                    "Parakeratotic surface with organisms",
                    "Neutrophilic microabscesses",
                    "PAS and GMS positive"
                  ]}
                  keyPoints={[
                    "Clinical forms: pseudomembranous, erythematous, hyperplastic",
                    "May be associated with immunosuppression",
                    "Hyperplastic form has dysplasia risk",
                    "Organisms superficial (within epithelium)"
                  ]}
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <LesionCard
                    title="Histoplasmosis"
                    description="Deep fungal infection; endemic areas"
                    category="Fungal"
                    features={[
                      "Small yeast forms (2-4 μm)",
                      "Within macrophages (intracellular)",
                      "Granulomatous inflammation",
                      "May see necrosis",
                      "GMS and PAS positive"
                    ]}
                    keyPoints={[
                      "Ohio/Mississippi River valleys endemic",
                      "May present as oral ulcers",
                      "Consider in immunocompromised",
                      "Differential: other small yeasts"
                    ]}
                  />
                  <LesionCard
                    title="Blastomycosis"
                    description="Deep fungal infection with broad-based budding"
                    category="Fungal"
                    features={[
                      "Large yeast forms (8-15 μm)",
                      "Broad-based budding (pathognomonic)",
                      "Thick, refractile cell wall",
                      "Granulomatous/suppurative inflammation"
                    ]}
                    keyPoints={[
                      "Great Lakes/Ohio Valley endemic",
                      "May mimic SCC clinically",
                      "Pseudoepitheliomatous hyperplasia common",
                      "GMS highlights organism"
                    ]}
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="viral">
            <AccordionTrigger>Viral Infections</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <LesionCard
                    title="Herpes Simplex Virus (HSV)"
                    description="Causes oral ulcers; primary and recurrent forms"
                    category="Viral"
                    features={[
                      "Multinucleated epithelial giant cells",
                      "Nuclear molding (3-100 nuclei)",
                      "Ground-glass nuclei (Cowdry A inclusions)",
                      "Marginated chromatin",
                      "Acantholysis and epithelial necrosis"
                    ]}
                    keyPoints={[
                      "HSV-1 typically oral, HSV-2 typically genital",
                      "Primary: gingivostomatitis",
                      "Recurrent: lip (herpes labialis)",
                      "Immunostain or PCR for confirmation"
                    ]}
                  />
                  <LesionCard
                    title="Human Papillomavirus (HPV)"
                    description="Causes papillary lesions"
                    category="Viral"
                    features={[
                      "Papillary/verrucous architecture",
                      "Koilocytosis (perinuclear halo + nuclear hyperchromasia)",
                      "Binucleation",
                      "Hyperkeratosis/parakeratosis"
                    ]}
                    keyPoints={[
                      "Low-risk (6, 11): papilloma, condyloma",
                      "High-risk (16, 18): oropharyngeal SCC",
                      "p16 surrogate marker (high-risk)",
                      "ISH or PCR for typing"
                    ]}
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="bacterial">
            <AccordionTrigger>Bacterial Infections</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <LesionCard
                  title="Syphilis"
                  description="Treponema pallidum infection; oral manifestations"
                  category="Bacterial"
                  features={[
                    "Dense plasma cell-rich infiltrate",
                    "Perivascular cuffing",
                    "Endothelial swelling (endarteritis obliterans)",
                    "May have granulomatous features",
                    "Special stains for spirochetes (Warthin-Starry)"
                  ]}
                  keyPoints={[
                    "Primary: chancre (painless ulcer)",
                    "Secondary: mucous patches",
                    "Tertiary: gumma",
                    "Serology essential (VDRL, FTA-ABS)"
                  ]}
                />
                <LesionCard
                  title="Actinomycosis"
                  description="Chronic bacterial infection with 'sulfur granules'"
                  category="Bacterial"
                  features={[
                    "Sulfur granules (bacterial colonies)",
                    "Radiating filaments with clubs",
                    "Suppurative and granulomatous inflammation",
                    "Sinus tract formation"
                  ]}
                  keyPoints={[
                    "Actinomyces israelii most common",
                    "Follows dental extraction/trauma",
                    "Cervicofacial form most common",
                    "Treat with prolonged penicillin"
                  ]}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Special Stains */}
        <Card>
          <CardHeader>
            <CardTitle>Special Stains for Infections</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong className="text-purple-400">PAS:</strong> Fungi (Candida, Histoplasma, Blastomycosis)</li>
              <li><strong className="text-green-400">GMS (Grocott):</strong> Fungi (more sensitive than PAS)</li>
              <li><strong className="text-yellow-400">Warthin-Starry:</strong> Spirochetes (Treponema)</li>
              <li><strong className="text-red-400">AFB (Ziehl-Neelsen):</strong> Mycobacteria</li>
              <li><strong className="text-blue-400">Gram stain:</strong> Bacteria (Actinomyces are gram-positive)</li>
            </ul>
          </CardContent>
        </Card>

        {/* Pitfalls */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Pitfalls & Key Distinctions</h3>
          <PitfallAlert
            title="Blastomycosis vs. SCC"
            description="Blastomycosis causes marked pseudoepitheliomatous hyperplasia that can mimic SCC. Always use GMS stain on any oral lesion with prominent PEH, especially if granulomatous inflammation is present."
          />
          <PitfallAlert
            title="HSV vs. Pemphigus"
            description="Both can show acantholysis. HSV has viral cytopathic effect (multinucleation, molding, inclusions). Pemphigus shows suprabasal acantholysis without viral changes."
          />
        </div>

        {/* Quiz */}
        <QuickQuiz title="Module Quiz" questions={quizQuestions} />
      </div>
    </ModuleLayout>
  )
}

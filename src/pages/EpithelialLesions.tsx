import { ModuleLayout } from '@/components/layout'
import { LesionCard, QuickQuiz, PitfallAlert, SyntheticDiagram, IHCPanel } from '@/components/content'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Scan } from 'lucide-react'

const quizQuestions = [
  {
    question: "Which feature is NOT typically seen in oral epithelial dysplasia?",
    options: ["Nuclear hyperchromasia", "Increased mitotic activity", "Invasion through basement membrane", "Loss of cellular polarity"],
    correctIndex: 2,
    explanation: "Invasion through the basement membrane is the defining feature of carcinoma, not dysplasia. Dysplasia is confined to the epithelium."
  },
  {
    question: "Verrucous carcinoma is characterized by:",
    options: ["Deep invasion with keratin pearls", "Pushing/broad front invasion", "High-grade cytology", "Perineural invasion"],
    correctIndex: 1,
    explanation: "Verrucous carcinoma shows a broad, pushing front of invasion with minimal cytologic atypia. It is considered a low-grade SCC variant."
  },
  {
    question: "Which finding helps distinguish reactive lichenoid inflammation from true dysplasia?",
    options: ["Surface keratinization", "Band-like lymphocytic infiltrate at interface", "Nuclear enlargement", "Increased mitoses"],
    correctIndex: 1,
    explanation: "A dense band-like lymphocytic infiltrate obscuring the epithelial-connective tissue interface is characteristic of lichenoid inflammation and can cause reactive atypia that mimics dysplasia."
  }
]

export function EpithelialLesions() {
  return (
    <ModuleLayout
      title="Oral Epithelial Lesions"
      description="From benign hyperplasia through dysplasia to squamous cell carcinoma"
      icon={<Scan className="h-6 w-6 text-primary" />}
    >
      <div className="space-y-8">
        {/* Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Dysplasia Grading Framework</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Oral epithelial dysplasia represents precancerous change in the oral mucosa.
              Recognition of dysplastic features and appropriate grading is essential for
              patient management.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                <h4 className="font-semibold text-yellow-500">Mild</h4>
                <p className="text-sm text-muted-foreground">Lower 1/3 of epithelium</p>
              </div>
              <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/30">
                <h4 className="font-semibold text-orange-500">Moderate</h4>
                <p className="text-sm text-muted-foreground">Lower 2/3 of epithelium</p>
              </div>
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                <h4 className="font-semibold text-red-500">Severe/CIS</h4>
                <p className="text-sm text-muted-foreground">Full thickness</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <SyntheticDiagram type="epithelium" variant="dysplasia" label="Epithelial Dysplasia Pattern" />

        <Accordion type="multiple" defaultValue={["benign"]}>
          <AccordionItem value="benign">
            <AccordionTrigger>Benign Epithelial Lesions</AccordionTrigger>
            <AccordionContent>
              <div className="grid md:grid-cols-2 gap-4">
                <LesionCard
                  title="Frictional Keratosis"
                  description="Reactive hyperkeratosis from chronic irritation"
                  category="Benign"
                  features={[
                    "Hyperkeratosis (ortho or para)",
                    "Acanthosis may be present",
                    "No dysplasia",
                    "Identifiable source of friction"
                  ]}
                  keyPoints={[
                    "Resolves when irritant removed",
                    "Common on buccal mucosa, tongue",
                    "Clinical correlation essential"
                  ]}
                />
                <LesionCard
                  title="Leukoplakia"
                  description="Clinical term for white patch that cannot be wiped off"
                  category="Clinical Diagnosis"
                  features={[
                    "Hyperkeratosis with/without dysplasia",
                    "Variable histologic findings",
                    "May show atrophy or acanthosis",
                    "Must exclude other diagnoses"
                  ]}
                  keyPoints={[
                    "Clinical, not histologic diagnosis",
                    "~5% show dysplasia or worse",
                    "Floor of mouth, ventral tongue higher risk"
                  ]}
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="dysplasia">
            <AccordionTrigger>Epithelial Dysplasia</AccordionTrigger>
            <AccordionContent>
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle className="text-lg">Cytologic Features of Dysplasia</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm">
                    <li>• Nuclear pleomorphism</li>
                    <li>• Nuclear hyperchromasia</li>
                    <li>• Increased nuclear:cytoplasmic ratio</li>
                    <li>• Increased/abnormal mitoses</li>
                    <li>• Cellular pleomorphism</li>
                    <li>• Prominent nucleoli</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Architectural Features of Dysplasia</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm">
                    <li>• Loss of polarity (basal layer)</li>
                    <li>• Irregular epithelial stratification</li>
                    <li>• Drop-shaped rete ridges</li>
                    <li>• Increased number of mitotic figures</li>
                    <li>• Mitoses in upper epithelium</li>
                    <li>• Dyskeratosis (premature keratinization)</li>
                    <li>• Keratin pearl formation within epithelium</li>
                  </ul>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="malignant">
            <AccordionTrigger>Malignant Epithelial Lesions</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <LesionCard
                  title="Oral Squamous Cell Carcinoma"
                  description="Most common oral malignancy"
                  category="Malignant"
                  features={[
                    "Invasion through basement membrane",
                    "Islands/nests of malignant squamous cells",
                    "Keratin pearls (well-differentiated)",
                    "Desmoplastic stroma",
                    "Perineural/lymphovascular invasion possible"
                  ]}
                  keyPoints={[
                    "Grading: well, moderate, poorly differentiated",
                    "HPV-related: oropharynx (p16+)",
                    "Tobacco/alcohol: oral cavity",
                    "Depth of invasion important for staging"
                  ]}
                />
                <LesionCard
                  title="Verrucous Carcinoma"
                  description="Low-grade SCC variant with pushing invasion"
                  category="Malignant"
                  features={[
                    "Papillary/verrucous surface",
                    "Pushing, broad-front invasion",
                    "Well-differentiated cytology",
                    "Minimal atypia",
                    "'Church-spire' keratin projections"
                  ]}
                  keyPoints={[
                    "Associated with smokeless tobacco",
                    "Good prognosis",
                    "May have hybrid component (conventional SCC)"
                  ]}
                />
                <LesionCard
                  title="Papillary Lesions (HPV-associated)"
                  description="Squamous papilloma and condyloma"
                  category="Benign/Low-grade"
                  features={[
                    "Papillary/finger-like projections",
                    "Fibrovascular cores",
                    "Koilocytosis (HPV cytopathic effect)",
                    "No significant atypia"
                  ]}
                  keyPoints={[
                    "HPV 6, 11 most common (low-risk)",
                    "Rarely transform to malignancy",
                    "Simple excision usually curative"
                  ]}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* IHC Panel */}
        <IHCPanel
          title="Oral SCC"
          markers={[
            { name: "p63", result: "positive" },
            { name: "p40", result: "positive" },
            { name: "CK5/6", result: "positive" },
            { name: "p16", result: "variable", note: "positive in HPV-related" },
            { name: "CK7", result: "negative" }
          ]}
          interpretation="p63 and p40 are sensitive markers for squamous differentiation. p16 overexpression suggests HPV-related origin (primarily oropharyngeal)."
        />

        {/* Pitfalls */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Pitfalls & Key Distinctions</h3>
          <PitfallAlert
            title="Lichenoid Inflammation Mimicking Dysplasia"
            description="Dense band-like lymphocytic infiltrate can cause basal layer obscuration and reactive atypia. Look for interface changes and consider clinical context. This is one of the most common diagnostic pitfalls."
          />
          <PitfallAlert
            title="Pseudoepitheliomatous Hyperplasia"
            description="Reactive epithelial proliferation that can mimic well-differentiated SCC. Look for associated granulomatous inflammation, granular cell tumor, or other underlying lesion. Lacks the cytologic atypia of true SCC."
          />
        </div>

        {/* Quiz */}
        <QuickQuiz title="Module Quiz" questions={quizQuestions} />
      </div>
    </ModuleLayout>
  )
}

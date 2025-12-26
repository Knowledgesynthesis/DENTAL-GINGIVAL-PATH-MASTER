import { ModuleLayout } from '@/components/layout'
import { LesionCard, QuickQuiz, PitfallAlert, IHCPanel } from '@/components/content'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Fingerprint } from 'lucide-react'

const quizQuestions = [
  {
    question: "Which feature is characteristic of oral lichen planus?",
    options: ["Suprabasal acantholysis", "Sawtooth rete ridges with band-like lymphocytes", "Subepithelial split with linear IgG", "Targetoid lesions"],
    correctIndex: 1,
    explanation: "Oral lichen planus shows 'sawtooth' irregular rete ridges, a band-like lymphocytic infiltrate at the interface, and basal cell degeneration."
  },
  {
    question: "Suprabasal acantholysis with 'row of tombstones' basal cells is seen in:",
    options: ["Lichen planus", "Pemphigus vulgaris", "Mucous membrane pemphigoid", "Erythema multiforme"],
    correctIndex: 1,
    explanation: "Pemphigus vulgaris shows suprabasal acantholysis with basal cells remaining attached to the basement membrane like a 'row of tombstones.'"
  },
  {
    question: "Linear deposition of IgG and C3 at the basement membrane zone is characteristic of:",
    options: ["Pemphigus vulgaris", "Lichen planus", "Mucous membrane pemphigoid", "Lupus erythematosus"],
    correctIndex: 2,
    explanation: "Mucous membrane pemphigoid shows linear deposition of IgG and C3 at the basement membrane zone by direct immunofluorescence."
  }
]

export function Mucocutaneous() {
  return (
    <ModuleLayout
      title="Mucocutaneous Disorders"
      description="Immune-mediated and inflammatory conditions affecting oral mucosa"
      icon={<Fingerprint className="h-6 w-6 text-primary" />}
    >
      <div className="space-y-8">
        {/* Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Mucocutaneous disorders often present with oral manifestations. Understanding
              the histologic patterns and the role of direct immunofluorescence (DIF)
              is essential for accurate diagnosis.
            </p>
          </CardContent>
        </Card>

        <Accordion type="multiple" defaultValue={["lichenoid"]}>
          <AccordionItem value="lichenoid">
            <AccordionTrigger>Lichenoid Lesions</AccordionTrigger>
            <AccordionContent>
              <LesionCard
                title="Oral Lichen Planus"
                description="Chronic T-cell mediated autoimmune condition"
                category="Autoimmune"
                features={[
                  "'Sawtooth' irregular rete ridges",
                  "Band-like (lichenoid) lymphocytic infiltrate",
                  "Basal cell degeneration/apoptosis",
                  "Civatte bodies (apoptotic keratinocytes)",
                  "Max Joseph spaces (clefts at interface)"
                ]}
                keyPoints={[
                  "White (reticular, plaque) and red (erosive) forms",
                  "Bilateral buccal mucosa common",
                  "Wickham striae clinically",
                  "Small malignant transformation risk (~1%)"
                ]}
              />
              <div className="mt-4">
                <PitfallAlert
                  title="Lichenoid Drug Reaction"
                  description="Histologically identical to lichen planus. Clinical history of new medication is key. Common culprits: NSAIDs, ACE inhibitors, beta-blockers, antimalarials."
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="vesiculobullous">
            <AccordionTrigger>Vesiculobullous Diseases</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <LesionCard
                  title="Pemphigus Vulgaris"
                  description="Autoantibodies against desmogleins; suprabasal split"
                  category="Autoimmune"
                  features={[
                    "Suprabasal acantholysis",
                    "'Row of tombstones' (basal cells attached to BM)",
                    "Acantholytic (Tzanck) cells in blister",
                    "Minimal inflammation in early lesions",
                    "DIF: Intercellular IgG and C3 ('chicken wire')"
                  ]}
                  keyPoints={[
                    "Oral lesions often precede skin",
                    "Anti-desmoglein 3 antibodies (mucosal)",
                    "Positive Nikolsky sign",
                    "Requires systemic immunosuppression"
                  ]}
                />
                <LesionCard
                  title="Mucous Membrane Pemphigoid"
                  description="Autoantibodies against BMZ; subepithelial split"
                  category="Autoimmune"
                  features={[
                    "Subepithelial cleft/separation",
                    "Intact basal cells on roof of blister",
                    "Mixed inflammatory infiltrate in lamina propria",
                    "Scarring may occur",
                    "DIF: Linear IgG, C3 at BMZ"
                  ]}
                  keyPoints={[
                    "Desquamative gingivitis common",
                    "Ocular involvement can cause blindness",
                    "Scarring distinguishes from pemphigoid",
                    "Anti-BP180 or BP230 antibodies"
                  ]}
                />
                <Card className="bg-muted/50">
                  <CardHeader>
                    <CardTitle className="text-lg">DIF Patterns</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Pemphigus:</strong> Intercellular (between keratinocytes) - "chicken wire"</li>
                      <li><strong>Pemphigoid:</strong> Linear at basement membrane zone</li>
                      <li><strong>Lupus:</strong> Granular at BMZ ("lupus band")</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="lupus">
            <AccordionTrigger>Lupus Erythematosus</AccordionTrigger>
            <AccordionContent>
              <LesionCard
                title="Oral Lupus Erythematosus"
                description="Oral manifestations of systemic or discoid lupus"
                category="Autoimmune"
                features={[
                  "Interface mucositis with vacuolar change",
                  "Thickened basement membrane (PAS+)",
                  "Perivascular lymphoplasmacytic infiltrate",
                  "Superficial and deep inflammation",
                  "DIF: Granular IgG, IgM, C3 at BMZ (lupus band)"
                ]}
                keyPoints={[
                  "Oral lesions may resemble lichen planus",
                  "Palate and buccal mucosa common",
                  "Central erythema with radiating striae",
                  "DIF helps distinguish from lichen planus"
                ]}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="erythema-multiforme">
            <AccordionTrigger>Erythema Multiforme</AccordionTrigger>
            <AccordionContent>
              <LesionCard
                title="Erythema Multiforme"
                description="Acute hypersensitivity reaction; targetoid lesions"
                category="Hypersensitivity"
                features={[
                  "Keratinocyte apoptosis (satellite cell necrosis)",
                  "Lymphocyte-associated apoptosis",
                  "Interface changes",
                  "Subepithelial bulla formation in severe cases",
                  "Perivascular lymphocytic infiltrate"
                ]}
                keyPoints={[
                  "Target/targetoid skin lesions characteristic",
                  "HSV is most common trigger",
                  "EM minor vs. EM major (SJS continuum)",
                  "Oral lesions: hemorrhagic crusting of lips"
                ]}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* IHC/DIF Panel */}
        <IHCPanel
          title="Vesiculobullous Diseases"
          markers={[
            { name: "DIF - IgG", result: "positive", note: "pattern varies by disease" },
            { name: "DIF - C3", result: "positive", note: "often accompanies IgG" },
            { name: "DIF - IgA", result: "variable", note: "linear IgA disease" },
            { name: "Anti-Dsg1", result: "positive", note: "pemphigus foliaceus" },
            { name: "Anti-Dsg3", result: "positive", note: "pemphigus vulgaris (mucosal)" }
          ]}
          interpretation="DIF pattern and serology are essential for classifying vesiculobullous diseases. Perilesional tissue required for DIF."
        />

        {/* Pitfalls */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Pitfalls & Key Distinctions</h3>
          <PitfallAlert
            title="Lichen Planus vs. Lichenoid Dysplasia"
            description="Dense lichenoid inflammation can obscure epithelial changes. If interface inflammation is heavy and cytologic atypia is present in the upper epithelium, consider lichenoid dysplasia. Step sections may help."
          />
          <PitfallAlert
            title="Pemphigus vs. Pemphigoid"
            description="Key difference is level of split: pemphigus is suprabasal (intraepithelial); pemphigoid is subepithelial. Look for 'tombstone' basal cells in pemphigus. DIF is essential for confirmation."
          />
        </div>

        {/* Quiz */}
        <QuickQuiz title="Module Quiz" questions={quizQuestions} />
      </div>
    </ModuleLayout>
  )
}

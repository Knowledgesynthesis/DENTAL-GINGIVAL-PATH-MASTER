import { ModuleLayout } from '@/components/layout'
import { LesionCard, QuickQuiz, PitfallAlert, IHCPanel } from '@/components/content'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Palette } from 'lucide-react'

const quizQuestions = [
  {
    question: "Which oral pigmented lesion shows granular metallic deposits within the connective tissue?",
    options: ["Melanotic macule", "Oral melanoma", "Amalgam tattoo", "Melanoacanthoma"],
    correctIndex: 2,
    explanation: "Amalgam tattoo shows granular black/brown metallic (silver/mercury) deposits within connective tissue, often around blood vessels and nerves."
  },
  {
    question: "Melanoacanthoma differs from melanotic macule primarily by:",
    options: ["Increased melanin in basal layer", "Presence of dendritic melanocytes throughout epithelium", "Location on hard palate", "Presence of atypical melanocytes"],
    correctIndex: 1,
    explanation: "Melanoacanthoma shows dendritic melanocytes scattered throughout all layers of acanthotic epithelium, whereas melanotic macule has melanin primarily in the basal layer."
  },
  {
    question: "Which IHC marker helps confirm melanocytic origin?",
    options: ["CK7", "p63", "S100/SOX10", "CD34"],
    correctIndex: 2,
    explanation: "S100 and SOX10 are sensitive markers for melanocytic differentiation. They should be used when melanocytic origin is suspected."
  }
]

export function PigmentedLesions() {
  return (
    <ModuleLayout
      title="Oral Pigmented Lesions"
      description="Melanocytic and non-melanocytic pigmented lesions of the oral cavity"
      icon={<Palette className="h-6 w-6 text-primary" />}
    >
      <div className="space-y-8">
        {/* Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Oral pigmentation can arise from melanin, hemosiderin, foreign material, or other sources.
              The key clinical concern is distinguishing benign pigmented lesions from oral melanoma,
              which is rare but aggressive.
            </p>
          </CardContent>
        </Card>

        <Accordion type="multiple" defaultValue={["melanocytic"]}>
          <AccordionItem value="melanocytic">
            <AccordionTrigger>Melanocytic Lesions</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <LesionCard
                  title="Physiologic (Racial) Pigmentation"
                  description="Normal variant in dark-skinned individuals"
                  category="Normal Variant"
                  features={[
                    "Increased melanin in basal layer",
                    "Normal number of melanocytes",
                    "Melanin in keratinocytes",
                    "No architectural changes"
                  ]}
                  keyPoints={[
                    "Symmetric, diffuse distribution",
                    "Attached gingiva common site",
                    "No treatment needed"
                  ]}
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <LesionCard
                    title="Oral Melanotic Macule"
                    description="Most common focal pigmented lesion"
                    category="Benign"
                    features={[
                      "Increased melanin in basal layer",
                      "Normal or slightly increased melanocytes",
                      "No nesting of melanocytes",
                      "No atypia"
                    ]}
                    keyPoints={[
                      "Lip vermillion most common",
                      "Stable; does not progress",
                      "Biopsy if clinically concerning"
                    ]}
                  />
                  <LesionCard
                    title="Melanoacanthoma"
                    description="Reactive proliferation of dendritic melanocytes"
                    category="Benign"
                    features={[
                      "Acanthotic epithelium",
                      "Dendritic melanocytes throughout epithelium",
                      "Increased melanin in all layers",
                      "Often spongiosis present"
                    ]}
                    keyPoints={[
                      "Usually in dark-skinned patients",
                      "May follow trauma/irritation",
                      "Buccal mucosa common"
                    ]}
                  />
                </div>
                <LesionCard
                  title="Oral Melanocytic Nevus"
                  description="Benign proliferation of nevus cells"
                  category="Benign"
                  features={[
                    "Nests of nevus cells",
                    "Junctional, compound, or intramucosal types",
                    "Blue nevus: deep, heavily pigmented cells",
                    "No significant atypia"
                  ]}
                  keyPoints={[
                    "Intramucosal (intradermal) most common type",
                    "Hard palate favored site",
                    "Complete excision recommended"
                  ]}
                />
                <LesionCard
                  title="Oral Melanoma"
                  description="Rare but aggressive malignancy"
                  category="Malignant"
                  features={[
                    "Atypical melanocytes at basal layer",
                    "Pagetoid spread (upward migration)",
                    "Invasive component with atypia",
                    "Nuclear pleomorphism, mitoses",
                    "May show amelanotic areas"
                  ]}
                  keyPoints={[
                    "Palate and gingiva most common",
                    "Poor prognosis (5-year survival ~20%)",
                    "Often diagnosed at advanced stage",
                    "Wide excision is treatment"
                  ]}
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="non-melanocytic">
            <AccordionTrigger>Non-Melanocytic Pigmented Lesions</AccordionTrigger>
            <AccordionContent>
              <div className="grid md:grid-cols-2 gap-4">
                <LesionCard
                  title="Amalgam Tattoo"
                  description="Iatrogenic deposition of dental amalgam"
                  category="Foreign Material"
                  features={[
                    "Granular black/brown metallic particles",
                    "In connective tissue, around vessels/nerves",
                    "May have minimal foreign body reaction",
                    "Often deep in tissue"
                  ]}
                  keyPoints={[
                    "Most common focal oral pigmentation",
                    "History of dental work at site",
                    "May be visible on radiograph",
                    "No treatment needed if diagnosis certain"
                  ]}
                />
                <LesionCard
                  title="Hemosiderin Deposits"
                  description="Iron-containing pigment from hemorrhage"
                  category="Post-traumatic"
                  features={[
                    "Golden-brown pigment",
                    "Prussian blue positive",
                    "Within macrophages",
                    "May follow trauma/surgery"
                  ]}
                  keyPoints={[
                    "History of trauma/surgery",
                    "May be seen in resolving hematoma",
                    "Hemangioma may show hemosiderin"
                  ]}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* IHC Panel */}
        <IHCPanel
          title="Melanocytic Lesions"
          markers={[
            { name: "S100", result: "positive" },
            { name: "SOX10", result: "positive" },
            { name: "HMB-45", result: "positive", note: "junctional component" },
            { name: "Melan-A", result: "positive" },
            { name: "Ki-67", result: "variable", note: "high in melanoma" }
          ]}
          interpretation="S100 and SOX10 are most sensitive. HMB-45 positivity in deep component suggests melanoma. Ki-67 proliferation index helps assess malignancy."
        />

        {/* Pitfalls */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Pitfalls & Key Distinctions</h3>
          <PitfallAlert
            title="Melanoma vs. Benign Melanocytic Lesions"
            description="Oral melanoma often lacks the clinical features seen in cutaneous melanoma (ABCDE criteria less reliable). Any new, growing, or changing pigmented lesion should be biopsied. Delay in diagnosis is common and affects prognosis."
          />
          <PitfallAlert
            title="Amalgam Tattoo vs. Melanocytic Lesion"
            description="When uncertain, a radiograph may show radiopaque particles in amalgam tattoo. If still unclear, biopsy is warranted. Amalgam particles are coarse and irregular; melanin is fine and granular."
          />
          <PitfallAlert
            title="Blue Nevus vs. Melanoma"
            description="Blue nevus can show deep, heavily pigmented cells that raise concern for melanoma. However, the cells are bland, dendritic, and lack atypia. Always assess cytology carefully."
          />
        </div>

        {/* Quiz */}
        <QuickQuiz title="Module Quiz" questions={quizQuestions} />
      </div>
    </ModuleLayout>
  )
}

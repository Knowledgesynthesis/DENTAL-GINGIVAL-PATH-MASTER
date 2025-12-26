import { ModuleLayout } from '@/components/layout'
import { LesionCard, QuickQuiz, PitfallAlert } from '@/components/content'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Circle } from 'lucide-react'

const quizQuestions = [
  {
    question: "Which gingival lesion characteristically shows mineralized material resembling bone or cementum?",
    options: ["Pyogenic granuloma", "Peripheral giant cell granuloma", "Peripheral ossifying fibroma", "Irritation fibroma"],
    correctIndex: 2,
    explanation: "Peripheral ossifying fibroma contains mineralized material (bone, cementum-like material, or dystrophic calcification) within fibrous tissue."
  },
  {
    question: "What is the most common location for pyogenic granuloma in the oral cavity?",
    options: ["Tongue", "Gingiva", "Buccal mucosa", "Hard palate"],
    correctIndex: 1,
    explanation: "The gingiva is the most common oral site for pyogenic granuloma, often related to local irritation or hormonal changes."
  },
  {
    question: "Which lesion contains multinucleated giant cells and is unique to the gingiva and alveolar ridge?",
    options: ["Central giant cell granuloma", "Peripheral giant cell granuloma", "Pyogenic granuloma", "Giant cell fibroma"],
    correctIndex: 1,
    explanation: "Peripheral giant cell granuloma is exclusively found on the gingiva and alveolar ridge and contains osteoclast-like giant cells."
  }
]

export function GingivalLesions() {
  return (
    <ModuleLayout
      title="Developmental & Reactive Gingival Lesions"
      description="Common reactive and developmental lesions arising from gingival tissue"
      icon={<Circle className="h-6 w-6 text-primary" />}
    >
      <div className="space-y-8">
        {/* Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Gingival lesions are among the most common oral pathologies encountered. Most are
              reactive in nature, arising in response to local irritation. Distinguishing these
              benign lesions from neoplasms is essential for appropriate management.
            </p>
          </CardContent>
        </Card>

        {/* Reactive Lesions */}
        <Accordion type="multiple" defaultValue={["reactive"]}>
          <AccordionItem value="reactive">
            <AccordionTrigger>Reactive Gingival Lesions</AccordionTrigger>
            <AccordionContent>
              <div className="grid md:grid-cols-2 gap-4">
                <LesionCard
                  title="Pyogenic Granuloma"
                  description="Lobular capillary hemangioma; misnomer - not purulent or granulomatous"
                  category="Reactive"
                  features={[
                    "Lobular proliferation of capillaries",
                    "Granulation tissue-like appearance",
                    "Ulcerated surface common",
                    "Edematous fibrous stroma",
                    "Mixed inflammatory infiltrate"
                  ]}
                  keyPoints={[
                    "Associated with pregnancy (granuloma gravidarum)",
                    "May recur if incompletely excised",
                    "Remove local irritants"
                  ]}
                />
                <LesionCard
                  title="Peripheral Ossifying Fibroma"
                  description="Reactive lesion with mineralized component; gingiva only"
                  category="Reactive"
                  features={[
                    "Fibrous connective tissue proliferation",
                    "Mineralized material (bone/cementum-like)",
                    "May have surface ulceration",
                    "Highly cellular fibroblastic stroma"
                  ]}
                  keyPoints={[
                    "Exclusive to gingiva",
                    "Higher recurrence rate (~16%)",
                    "Must excise to periosteum"
                  ]}
                />
                <LesionCard
                  title="Peripheral Giant Cell Granuloma"
                  description="Gingival lesion with osteoclast-like giant cells"
                  category="Reactive"
                  features={[
                    "Multinucleated osteoclast-like giant cells",
                    "Fibrovascular stroma",
                    "Hemosiderin deposits common",
                    "May cause superficial bone resorption"
                  ]}
                  keyPoints={[
                    "Blue/purple clinical appearance",
                    "Rule out hyperparathyroidism if multiple",
                    "Peripheral counterpart to central giant cell granuloma"
                  ]}
                />
                <LesionCard
                  title="Irritation Fibroma"
                  description="Most common oral mucosal mass; reactive fibrous hyperplasia"
                  category="Reactive"
                  features={[
                    "Dense collagenous connective tissue",
                    "Scattered fibroblasts",
                    "Overlying epithelium may be atrophic or hyperplastic",
                    "Minimal inflammation unless traumatized"
                  ]}
                  keyPoints={[
                    "Result of chronic irritation",
                    "Most common on buccal mucosa along bite line",
                    "Simple excision is curative"
                  ]}
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="developmental">
            <AccordionTrigger>Developmental Gingival Lesions</AccordionTrigger>
            <AccordionContent>
              <div className="grid md:grid-cols-2 gap-4">
                <LesionCard
                  title="Localized Juvenile Spongiotic Gingival Hyperplasia"
                  description="Distinctive lesion of anterior gingiva in children/young adults"
                  category="Developmental"
                  features={[
                    "Prominent spongiosis of surface epithelium",
                    "Elongated rete ridges",
                    "Neutrophilic infiltrate",
                    "Papillary surface architecture"
                  ]}
                  keyPoints={[
                    "Bright red clinical appearance",
                    "Anterior gingiva predilection",
                    "Benign; may recur"
                  ]}
                />
                <LesionCard
                  title="Gingival Cyst of the Adult"
                  description="Rare developmental cyst of the attached gingiva"
                  category="Developmental"
                  features={[
                    "Thin epithelial lining (often cuboidal)",
                    "May show focal thickenings (plaques)",
                    "Clear fluid contents",
                    "Located in attached gingiva"
                  ]}
                  keyPoints={[
                    "Mandibular premolar region most common",
                    "From dental lamina remnants",
                    "Related to lateral periodontal cyst"
                  ]}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Pitfalls */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Pitfalls & Key Distinctions</h3>
          <PitfallAlert
            title="Reactive vs. Neoplastic"
            description="All four major gingival reactive lesions can clinically resemble neoplasms. Key: look for local irritant, history of growth pattern, and histologic features. True neoplasms are exceedingly rare on the gingiva."
          />
          <PitfallAlert
            title="Peripheral Ossifying Fibroma vs. POF"
            description="Do not confuse peripheral ossifying fibroma (gingival reactive lesion) with ossifying fibroma (true neoplasm of jaw). They are completely different entities despite similar names."
          />
          <PitfallAlert
            title="Giant Cell Lesions"
            description="When encountering peripheral giant cell granuloma, consider checking serum calcium and PTH to rule out brown tumor of hyperparathyroidism, especially if multiple or recurrent."
          />
        </div>

        {/* Quiz */}
        <QuickQuiz title="Module Quiz" questions={quizQuestions} />
      </div>
    </ModuleLayout>
  )
}

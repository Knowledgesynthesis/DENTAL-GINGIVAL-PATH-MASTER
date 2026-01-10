import { ModuleLayout } from '@/components/layout'
import { LesionCard, QuickQuiz, PitfallAlert, SyntheticDiagram } from '@/components/content'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Target } from 'lucide-react'

const quizQuestions = [
  {
    question: "Which cyst is characterized by a parakeratinized lining with a palisaded basal layer?",
    options: ["Dentigerous cyst", "Radicular cyst", "Odontogenic keratocyst", "Lateral periodontal cyst"],
    correctIndex: 2,
    explanation: "The odontogenic keratocyst (OKC) has a distinctive parakeratinized epithelial lining with a prominent palisaded basal layer and corrugated surface."
  },
  {
    question: "A cyst attached to the cervical region of an unerupted tooth is most likely:",
    options: ["Radicular cyst", "Dentigerous cyst", "Odontogenic keratocyst", "Residual cyst"],
    correctIndex: 1,
    explanation: "Dentigerous cysts are attached at the cementoenamel junction (cervical region) of an unerupted tooth, enclosing the crown."
  },
  {
    question: "Which cyst arises from the epithelial rests of Malassez?",
    options: ["Dentigerous cyst", "Odontogenic keratocyst", "Radicular cyst", "Glandular odontogenic cyst"],
    correctIndex: 2,
    explanation: "Radicular (periapical) cysts arise from epithelial rests of Malassez stimulated by inflammation from a non-vital tooth."
  }
]

export function OdontogenicCysts() {
  return (
    <ModuleLayout
      title="Odontogenic Cysts"
      description="Inflammatory and developmental cysts arising from odontogenic epithelium"
      icon={<Target className="h-6 w-6 text-primary" />}
    >
      <div className="space-y-8">
        {/* Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Classification Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="info">Inflammatory Origin</Badge>
              <Badge variant="success">Developmental Origin</Badge>
            </div>
            <p className="text-muted-foreground">
              Odontogenic cysts arise from epithelium associated with tooth development.
              They are classified as inflammatory (arising from infection) or developmental
              (arising from odontogenic epithelium without inflammatory stimulus).
            </p>
          </CardContent>
        </Card>

        {/* Cyst Diagrams */}
        <div className="grid md:grid-cols-2 gap-6">
          <SyntheticDiagram type="cyst" variant="okc" label="Odontogenic Keratocyst Pattern" />
          <SyntheticDiagram type="cyst" variant="dentigerous" label="Dentigerous Cyst Pattern" />
        </div>

        {/* Inflammatory Cysts */}
        <Accordion type="multiple" defaultValue={["inflammatory"]}>
          <AccordionItem value="inflammatory">
            <AccordionTrigger>
              <span className="flex items-center gap-2">
                Inflammatory Cysts
                <Badge variant="info">Inflammatory Origin</Badge>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid md:grid-cols-2 gap-4">
                <LesionCard
                  title="Radicular (Periapical) Cyst"
                  description="Most common odontogenic cyst; arises from non-vital tooth"
                  category="Inflammatory"
                  features={[
                    "Non-keratinized stratified squamous lining",
                    "Arcading/hyperplastic epithelium",
                    "Chronic inflammatory infiltrate in wall",
                    "Cholesterol clefts and hemosiderin common",
                    "Rushton (hyaline) bodies may be present"
                  ]}
                  keyPoints={[
                    "Associated with non-vital tooth",
                    "Derived from rests of Malassez",
                    "May persist after extraction (residual cyst)"
                  ]}
                />
                <LesionCard
                  title="Residual Cyst"
                  description="Radicular cyst persisting after tooth extraction"
                  category="Inflammatory"
                  features={[
                    "Same histology as radicular cyst",
                    "May show decreased inflammation over time",
                    "Lining may become attenuated"
                  ]}
                  keyPoints={[
                    "History of prior extraction",
                    "No associated tooth present",
                    "Treat by enucleation"
                  ]}
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="developmental">
            <AccordionTrigger>
              <span className="flex items-center gap-2">
                Developmental Cysts
                <Badge variant="success">Developmental Origin</Badge>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <LesionCard
                  title="Dentigerous Cyst"
                  description="Second most common odontogenic cyst; surrounds unerupted tooth crown"
                  category="Developmental"
                  features={[
                    "Attached at cementoenamel junction",
                    "Non-keratinized stratified squamous lining",
                    "Thin 2-4 cell layer lining (unless inflamed)",
                    "Fibrous wall with scattered inflammation",
                    "Tooth crown within cyst lumen"
                  ]}
                  keyPoints={[
                    "Most common around mandibular 3rd molars",
                    "Must rule out unicystic ameloblastoma",
                    "Reduced enamel epithelium origin"
                  ]}
                />
                <LesionCard
                  title="Odontogenic Keratocyst (OKC)"
                  description="Distinctive cyst with aggressive behavior; PTCH1 mutation associated"
                  category="Developmental"
                  features={[
                    "Parakeratinized stratified squamous lining",
                    "Uniform 5-8 cell thickness",
                    "Palisaded columnar/cuboidal basal layer",
                    "Corrugated (wavy) surface",
                    "Flat interface with connective tissue (no rete)",
                    "Satellite cysts may be present"
                  ]}
                  keyPoints={[
                    "High recurrence rate (25-30%)",
                    "Multiple OKCs suggest Gorlin syndrome",
                    "Formerly: keratocystic odontogenic tumor"
                  ]}
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <LesionCard
                    title="Lateral Periodontal Cyst"
                    description="Rare cyst located lateral to tooth root"
                    category="Developmental"
                    features={[
                      "Thin non-keratinized squamous lining",
                      "Focal epithelial thickenings (plaques)",
                      "Clear cells may be present",
                      "Mandibular premolar area"
                    ]}
                    keyPoints={[
                      "Associated tooth is vital",
                      "From dental lamina remnants",
                      "Botryoid variant: multilocular"
                    ]}
                  />
                  <LesionCard
                    title="Glandular Odontogenic Cyst"
                    description="Rare cyst with glandular features; locally aggressive"
                    category="Developmental"
                    features={[
                      "Variable epithelial lining thickness",
                      "Mucous cells and duct-like spaces",
                      "Ciliated cells may be present",
                      "Papillary projections into lumen",
                      "Epithelial spheres/whorls"
                    ]}
                    keyPoints={[
                      "Anterior mandible predilection",
                      "High recurrence rate",
                      "Must distinguish from central MEC"
                    ]}
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Pitfalls */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Pitfalls & Key Distinctions</h3>
          <PitfallAlert
            title="OKC vs. Orthokeratinized Odontogenic Cyst"
            description="Orthokeratinized odontogenic cyst (OOC) has a granular layer and orthokeratin (no nuclei in keratin). Unlike OKC, it has low recurrence and is not associated with Gorlin syndrome. Do not confuse them."
          />
          <PitfallAlert
            title="Dentigerous Cyst vs. Hyperplastic Follicle"
            description="A pericoronal radiolucency >2.5mm suggests dentigerous cyst rather than normal follicle. However, definitive distinction requires histologic examination."
          />
          <PitfallAlert
            title="Dentigerous Cyst vs. Unicystic Ameloblastoma"
            description="Always examine the entire cyst lining carefully. Unicystic ameloblastoma may arise in a dentigerous cyst and shows ameloblastic epithelium (basal palisading, reverse polarity, stellate reticulum-like areas)."
          />
        </div>

        {/* Quiz */}
        <QuickQuiz title="Module Quiz" questions={quizQuestions} />
      </div>
    </ModuleLayout>
  )
}

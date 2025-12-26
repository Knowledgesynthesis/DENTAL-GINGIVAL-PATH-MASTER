import { ModuleLayout } from '@/components/layout'
import { LesionCard, QuickQuiz, PitfallAlert } from '@/components/content'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Baby } from 'lucide-react'

const quizQuestions = [
  {
    question: "A translucent, dome-shaped swelling over an erupting tooth in an infant is most likely:",
    options: ["Dentigerous cyst", "Eruption cyst", "Mucocele", "Gingival cyst of the newborn"],
    correctIndex: 1,
    explanation: "Eruption cyst is a soft tissue variant of dentigerous cyst that presents as a dome-shaped swelling over an erupting tooth. It typically resolves spontaneously."
  },
  {
    question: "Congenital epulis is characterized by:",
    options: ["Langerhans cells", "Granular cells similar to granular cell tumor", "Odontogenic epithelium", "Osteoclast-like giant cells"],
    correctIndex: 1,
    explanation: "Congenital epulis (congenital granular cell epulis) shows granular cells similar to granular cell tumor but is S100 negative, unlike granular cell tumor."
  },
  {
    question: "Which pediatric vascular lesion characteristically shows GLUT-1 positivity?",
    options: ["Venous malformation", "Lymphatic malformation", "Infantile hemangioma", "Arteriovenous malformation"],
    correctIndex: 2,
    explanation: "Infantile hemangioma is GLUT-1 positive, which distinguishes it from vascular malformations. Infantile hemangiomas proliferate and then involute."
  }
]

export function Pediatric() {
  return (
    <ModuleLayout
      title="Pediatric Oral Pathology"
      description="Developmental and acquired lesions in children"
      icon={<Baby className="h-6 w-6 text-primary" />}
    >
      <div className="space-y-8">
        {/* Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Pediatric oral pathology includes developmental lesions, congenital conditions,
              and some neoplasms that have a predilection for the pediatric population.
              Understanding these entities helps avoid misdiagnosis.
            </p>
          </CardContent>
        </Card>

        <Accordion type="multiple" defaultValue={["developmental"]}>
          <AccordionItem value="developmental">
            <AccordionTrigger>Developmental Cysts & Lesions</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <LesionCard
                    title="Eruption Cyst"
                    description="Dentigerous cyst in soft tissue; over erupting tooth"
                    category="Developmental"
                    features={[
                      "Circumferential cyst around tooth crown",
                      "Non-keratinized epithelial lining",
                      "May contain hemorrhage (eruption hematoma)",
                      "Reduced enamel epithelium origin"
                    ]}
                    keyPoints={[
                      "Blue/translucent dome over erupting tooth",
                      "Resolves with tooth eruption",
                      "Rarely needs intervention",
                      "Hemorrhagic = eruption hematoma"
                    ]}
                  />
                  <LesionCard
                    title="Gingival Cyst of Newborn"
                    description="Dental lamina cyst; Bohn's nodules/Epstein pearls"
                    category="Developmental"
                    features={[
                      "Small keratinized cysts",
                      "Arise from dental lamina remnants",
                      "Multiple, bilateral",
                      "Self-limiting"
                    ]}
                    keyPoints={[
                      "Bohn's nodules: along alveolar ridge",
                      "Epstein pearls: midline palate",
                      "No treatment needed",
                      "Resolve spontaneously"
                    ]}
                  />
                </div>
                <LesionCard
                  title="Ranula"
                  description="Mucus extravasation phenomenon of sublingual gland"
                  category="Developmental/Acquired"
                  features={[
                    "Mucin pool without epithelial lining",
                    "Surrounded by granulation tissue",
                    "Macrophages and giant cells",
                    "May extend into neck (plunging ranula)"
                  ]}
                  keyPoints={[
                    "Floor of mouth location",
                    "Blue, translucent appearance",
                    "Plunging ranula extends below mylohyoid",
                    "Marsupialization or excision with gland"
                  ]}
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="congenital">
            <AccordionTrigger>Congenital Lesions</AccordionTrigger>
            <AccordionContent>
              <LesionCard
                title="Congenital Epulis (Congenital Granular Cell Epulis)"
                description="Rare congenital tumor; granular cells but S100 negative"
                category="Congenital"
                features={[
                  "Large granular cells with eosinophilic cytoplasm",
                  "Similar appearance to granular cell tumor",
                  "S100 NEGATIVE (unlike granular cell tumor)",
                  "Prominent vasculature",
                  "No pseudoepitheliomatous hyperplasia"
                ]}
                keyPoints={[
                  "Female predominance (8:1)",
                  "Present at birth",
                  "Anterior alveolar ridge",
                  "Simple excision curative; no recurrence"
                ]}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="vascular">
            <AccordionTrigger>Vascular Lesions</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <p className="text-sm text-muted-foreground">
                      Vascular lesions are classified as vascular tumors (hemangiomas) or
                      vascular malformations. This distinction is clinically important.
                    </p>
                  </CardContent>
                </Card>
                <LesionCard
                  title="Infantile Hemangioma"
                  description="Benign vascular tumor; proliferates then involutes"
                  category="Vascular Tumor"
                  features={[
                    "Lobular proliferation of capillaries",
                    "Plump endothelial cells (proliferative phase)",
                    "GLUT-1 positive (distinguishing feature)",
                    "Fibrofatty tissue (involuting phase)"
                  ]}
                  keyPoints={[
                    "Not present at birth; appears in first weeks",
                    "Rapid growth phase, then slow involution",
                    "Most resolve by age 7-10",
                    "Propranolol for problematic lesions"
                  ]}
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <LesionCard
                    title="Venous Malformation"
                    description="Congenital low-flow vascular malformation"
                    category="Vascular Malformation"
                    features={[
                      "Dilated, irregular venous channels",
                      "Thin walls with smooth muscle",
                      "Flat endothelium",
                      "GLUT-1 negative"
                    ]}
                    keyPoints={[
                      "Present at birth",
                      "Grows with child (does not involute)",
                      "Compressible, fills on Valsalva",
                      "May have phleboliths"
                    ]}
                  />
                  <LesionCard
                    title="Lymphatic Malformation"
                    description="Congenital lymphatic channel malformation"
                    category="Vascular Malformation"
                    features={[
                      "Dilated lymphatic channels",
                      "Thin walls lined by flat endothelium",
                      "Proteinaceous fluid content",
                      "D2-40 (podoplanin) positive"
                    ]}
                    keyPoints={[
                      "Cystic hygroma: large cystic spaces",
                      "Microcystic: vesicle-like surface",
                      "Tongue involvement common",
                      "May cause macroglossia"
                    ]}
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="tumors">
            <AccordionTrigger>Odontogenic Tumors of Childhood</AccordionTrigger>
            <AccordionContent>
              <div className="grid md:grid-cols-2 gap-4">
                <LesionCard
                  title="Ameloblastic Fibro-Odontoma"
                  description="Mixed odontogenic tumor with hard tissue"
                  category="Odontogenic Tumor"
                  features={[
                    "Ameloblastic fibroma component",
                    "Enamel matrix and dentin",
                    "May be developing odontoma"
                  ]}
                  keyPoints={[
                    "Mean age: 8-12 years",
                    "Posterior mandible/maxilla",
                    "Associated with unerupted tooth",
                    "Excellent prognosis"
                  ]}
                />
                <LesionCard
                  title="Adenomatoid Odontogenic Tumor"
                  description="'Two-thirds tumor' in young patients"
                  category="Odontogenic Tumor"
                  features={[
                    "Duct-like structures (rosettes)",
                    "Eosinophilic amorphous material",
                    "Calcifications",
                    "Thick fibrous capsule"
                  ]}
                  keyPoints={[
                    "2/3: <20 years, female, anterior, maxilla",
                    "Often around unerupted canine",
                    "Enucleation curative",
                    "Does not recur"
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
            title="Congenital Epulis vs. Granular Cell Tumor"
            description="Both show granular cells but congenital epulis is S100 negative while granular cell tumor is S100 positive. Congenital epulis occurs only in newborns and does not recur."
          />
          <PitfallAlert
            title="Infantile Hemangioma vs. Vascular Malformation"
            description="Key distinction: hemangiomas proliferate then involute and are GLUT-1 positive. Vascular malformations grow with the child, do not involute, and are GLUT-1 negative."
          />
        </div>

        {/* Quiz */}
        <QuickQuiz title="Module Quiz" questions={quizQuestions} />
      </div>
    </ModuleLayout>
  )
}

import { ModuleLayout } from '@/components/layout'
import { LesionCard, QuickQuiz, PitfallAlert, SyntheticDiagram, IHCPanel } from '@/components/content'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Layers } from 'lucide-react'

const quizQuestions = [
  {
    question: "Which odontogenic tumor shows peripheral palisading with reverse nuclear polarity and a stellate reticulum-like center?",
    options: ["Adenomatoid odontogenic tumor", "Ameloblastoma", "Calcifying epithelial odontogenic tumor", "Squamous odontogenic tumor"],
    correctIndex: 1,
    explanation: "Ameloblastoma characteristically shows peripheral columnar cells with reverse nuclear polarity and a central stellate reticulum-like area, resembling the enamel organ."
  },
  {
    question: "The 'Liesegang ring' pattern of calcification is characteristic of:",
    options: ["Ameloblastoma", "Odontoma", "Calcifying epithelial odontogenic tumor (Pindborg tumor)", "Cementoblastoma"],
    correctIndex: 2,
    explanation: "CEOT (Pindborg tumor) shows characteristic concentric laminated calcifications (Liesegang rings) within amyloid-like material."
  },
  {
    question: "Which benign tumor arises exclusively in the anterior jaws and is associated with unerupted teeth?",
    options: ["Ameloblastoma", "Adenomatoid odontogenic tumor", "Ameloblastic fibroma", "Odontogenic myxoma"],
    correctIndex: 1,
    explanation: "AOT occurs almost exclusively in the anterior jaws (maxilla > mandible) and is typically associated with an unerupted tooth, often the canine."
  }
]

export function OdontogenicTumors() {
  return (
    <ModuleLayout
      title="Odontogenic Tumors"
      description="Epithelial, mesenchymal, and mixed odontogenic neoplasms"
      icon={<Layers className="h-6 w-6 text-primary" />}
    >
      <div className="space-y-8">
        {/* Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Classification Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="info">Epithelial Origin</Badge>
              <Badge variant="success">Mesenchymal Origin</Badge>
              <Badge variant="warning">Mixed Origin</Badge>
            </div>
            <p className="text-muted-foreground">
              Odontogenic tumors arise from tooth-forming tissues. They are classified by
              their cellular origin: epithelial (odontogenic epithelium), mesenchymal
              (ectomesenchyme), or mixed (both components).
            </p>
          </CardContent>
        </Card>

        <SyntheticDiagram type="tumor" variant="ameloblastoma" label="Ameloblastoma Pattern" />

        {/* Epithelial Tumors */}
        <Accordion type="multiple" defaultValue={["epithelial"]}>
          <AccordionItem value="epithelial">
            <AccordionTrigger>
              <span className="flex items-center gap-2">
                Epithelial Odontogenic Tumors
                <Badge variant="info">Epithelial Origin</Badge>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <LesionCard
                  title="Ameloblastoma"
                  description="Most common clinically significant odontogenic tumor"
                  category="Epithelial"
                  features={[
                    "Peripheral columnar cells with reverse polarity",
                    "Hyperchromatic nuclei polarized away from BM",
                    "Central stellate reticulum-like cells",
                    "Follicular or plexiform patterns",
                    "Fibrous stroma"
                  ]}
                  keyPoints={[
                    "Posterior mandible most common",
                    "Locally aggressive, high recurrence",
                    "Variants: conventional, unicystic, peripheral",
                    "BRAF V600E mutation in many cases"
                  ]}
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <LesionCard
                    title="Adenomatoid Odontogenic Tumor (AOT)"
                    description="'Two-thirds tumor' - benign with excellent prognosis"
                    category="Epithelial"
                    features={[
                      "Duct-like or rosette structures",
                      "Cuboidal/columnar epithelium",
                      "Eosinophilic amorphous material",
                      "Calcifications (droplet-like)",
                      "Thick fibrous capsule"
                    ]}
                    keyPoints={[
                      "2/3: females, anterior, <20 years, maxilla",
                      "Associated with unerupted canine",
                      "Does not recur after enucleation"
                    ]}
                  />
                  <LesionCard
                    title="Calcifying Epithelial Odontogenic Tumor (CEOT)"
                    description="Pindborg tumor; unique histologic features"
                    category="Epithelial"
                    features={[
                      "Sheets/islands of polyhedral epithelial cells",
                      "Prominent intercellular bridges",
                      "Nuclear pleomorphism (benign!)",
                      "Amyloid-like material (Congo red +)",
                      "Liesegang ring calcifications"
                    ]}
                    keyPoints={[
                      "Mandible > maxilla",
                      "Associated with unerupted tooth (50%)",
                      "Clear cell variant exists"
                    ]}
                  />
                </div>
                <LesionCard
                  title="Squamous Odontogenic Tumor"
                  description="Rare tumor with bland squamous islands"
                  category="Epithelial"
                  features={[
                    "Islands of well-differentiated squamous epithelium",
                    "No peripheral palisading",
                    "No atypia or keratinization",
                    "Fibrous stroma"
                  ]}
                  keyPoints={[
                    "Benign, conservative treatment",
                    "May be mistaken for squamous carcinoma",
                    "Triangular/alveolar crest location"
                  ]}
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="mesenchymal">
            <AccordionTrigger>
              <span className="flex items-center gap-2">
                Mesenchymal Odontogenic Tumors
                <Badge variant="success">Mesenchymal Origin</Badge>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid md:grid-cols-2 gap-4">
                <LesionCard
                  title="Odontogenic Myxoma"
                  description="Benign but locally aggressive tumor"
                  category="Mesenchymal"
                  features={[
                    "Abundant myxoid/mucoid matrix",
                    "Scattered stellate/spindle cells",
                    "Sparse collagen fibers",
                    "May contain odontogenic epithelial rests"
                  ]}
                  keyPoints={[
                    "Second most common odontogenic tumor",
                    "'Soap bubble' radiographic appearance",
                    "High recurrence rate",
                    "Mandible > maxilla"
                  ]}
                />
                <LesionCard
                  title="Cementoblastoma"
                  description="True neoplasm of cementoblasts; attached to tooth root"
                  category="Mesenchymal"
                  features={[
                    "Mass of cementum-like material",
                    "Attached to tooth root (fused)",
                    "Peripheral unmineralized matrix",
                    "Active cementoblasts at periphery",
                    "Reversal lines present"
                  ]}
                  keyPoints={[
                    "Mandibular molars/premolars",
                    "Root resorption and fusion",
                    "Extract tooth with tumor"
                  ]}
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="mixed">
            <AccordionTrigger>
              <span className="flex items-center gap-2">
                Mixed Odontogenic Tumors
                <Badge variant="warning">Mixed Origin</Badge>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <LesionCard
                  title="Ameloblastic Fibroma"
                  description="True mixed tumor; both components neoplastic"
                  category="Mixed"
                  features={[
                    "Ameloblastoma-like epithelium (strands/islands)",
                    "Primitive ectomesenchyme (dental papilla-like)",
                    "Myxoid stroma with stellate cells",
                    "No hard tissue formation"
                  ]}
                  keyPoints={[
                    "Young patients (<20 years)",
                    "Posterior mandible",
                    "Benign; may recur",
                    "Risk of malignant transformation"
                  ]}
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <LesionCard
                    title="Ameloblastic Fibro-Odontoma"
                    description="Contains ameloblastic fibroma features plus enamel and dentin"
                    category="Mixed"
                    features={[
                      "Ameloblastic fibroma component",
                      "Enamel and dentin formation",
                      "May represent developing odontoma"
                    ]}
                    keyPoints={[
                      "Children and young adults",
                      "May mature to odontoma",
                      "Excellent prognosis"
                    ]}
                  />
                  <LesionCard
                    title="Odontoma"
                    description="Most common odontogenic tumor; hamartoma vs. neoplasm debated"
                    category="Mixed"
                    features={[
                      "Enamel, dentin, cementum, pulp tissue",
                      "Compound: tooth-like structures (denticles)",
                      "Complex: disorganized mass of hard tissues",
                      "Ghost cells may be present"
                    ]}
                    keyPoints={[
                      "Often incidental finding",
                      "May prevent tooth eruption",
                      "Simple excision curative"
                    ]}
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* IHC Panel */}
        <IHCPanel
          title="Ameloblastoma"
          markers={[
            { name: "CK5/6", result: "positive" },
            { name: "CK14", result: "positive" },
            { name: "CK19", result: "positive" },
            { name: "p63", result: "positive" },
            { name: "BRAF V600E", result: "variable", note: "60-80% of cases" }
          ]}
          interpretation="Cytokeratin positivity confirms epithelial nature. BRAF V600E mutation is common and may be therapeutic target."
        />

        {/* Pitfalls */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Pitfalls & Key Distinctions</h3>
          <PitfallAlert
            title="Ameloblastoma vs. Ameloblastic Carcinoma"
            description="Ameloblastic carcinoma shows cytologic atypia, mitoses, and aggressive features. Ameloblastoma is benign despite 'aggressive' growth. Always assess cytology carefully."
          />
          <PitfallAlert
            title="CEOT Pleomorphism"
            description="Nuclear pleomorphism in CEOT can be striking and may raise concern for malignancy. However, this is a benign tumor with excellent prognosis if completely excised."
          />
        </div>

        {/* Quiz */}
        <QuickQuiz title="Module Quiz" questions={quizQuestions} />
      </div>
    </ModuleLayout>
  )
}

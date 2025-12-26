import { ModuleLayout } from '@/components/layout'
import { LesionCard, QuickQuiz, PitfallAlert, IHCPanel } from '@/components/content'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Activity } from 'lucide-react'

const quizQuestions = [
  {
    question: "Granular cell tumor characteristically shows which overlying epithelial change?",
    options: ["Atrophy", "Ulceration", "Pseudoepitheliomatous hyperplasia", "Dysplasia"],
    correctIndex: 2,
    explanation: "Granular cell tumor often induces pseudoepitheliomatous hyperplasia (PEH) of the overlying epithelium, which can mimic squamous cell carcinoma."
  },
  {
    question: "Which oral soft tissue tumor shows 'Verocay bodies'?",
    options: ["Neurofibroma", "Schwannoma", "Granular cell tumor", "Traumatic neuroma"],
    correctIndex: 1,
    explanation: "Schwannoma classically shows Verocay bodies (nuclear palisading in Antoni A areas) and alternating Antoni A (cellular) and Antoni B (myxoid) patterns."
  },
  {
    question: "The tongue is the most common intraoral site for which tumor?",
    options: ["Lipoma", "Granular cell tumor", "Schwannoma", "Myofibroma"],
    correctIndex: 1,
    explanation: "The tongue is the most common intraoral site for granular cell tumor, accounting for about 65% of cases."
  }
]

export function SoftTissue() {
  return (
    <ModuleLayout
      title="Oral Soft Tissue & Mesenchymal Lesions"
      description="Adipose, neural, fibrous, and other mesenchymal tumors of the oral cavity"
      icon={<Activity className="h-6 w-6 text-primary" />}
    >
      <div className="space-y-8">
        {/* Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Soft tissue tumors of the oral cavity are relatively uncommon. Most are benign
              and arise from adipose tissue, neural elements, or fibrous connective tissue.
              Recognition of their histologic patterns is important for accurate diagnosis.
            </p>
          </CardContent>
        </Card>

        <Accordion type="multiple" defaultValue={["neural"]}>
          <AccordionItem value="adipose">
            <AccordionTrigger>Adipose Tumors</AccordionTrigger>
            <AccordionContent>
              <LesionCard
                title="Lipoma"
                description="Benign tumor of mature adipocytes"
                category="Benign"
                features={[
                  "Mature adipocytes with thin fibrous capsule",
                  "Cells identical to normal fat",
                  "No lipoblasts",
                  "Variants: fibrolipoma, spindle cell lipoma"
                ]}
                keyPoints={[
                  "Buccal mucosa most common oral site",
                  "Simple excision curative",
                  "Rarely recurs",
                  "Yellow, soft, doughy mass"
                ]}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="neural">
            <AccordionTrigger>Neural Tumors</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <LesionCard
                  title="Schwannoma (Neurilemmoma)"
                  description="Benign nerve sheath tumor from Schwann cells"
                  category="Benign"
                  features={[
                    "Antoni A areas: cellular, palisaded",
                    "Antoni B areas: myxoid, hypocellular",
                    "Verocay bodies: nuclear palisading",
                    "Encapsulated",
                    "S100 strongly positive"
                  ]}
                  keyPoints={[
                    "Tongue most common oral site",
                    "Encapsulation distinguishes from neurofibroma",
                    "Complete excision curative"
                  ]}
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <LesionCard
                    title="Neurofibroma"
                    description="Benign nerve sheath tumor with mixed elements"
                    category="Benign"
                    features={[
                      "Spindled cells in myxoid stroma",
                      "Wavy/buckled nuclei",
                      "Mast cells often present",
                      "Not encapsulated",
                      "Mixed Schwann cells, fibroblasts, perineurial cells"
                    ]}
                    keyPoints={[
                      "Multiple lesions suggest NF1",
                      "Plexiform type pathognomonic for NF1",
                      "Low malignant transformation risk (sporadic)"
                    ]}
                  />
                  <LesionCard
                    title="Traumatic Neuroma"
                    description="Reactive proliferation following nerve injury"
                    category="Reactive"
                    features={[
                      "Disorganized nerve fascicles",
                      "Dense fibrous scar tissue",
                      "May show perineurial fibrosis",
                      "Pain common (not a feature of true neoplasms)"
                    ]}
                    keyPoints={[
                      "History of trauma or surgery",
                      "Mental nerve area common",
                      "Pain may require re-excision"
                    ]}
                  />
                </div>
                <LesionCard
                  title="Granular Cell Tumor"
                  description="S100+ tumor with distinctive granular cytoplasm"
                  category="Benign"
                  features={[
                    "Large cells with abundant granular eosinophilic cytoplasm",
                    "Granules are lysosomes (PAS+, diastase-resistant)",
                    "Small, central nuclei",
                    "Infiltrative borders",
                    "Pseudoepitheliomatous hyperplasia of overlying epithelium"
                  ]}
                  keyPoints={[
                    "Tongue is most common site",
                    "S100 positive (neural origin)",
                    "Malignant variant exists (rare)",
                    "Must distinguish PEH from SCC"
                  ]}
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="fibrous">
            <AccordionTrigger>Fibrous & Fibrohistiocytic Lesions</AccordionTrigger>
            <AccordionContent>
              <div className="grid md:grid-cols-2 gap-4">
                <LesionCard
                  title="Fibrous Histiocytoma"
                  description="Benign fibrohistiocytic tumor"
                  category="Benign"
                  features={[
                    "Storiform pattern of spindle cells",
                    "Admixed histiocytes",
                    "Giant cells may be present",
                    "Variable collagen deposition"
                  ]}
                  keyPoints={[
                    "Rare in oral cavity",
                    "Buccal mucosa most common",
                    "Simple excision usually curative"
                  ]}
                />
                <LesionCard
                  title="Myofibroma"
                  description="Benign myofibroblastic tumor"
                  category="Benign"
                  features={[
                    "Biphasic pattern",
                    "Peripheral myoid nodules",
                    "Central hemangiopericytoma-like areas",
                    "Spindle cells with eosinophilic cytoplasm"
                  ]}
                  keyPoints={[
                    "Most common fibrous tumor in children",
                    "Oral lesions: tongue, mandible",
                    "Infantile myofibromatosis: multiple lesions",
                    "Excellent prognosis"
                  ]}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* IHC Panel */}
        <IHCPanel
          title="Neural Tumors"
          markers={[
            { name: "S100", result: "positive" },
            { name: "SOX10", result: "positive" },
            { name: "CD34", result: "variable", note: "often in neurofibroma" },
            { name: "EMA", result: "variable", note: "perineurial cells" },
            { name: "Neurofilament", result: "positive", note: "axons in neurofibroma" }
          ]}
          interpretation="S100 confirms Schwann cell differentiation. Neurofilament highlights entrapped axons, helping distinguish neurofibroma from schwannoma."
        />

        {/* Pitfalls */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Pitfalls & Key Distinctions</h3>
          <PitfallAlert
            title="Granular Cell Tumor with PEH vs. SCC"
            description="Pseudoepitheliomatous hyperplasia overlying granular cell tumor can closely mimic well-differentiated SCC. Always examine the underlying lesion! The granular cells are the key diagnostic feature."
          />
          <PitfallAlert
            title="Schwannoma vs. Neurofibroma"
            description="Key distinction: schwannoma is encapsulated and composed purely of Schwann cells. Neurofibroma is unencapsulated with mixed cell types. This distinction matters for NF1 diagnosis."
          />
        </div>

        {/* Quiz */}
        <QuickQuiz title="Module Quiz" questions={quizQuestions} />
      </div>
    </ModuleLayout>
  )
}

import { ModuleLayout } from '@/components/layout'
import { LesionCard, QuickQuiz, PitfallAlert, IHCPanel } from '@/components/content'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Bone } from 'lucide-react'

const quizQuestions = [
  {
    question: "Which fibro-osseous lesion is characterized by 'Chinese letter' or curvilinear trabeculae?",
    options: ["Ossifying fibroma", "Fibrous dysplasia", "Cemento-osseous dysplasia", "Osteoma"],
    correctIndex: 1,
    explanation: "Fibrous dysplasia shows irregularly shaped woven bone trabeculae with a 'Chinese letter' appearance, blending into surrounding bone without a capsule."
  },
  {
    question: "Giant cell lesion of the jaw with 'coffee bean' nuclear grooves suggests:",
    options: ["Central giant cell granuloma", "Aneurysmal bone cyst", "Langerhans cell histiocytosis", "Cherubism"],
    correctIndex: 2,
    explanation: "Langerhans cell histiocytosis is characterized by Langerhans cells with grooved 'coffee bean' nuclei, which are positive for CD1a and Langerin."
  },
  {
    question: "Which lesion is characterized by a mixture of fibrous tissue and both woven and lamellar bone, with a well-defined border?",
    options: ["Fibrous dysplasia", "Ossifying fibroma", "Central giant cell granuloma", "Osteomyelitis"],
    correctIndex: 1,
    explanation: "Ossifying fibroma is a well-circumscribed fibro-osseous lesion with a mixture of woven and lamellar bone (or cementum-like material) in a fibrous stroma."
  }
]

export function JawLesions() {
  return (
    <ModuleLayout
      title="Jaw Lesions"
      description="Fibro-osseous lesions, giant cell lesions, and other jaw pathology"
      icon={<Bone className="h-6 w-6 text-primary" />}
    >
      <div className="space-y-8">
        {/* Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Jaw lesions encompass a variety of conditions including fibro-osseous lesions,
              giant cell-containing lesions, histiocytic proliferations, and inflammatory
              conditions. Pattern recognition and clinical-radiologic correlation are key.
            </p>
          </CardContent>
        </Card>

        <Accordion type="multiple" defaultValue={["fibro-osseous"]}>
          <AccordionItem value="fibro-osseous">
            <AccordionTrigger>Fibro-Osseous Lesions</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <p className="text-sm text-muted-foreground">
                      Fibro-osseous lesions (FOL) share a common histologic pattern: replacement
                      of normal bone by fibrous tissue containing variable amounts of mineralized
                      material. Clinical and radiographic correlation is essential for classification.
                    </p>
                  </CardContent>
                </Card>
                <LesionCard
                  title="Fibrous Dysplasia"
                  description="Developmental disorder with GNAS mutation"
                  category="Developmental"
                  features={[
                    "'Chinese letter' woven bone trabeculae",
                    "Irregularly shaped curvilinear trabeculae",
                    "Fibrous stroma with bland fibroblasts",
                    "Bone blends into surrounding normal bone",
                    "No osteoblastic rimming"
                  ]}
                  keyPoints={[
                    "Monostotic vs. polyostotic",
                    "McCune-Albright syndrome: polyostotic + café-au-lait + endocrine",
                    "'Ground glass' radiographic appearance",
                    "Self-limiting at skeletal maturity"
                  ]}
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <LesionCard
                    title="Ossifying Fibroma"
                    description="True neoplasm; well-circumscribed"
                    category="Neoplastic"
                    features={[
                      "Well-demarcated/encapsulated",
                      "Mixture of woven and lamellar bone",
                      "Cementum-like material may be present",
                      "Osteoblastic rimming of trabeculae",
                      "Cellular fibrous stroma"
                    ]}
                    keyPoints={[
                      "Mandible > maxilla",
                      "Shells out easily at surgery",
                      "Juvenile variants more aggressive",
                      "Must distinguish from fibrous dysplasia"
                    ]}
                  />
                  <LesionCard
                    title="Cemento-Osseous Dysplasia"
                    description="Reactive condition; anterior mandible common"
                    category="Reactive/Dysplastic"
                    features={[
                      "Cementum-like and bone-like material",
                      "Fibrous stroma",
                      "Confined to tooth-bearing areas",
                      "Stages: osteolytic → mixed → mature"
                    ]}
                    keyPoints={[
                      "Periapical: anterior mandible",
                      "Focal: posterior mandible",
                      "Florid: multiple quadrants",
                      "Associated teeth are vital!"
                    ]}
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="giant-cell">
            <AccordionTrigger>Giant Cell Lesions</AccordionTrigger>
            <AccordionContent>
              <div className="grid md:grid-cols-2 gap-4">
                <LesionCard
                  title="Central Giant Cell Granuloma"
                  description="Most common giant cell lesion of jaw"
                  category="Reactive"
                  features={[
                    "Multinucleated osteoclast-like giant cells",
                    "Fibrovascular stroma",
                    "Hemorrhage and hemosiderin",
                    "New bone formation at periphery",
                    "May have aggressive features"
                  ]}
                  keyPoints={[
                    "Anterior mandible most common",
                    "Younger patients",
                    "Rule out hyperparathyroidism (brown tumor)",
                    "May recur locally"
                  ]}
                />
                <LesionCard
                  title="Aneurysmal Bone Cyst"
                  description="Blood-filled cystic lesion"
                  category="Reactive"
                  features={[
                    "Blood-filled spaces",
                    "Fibrous septa with giant cells",
                    "No endothelial lining",
                    "May be primary or secondary"
                  ]}
                  keyPoints={[
                    "May occur with other lesions (secondary)",
                    "'Blown out' radiographic appearance",
                    "Can be aggressive locally",
                    "Curettage treatment of choice"
                  ]}
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="histiocytic">
            <AccordionTrigger>Histiocytic Lesions</AccordionTrigger>
            <AccordionContent>
              <LesionCard
                title="Langerhans Cell Histiocytosis"
                description="Clonal proliferation of Langerhans cells; BRAF V600E common"
                category="Neoplastic"
                features={[
                  "Langerhans cells with grooved 'coffee bean' nuclei",
                  "Abundant pale cytoplasm",
                  "Mixed inflammatory infiltrate (eosinophils!)",
                  "May have giant cells",
                  "CD1a, Langerin (CD207), S100 positive"
                ]}
                keyPoints={[
                  "'Floating teeth' radiographic appearance",
                  "Unifocal vs. multifocal vs. systemic",
                  "Jaw involvement common in children",
                  "Eosinophilic granuloma (unifocal bone)"
                ]}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="inflammatory">
            <AccordionTrigger>Osteomyelitis</AccordionTrigger>
            <AccordionContent>
              <div className="grid md:grid-cols-2 gap-4">
                <LesionCard
                  title="Acute Osteomyelitis"
                  description="Bacterial infection of bone"
                  category="Inflammatory"
                  features={[
                    "Neutrophilic infiltrate",
                    "Necrotic bone (sequestrum)",
                    "Bacterial colonies may be seen",
                    "Minimal bone repair"
                  ]}
                  keyPoints={[
                    "Often from dental infection",
                    "Pain, swelling, fever",
                    "Requires antibiotics ± surgical drainage",
                    "Risk factors: immunocompromise, diabetes"
                  ]}
                />
                <LesionCard
                  title="Chronic Osteomyelitis"
                  description="Long-standing bone infection with repair"
                  category="Inflammatory"
                  features={[
                    "Chronic inflammatory infiltrate",
                    "Reactive new bone (involucrum)",
                    "Sequestra (dead bone)",
                    "Fibrosis and scarring"
                  ]}
                  keyPoints={[
                    "May follow inadequately treated acute",
                    "Sclerotic radiographic appearance",
                    "Difficult to eradicate",
                    "Consider actinomycosis"
                  ]}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* IHC Panel */}
        <IHCPanel
          title="Langerhans Cell Histiocytosis"
          markers={[
            { name: "CD1a", result: "positive" },
            { name: "Langerin (CD207)", result: "positive" },
            { name: "S100", result: "positive" },
            { name: "BRAF V600E", result: "positive", note: "50-60% of cases" },
            { name: "CD68", result: "positive" }
          ]}
          interpretation="CD1a and Langerin are highly specific for Langerhans cells. BRAF V600E mutation is common and may be therapeutic target."
        />

        {/* Pitfalls */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Pitfalls & Key Distinctions</h3>
          <PitfallAlert
            title="Fibrous Dysplasia vs. Ossifying Fibroma"
            description="Both are fibro-osseous lesions. Key differences: FD blends into normal bone (no capsule), has irregular 'Chinese letter' trabeculae without osteoblastic rimming. OF is well-demarcated, has osteoblastic rimming."
          />
          <PitfallAlert
            title="Central Giant Cell Granuloma vs. Brown Tumor"
            description="Histologically identical. Always check serum calcium and PTH. Brown tumor of hyperparathyroidism resolves after treating the underlying hyperparathyroidism."
          />
        </div>

        {/* Quiz */}
        <QuickQuiz title="Module Quiz" questions={quizQuestions} />
      </div>
    </ModuleLayout>
  )
}

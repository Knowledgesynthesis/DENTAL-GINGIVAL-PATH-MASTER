import { ModuleLayout } from '@/components/layout'
import { LesionCard, DiagramCard, QuickQuiz, SyntheticDiagram } from '@/components/content'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Microscope } from 'lucide-react'

const quizQuestions = [
  {
    question: "Which layer of the oral epithelium contains cells that actively divide?",
    options: ["Stratum corneum", "Stratum granulosum", "Stratum basale", "Stratum spinosum"],
    correctIndex: 2,
    explanation: "The stratum basale (basal layer) contains the actively dividing stem cells that replenish the epithelium."
  },
  {
    question: "What type of epithelium lines the attached gingiva?",
    options: ["Non-keratinized stratified squamous", "Keratinized stratified squamous", "Simple columnar", "Pseudostratified columnar"],
    correctIndex: 1,
    explanation: "The attached gingiva is covered by keratinized stratified squamous epithelium, which provides protection during mastication."
  },
  {
    question: "Which structure connects the tooth to the alveolar bone?",
    options: ["Gingival fibers", "Periodontal ligament", "Cementum", "Pulp"],
    correctIndex: 1,
    explanation: "The periodontal ligament (PDL) is a specialized connective tissue that anchors the tooth root to the alveolar bone."
  }
]

export function NormalAnatomy() {
  return (
    <ModuleLayout
      title="Normal Oral & Dental Anatomy"
      description="Foundational histology of the oral cavity, teeth, and supporting structures"
      icon={<Microscope className="h-6 w-6 text-primary" />}
    >
      <div className="space-y-8">
        {/* Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none">
            <p className="text-muted-foreground">
              Understanding normal oral anatomy is essential for recognizing pathological changes.
              This module covers the histology of oral mucosa, tooth structure, periodontium,
              and minor salivary glands.
            </p>
          </CardContent>
        </Card>

        {/* Tooth Diagram */}
        <div className="grid md:grid-cols-2 gap-6">
          <SyntheticDiagram type="tooth" label="Tooth Structure" />
          <Card>
            <CardHeader>
              <CardTitle>Tooth Components</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li><strong className="text-blue-400">Enamel:</strong> Hardest tissue in the body; 96% mineralized. Produced by ameloblasts. Acellular once formed.</li>
                <li><strong className="text-yellow-400">Dentin:</strong> Makes up bulk of tooth. Contains dentinal tubules. Produced by odontoblasts throughout life.</li>
                <li><strong className="text-red-400">Pulp:</strong> Central soft tissue containing nerves, blood vessels, and odontoblasts.</li>
                <li><strong className="text-gray-400">Cementum:</strong> Covers root surface. Attachment point for periodontal ligament fibers.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Oral Epithelium */}
        <Accordion type="multiple" defaultValue={["epithelium"]}>
          <AccordionItem value="epithelium">
            <AccordionTrigger>Oral Epithelium</AccordionTrigger>
            <AccordionContent>
              <div className="grid md:grid-cols-2 gap-4">
                <LesionCard
                  title="Keratinized Mucosa"
                  description="Found on attached gingiva and hard palate"
                  features={[
                    "Stratum corneum (keratin layer)",
                    "Stratum granulosum (keratohyalin granules)",
                    "Stratum spinosum (prickle cell layer)",
                    "Stratum basale (basal/germinal layer)"
                  ]}
                  keyPoints={[
                    "Provides mechanical protection",
                    "May be orthokeratinized or parakeratinized"
                  ]}
                />
                <LesionCard
                  title="Non-keratinized Mucosa"
                  description="Found on buccal mucosa, floor of mouth, soft palate"
                  features={[
                    "Lacks stratum corneum",
                    "Surface cells retain nuclei",
                    "More flexible and elastic",
                    "Thinner than keratinized mucosa"
                  ]}
                  keyPoints={[
                    "More permeable to substances",
                    "Common site for ulceration"
                  ]}
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="gingiva">
            <AccordionTrigger>Gingival Anatomy</AccordionTrigger>
            <AccordionContent>
              <DiagramCard
                title="Gingival Components"
                elements={[
                  { label: "Free gingiva", color: "#f472b6", description: "Marginal gingiva surrounding tooth" },
                  { label: "Attached gingiva", color: "#22c55e", description: "Firmly bound to periosteum" },
                  { label: "Interdental papilla", color: "#60a5fa", description: "Fills interproximal space" },
                  { label: "Mucogingival junction", color: "#fbbf24", description: "Boundary with alveolar mucosa" }
                ]}
              />
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <LesionCard
                  title="Junctional Epithelium"
                  description="Attaches gingiva to tooth surface"
                  features={[
                    "Non-keratinized stratified epithelium",
                    "Attaches via hemidesmosomes",
                    "High turnover rate",
                    "Wider intercellular spaces"
                  ]}
                />
                <LesionCard
                  title="Sulcular Epithelium"
                  description="Lines the gingival sulcus"
                  features={[
                    "Non-keratinized",
                    "Continuous with junctional epithelium",
                    "No rete pegs",
                    "Permeable to bacterial products"
                  ]}
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="periodontium">
            <AccordionTrigger>Periodontium</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <LesionCard
                  title="Periodontal Ligament (PDL)"
                  description="Connective tissue between cementum and alveolar bone"
                  features={[
                    "Principal fibers (Sharpey's fibers)",
                    "Fibroblasts, cementoblasts, osteoblasts",
                    "Blood vessels and nerves",
                    "Epithelial rests of Malassez"
                  ]}
                  keyPoints={[
                    "Width: 0.15-0.38mm",
                    "Rests of Malassez may give rise to cysts"
                  ]}
                />
                <LesionCard
                  title="Alveolar Bone"
                  description="Supporting bone of the tooth socket"
                  features={[
                    "Alveolar bone proper (cribriform plate)",
                    "Contains Volkmann's canals",
                    "Bundle bone with Sharpey's fibers",
                    "Supporting trabecular bone"
                  ]}
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="salivary">
            <AccordionTrigger>Minor Salivary Glands</AccordionTrigger>
            <AccordionContent>
              <LesionCard
                title="Minor Salivary Gland Histology"
                description="Small glands distributed throughout oral mucosa"
                features={[
                  "Mucous acini predominate (except von Ebner's)",
                  "Short duct system",
                  "Myoepithelial cells present",
                  "Located in submucosa"
                ]}
                keyPoints={[
                  "Most common in labial mucosa, palate, buccal mucosa",
                  "Von Ebner's glands (tongue) are serous",
                  "Common site for mucoceles and tumors"
                ]}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Quiz Section */}
        <QuickQuiz title="Module Quiz" questions={quizQuestions} />
      </div>
    </ModuleLayout>
  )
}

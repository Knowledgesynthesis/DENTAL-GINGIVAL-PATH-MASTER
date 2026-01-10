import { ModuleLayout } from '@/components/layout'
import { IHCPanel, QuickQuiz } from '@/components/content'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FlaskConical } from 'lucide-react'

const quizQuestions = [
  {
    question: "Which marker is most specific for squamous differentiation?",
    options: ["CK7", "CK20", "p40", "CK19"],
    correctIndex: 2,
    explanation: "p40 (deltaNp63) is highly specific for squamous differentiation and is useful in distinguishing squamous cell carcinoma from adenocarcinoma."
  },
  {
    question: "MAML2 translocation is associated with which salivary tumor?",
    options: ["Adenoid cystic carcinoma", "Mucoepidermoid carcinoma", "Pleomorphic adenoma", "Acinic cell carcinoma"],
    correctIndex: 1,
    explanation: "MAML2 rearrangement is found in the majority of mucoepidermoid carcinomas and is associated with favorable prognosis."
  },
  {
    question: "Which molecular alteration is common in ameloblastoma?",
    options: ["MAML2 translocation", "BRAF V600E mutation", "EWSR1 fusion", "KRAS mutation"],
    correctIndex: 1,
    explanation: "BRAF V600E mutation is found in 60-80% of ameloblastomas and may represent a potential therapeutic target."
  }
]

export function IHCMolecular() {
  return (
    <ModuleLayout
      title="IHC & Molecular Framework"
      description="Conceptual overview of immunohistochemistry and molecular markers"
      icon={<FlaskConical className="h-6 w-6 text-primary" />}
    >
      <div className="space-y-8">
        {/* Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              This module provides a conceptual framework for understanding immunohistochemical
              and molecular markers used in oral and head & neck pathology. These concepts
              aid in diagnostic reasoning but are not intended for actual diagnostic use.
            </p>
            <Badge variant="warning">Conceptual Only — Not for Diagnostic Use</Badge>
          </CardContent>
        </Card>

        <Accordion type="multiple" defaultValue={["cytokeratins"]}>
          <AccordionItem value="cytokeratins">
            <AccordionTrigger>Cytokeratin Markers</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Cytokeratin Expression Patterns</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <strong className="text-blue-400">CK5/6:</strong> Squamous epithelium, myoepithelial cells
                      </li>
                      <li>
                        <strong className="text-green-400">CK7:</strong> Glandular epithelium, ductal cells
                      </li>
                      <li>
                        <strong className="text-yellow-400">CK14:</strong> Basal cells, myoepithelial cells
                      </li>
                      <li>
                        <strong className="text-purple-400">CK19:</strong> Odontogenic epithelium, ductal epithelium
                      </li>
                      <li>
                        <strong className="text-orange-400">CK20:</strong> Merkel cells (usually negative in oral SCC)
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <IHCPanel
                  title="Odontogenic Epithelium"
                  markers={[
                    { name: "CK5/6", result: "positive" },
                    { name: "CK14", result: "positive" },
                    { name: "CK19", result: "positive" },
                    { name: "CK7", result: "negative" },
                    { name: "CK20", result: "negative" }
                  ]}
                  interpretation="Odontogenic epithelium shows a specific CK profile useful for identifying odontogenic origin."
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="squamous">
            <AccordionTrigger>Squamous Cell Markers</AccordionTrigger>
            <AccordionContent>
              <IHCPanel
                title="Squamous Cell Carcinoma"
                markers={[
                  { name: "p63", result: "positive", note: "nuclear" },
                  { name: "p40", result: "positive", note: "highly specific" },
                  { name: "CK5/6", result: "positive" },
                  { name: "p16", result: "variable", note: "HPV-related positive" },
                  { name: "CK7", result: "negative" }
                ]}
                interpretation="p40 is the most specific marker for squamous differentiation. p16 overexpression suggests HPV-related origin."
              />
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle className="text-lg">HPV-Related vs. Non-HPV SCC</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-green-400 mb-2">HPV-Related (p16+)</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Oropharynx (tonsil, base of tongue)</li>
                        <li>• Non-keratinizing morphology</li>
                        <li>• Better prognosis</li>
                        <li>• Younger patients, less smoking history</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-400 mb-2">Non-HPV (p16-)</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Oral cavity, larynx</li>
                        <li>• Keratinizing morphology</li>
                        <li>• Worse prognosis</li>
                        <li>• Tobacco/alcohol associated</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="melanocytic">
            <AccordionTrigger>Melanocytic Markers</AccordionTrigger>
            <AccordionContent>
              <IHCPanel
                title="Melanocytic Lesions"
                markers={[
                  { name: "S100", result: "positive", note: "sensitive, less specific" },
                  { name: "SOX10", result: "positive", note: "specific for melanocytes" },
                  { name: "Melan-A/MART-1", result: "positive" },
                  { name: "HMB-45", result: "positive", note: "junctional/invasive component" },
                  { name: "Ki-67", result: "variable", note: "high in melanoma" }
                ]}
                interpretation="SOX10 and S100 are most sensitive. HMB-45 highlights the junctional component. Ki-67 helps assess proliferation."
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="salivary">
            <AccordionTrigger>Salivary Gland Markers</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <IHCPanel
                  title="Myoepithelial Cells"
                  markers={[
                    { name: "p63", result: "positive" },
                    { name: "S100", result: "positive" },
                    { name: "SMA", result: "positive" },
                    { name: "Calponin", result: "positive" },
                    { name: "CK14", result: "positive" }
                  ]}
                  interpretation="Myoepithelial cells express both muscle (SMA) and epithelial (CK) markers plus S100."
                />
                <IHCPanel
                  title="Acinic Cell Carcinoma"
                  markers={[
                    { name: "DOG1", result: "positive", note: "highly sensitive" },
                    { name: "SOX10", result: "positive" },
                    { name: "S100", result: "positive" },
                    { name: "PAS", result: "positive", note: "cytoplasmic granules" }
                  ]}
                  interpretation="DOG1 is particularly useful for acinic cell carcinoma diagnosis."
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="molecular">
            <AccordionTrigger>Molecular Alterations</AccordionTrigger>
            <AccordionContent>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Key Molecular Findings in Oral/Head & Neck Pathology</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 rounded-lg bg-muted">
                      <h4 className="font-semibold text-purple-400">MAML2 Translocation</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Found in mucoepidermoid carcinoma. t(11;19) CRTC1-MAML2 most common.
                        Associated with favorable prognosis. May help distinguish from SCC.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted">
                      <h4 className="font-semibold text-blue-400">BRAF V600E Mutation</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Found in 60-80% of ameloblastomas. Potential therapeutic target.
                        Also seen in Langerhans cell histiocytosis, papillary thyroid carcinoma.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted">
                      <h4 className="font-semibold text-green-400">MYB-NFIB Fusion</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Found in adenoid cystic carcinoma. t(6;9).
                        Useful for diagnosis in difficult cases.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted">
                      <h4 className="font-semibold text-yellow-400">PTCH1 Mutation</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Gorlin syndrome (nevoid basal cell carcinoma syndrome).
                        Multiple odontogenic keratocysts, basal cell carcinomas.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted">
                      <h4 className="font-semibold text-orange-400">Beta-catenin (CTNNB1)</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Nuclear accumulation in craniopharyngioma (adamantinomatous type).
                        May also be seen in some ameloblastomas.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Quiz */}
        <QuickQuiz title="Module Quiz" questions={quizQuestions} />
      </div>
    </ModuleLayout>
  )
}

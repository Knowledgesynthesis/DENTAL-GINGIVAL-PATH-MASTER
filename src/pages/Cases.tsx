import { useState } from 'react'
import { ModuleLayout } from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { IHCPanel, SyntheticDiagram, PitfallAlert } from '@/components/content'
import { BookOpen, ChevronRight, RotateCcw } from 'lucide-react'

interface Case {
  id: string
  title: string
  clinicalHistory: string
  histologicFindings: string[]
  ihcFindings?: { name: string; result: 'positive' | 'negative' | 'variable'; note?: string }[]
  diagramType?: 'cyst' | 'tumor' | 'epithelium' | 'gland' | 'tooth'
  diagramVariant?: string
  differentialDiagnosis: string[]
  finalDiagnosis: string
  keyPoints: string[]
  category: string
}

const cases: Case[] = [
  {
    id: "case1",
    title: "Case 1: Mandibular Radiolucency",
    category: "Odontogenic Cyst",
    clinicalHistory: "45-year-old male with incidental finding of a well-defined unilocular radiolucency in the posterior mandible. The lesion is associated with an impacted third molar, attached at the cementoenamel junction.",
    histologicFindings: [
      "Thin epithelial lining (2-4 cell layers)",
      "Non-keratinized stratified squamous epithelium",
      "Fibrous connective tissue wall",
      "Minimal inflammation",
      "Reduced enamel epithelium-like features"
    ],
    diagramType: "cyst",
    diagramVariant: "dentigerous",
    differentialDiagnosis: [
      "Dentigerous cyst",
      "Unicystic ameloblastoma",
      "Odontogenic keratocyst",
      "Hyperplastic dental follicle"
    ],
    finalDiagnosis: "Dentigerous Cyst",
    keyPoints: [
      "Attached at CEJ encircling crown of unerupted tooth",
      "Non-keratinized thin lining",
      "Must examine entire lining to exclude unicystic ameloblastoma",
      "Reduced enamel epithelium origin"
    ]
  },
  {
    id: "case2",
    title: "Case 2: Gingival Nodule",
    category: "Reactive Lesion",
    clinicalHistory: "28-year-old female with a 1 cm red nodule on the anterior maxillary gingiva. History of pregnancy (second trimester). The lesion bleeds easily.",
    histologicFindings: [
      "Lobular proliferation of capillaries",
      "Granulation tissue-like appearance",
      "Surface ulceration with fibrin",
      "Mixed inflammatory infiltrate",
      "Edematous fibrous stroma"
    ],
    differentialDiagnosis: [
      "Pyogenic granuloma (lobular capillary hemangioma)",
      "Peripheral ossifying fibroma",
      "Peripheral giant cell granuloma",
      "Hemangioma"
    ],
    finalDiagnosis: "Pyogenic Granuloma (Granuloma Gravidarum)",
    keyPoints: [
      "Associated with pregnancy hormones",
      "Lobular capillary architecture",
      "May recur if incompletely excised",
      "Remove local irritants; may regress postpartum"
    ]
  },
  {
    id: "case3",
    title: "Case 3: Posterior Mandible Lesion",
    category: "Odontogenic Tumor",
    clinicalHistory: "35-year-old male with a slow-growing, multilocular radiolucency in the posterior mandible causing root resorption. Clinically, there is buccal expansion.",
    histologicFindings: [
      "Islands and strands of odontogenic epithelium",
      "Peripheral columnar cells with reverse nuclear polarity",
      "Hyperchromatic nuclei polarized away from basement membrane",
      "Central stellate reticulum-like cells",
      "Follicular and plexiform patterns"
    ],
    diagramType: "tumor",
    diagramVariant: "ameloblastoma",
    ihcFindings: [
      { name: "CK5/6", result: "positive" },
      { name: "CK14", result: "positive" },
      { name: "BRAF V600E", result: "positive", note: "mutation detected" }
    ],
    differentialDiagnosis: [
      "Ameloblastoma",
      "Squamous odontogenic tumor",
      "Ameloblastic carcinoma",
      "Odontogenic keratocyst"
    ],
    finalDiagnosis: "Ameloblastoma (Solid/Multicystic Type)",
    keyPoints: [
      "Classic reverse nuclear polarity in peripheral cells",
      "Stellate reticulum-like center",
      "BRAF V600E mutation in ~60-80%",
      "Locally aggressive; high recurrence with curettage"
    ]
  },
  {
    id: "case4",
    title: "Case 4: White Patch on Tongue",
    category: "Epithelial Lesion",
    clinicalHistory: "58-year-old male smoker with a white patch on the lateral tongue present for 6 months. The lesion cannot be scraped off.",
    histologicFindings: [
      "Hyperkeratosis (parakeratosis)",
      "Irregular epithelial stratification",
      "Nuclear hyperchromasia in lower half",
      "Increased nuclear:cytoplasmic ratio",
      "Increased mitoses in basal/parabasal layers"
    ],
    diagramType: "epithelium",
    diagramVariant: "dysplasia",
    differentialDiagnosis: [
      "Mild epithelial dysplasia",
      "Moderate epithelial dysplasia",
      "Frictional keratosis",
      "Lichenoid inflammation"
    ],
    finalDiagnosis: "Moderate Epithelial Dysplasia",
    keyPoints: [
      "Dysplastic changes in lower 2/3 of epithelium",
      "High-risk site (lateral tongue)",
      "Smoking is significant risk factor",
      "Requires close follow-up and possible excision"
    ]
  },
  {
    id: "case5",
    title: "Case 5: Palatal Swelling",
    category: "Salivary Tumor",
    clinicalHistory: "42-year-old female with a slow-growing, firm mass on the hard palate. Present for 2 years. Overlying mucosa is intact.",
    histologicFindings: [
      "Basaloid cells with hyperchromatic nuclei",
      "Cribriform (Swiss cheese) pattern",
      "Tubular and solid areas",
      "Mucoid material in pseudo-cystic spaces",
      "Perineural invasion present"
    ],
    diagramType: "gland",
    ihcFindings: [
      { name: "p63", result: "positive", note: "myoepithelial" },
      { name: "CK7", result: "positive", note: "luminal" },
      { name: "CD117 (c-kit)", result: "positive" },
      { name: "S100", result: "positive" }
    ],
    differentialDiagnosis: [
      "Adenoid cystic carcinoma",
      "Polymorphous adenocarcinoma",
      "Basal cell adenocarcinoma",
      "Basaloid SCC"
    ],
    finalDiagnosis: "Adenoid Cystic Carcinoma",
    keyPoints: [
      "Classic cribriform pattern",
      "High propensity for perineural invasion",
      "Prolonged clinical course with late metastases",
      "Solid pattern indicates worse prognosis"
    ]
  },
  {
    id: "case6",
    title: "Case 6: Pigmented Gingival Lesion",
    category: "Pigmented Lesion",
    clinicalHistory: "55-year-old patient with a new pigmented lesion on the maxillary gingiva, noted by dentist 3 months ago. Patient unsure of duration. Asymmetric dark brown/black macule.",
    histologicFindings: [
      "Atypical melanocytes at basal layer",
      "Pagetoid spread into upper epithelium",
      "Nuclear pleomorphism and hyperchromasia",
      "Mitotic figures present",
      "Invasive component in lamina propria"
    ],
    ihcFindings: [
      { name: "S100", result: "positive" },
      { name: "SOX10", result: "positive" },
      { name: "HMB-45", result: "positive" },
      { name: "Ki-67", result: "positive", note: ">20%" }
    ],
    differentialDiagnosis: [
      "Oral melanoma",
      "Melanotic macule",
      "Blue nevus",
      "Amalgam tattoo"
    ],
    finalDiagnosis: "Oral Melanoma",
    keyPoints: [
      "Rare but aggressive malignancy",
      "Poor prognosis (5-year survival ~20%)",
      "Atypical melanocytes with pagetoid spread",
      "Any new/changing pigmented lesion warrants biopsy"
    ]
  }
]

export function Cases() {
  const [selectedCase, setSelectedCase] = useState<Case | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)

  const handleCaseSelect = (caseItem: Case) => {
    setSelectedCase(caseItem)
    setShowAnswer(false)
  }

  const handleReset = () => {
    setSelectedCase(null)
    setShowAnswer(false)
  }

  if (!selectedCase) {
    return (
      <ModuleLayout
        title="Integrated Case Bank"
        description="Synthetic cases integrating clinical, histologic, and IHC findings"
        icon={<BookOpen className="h-6 w-6 text-primary" />}
      >
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Select a Case</CardTitle>
              <CardDescription>
                Work through these synthetic cases to practice diagnostic reasoning.
                Each case includes clinical history, histologic findings, and IHC concepts.
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="grid md:grid-cols-2 gap-4">
            {cases.map((caseItem) => (
              <Card
                key={caseItem.id}
                className="cursor-pointer hover:border-primary/50 transition-colors"
                onClick={() => handleCaseSelect(caseItem)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{caseItem.title}</CardTitle>
                      <Badge variant="secondary" className="mt-2">{caseItem.category}</Badge>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {caseItem.clinicalHistory}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <PitfallAlert
            title="Educational Purpose"
            description="These cases are synthetic and designed for educational pattern recognition. They are not based on real patients and should not be used for clinical decision-making."
          />
        </div>
      </ModuleLayout>
    )
  }

  return (
    <ModuleLayout
      title={selectedCase.title}
      description="Work through this case systematically"
      icon={<BookOpen className="h-6 w-6 text-primary" />}
    >
      <div className="space-y-6">
        <Button variant="outline" onClick={handleReset}>
          <RotateCcw className="h-4 w-4 mr-2" />
          Back to Case List
        </Button>

        {/* Clinical History */}
        <Card>
          <CardHeader>
            <CardTitle>Clinical History</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{selectedCase.clinicalHistory}</p>
          </CardContent>
        </Card>

        {/* Diagram if available */}
        {selectedCase.diagramType && (
          <SyntheticDiagram
            type={selectedCase.diagramType}
            variant={selectedCase.diagramVariant}
            label="Synthetic Diagram"
          />
        )}

        {/* Histologic Findings */}
        <Card>
          <CardHeader>
            <CardTitle>Histologic Findings</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {selectedCase.histologicFindings.map((finding, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{finding}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* IHC if available */}
        {selectedCase.ihcFindings && (
          <IHCPanel
            title="IHC Results"
            markers={selectedCase.ihcFindings}
          />
        )}

        {/* Differential Diagnosis */}
        <Card>
          <CardHeader>
            <CardTitle>Differential Diagnosis</CardTitle>
            <CardDescription>Consider these possibilities based on the findings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {selectedCase.differentialDiagnosis.map((dx, index) => (
                <Badge key={index} variant="outline">{dx}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Show Answer Button */}
        {!showAnswer && (
          <div className="text-center">
            <Button onClick={() => setShowAnswer(true)} size="lg">
              Reveal Diagnosis
            </Button>
          </div>
        )}

        {/* Answer Section */}
        {showAnswer && (
          <>
            <Card className="border-green-500/30 bg-green-500/5">
              <CardHeader>
                <CardTitle className="text-green-500">Final Diagnosis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold">{selectedCase.finalDiagnosis}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Points</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {selectedCase.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-yellow-500 mt-1">!</span>
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button variant="outline" onClick={handleReset}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Try Another Case
              </Button>
            </div>
          </>
        )}
      </div>
    </ModuleLayout>
  )
}

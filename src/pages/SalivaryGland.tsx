import { ModuleLayout } from '@/components/layout'
import { LesionCard, QuickQuiz, PitfallAlert, SyntheticDiagram, IHCPanel } from '@/components/content'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Droplet } from 'lucide-react'

const quizQuestions = [
  {
    question: "Which salivary gland tumor is characterized by a mixture of intermediate, epidermoid, and mucous cells?",
    options: ["Pleomorphic adenoma", "Adenoid cystic carcinoma", "Mucoepidermoid carcinoma", "Warthin tumor"],
    correctIndex: 2,
    explanation: "Mucoepidermoid carcinoma is composed of three cell types: intermediate cells, epidermoid cells, and mucous cells."
  },
  {
    question: "The 'cribriform' or 'Swiss cheese' pattern is most characteristic of:",
    options: ["Mucoepidermoid carcinoma", "Adenoid cystic carcinoma", "Acinic cell carcinoma", "Pleomorphic adenoma"],
    correctIndex: 1,
    explanation: "Adenoid cystic carcinoma classically shows a cribriform (Swiss cheese) pattern with basaloid cells surrounding mucoid material."
  },
  {
    question: "Which benign salivary tumor shows bilayered oncocytic epithelium?",
    options: ["Pleomorphic adenoma", "Canalicular adenoma", "Warthin tumor", "Myoepithelioma"],
    correctIndex: 2,
    explanation: "Warthin tumor (papillary cystadenoma lymphomatosum) shows characteristic papillary structures lined by bilayered oncocytic epithelium with a lymphoid stroma."
  }
]

export function SalivaryGland() {
  return (
    <ModuleLayout
      title="Salivary Gland Lesions"
      description="Benign and malignant tumors relevant to dental and oral pathology"
      icon={<Droplet className="h-6 w-6 text-primary" />}
    >
      <div className="space-y-8">
        {/* Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Salivary gland tumors can arise in major (parotid, submandibular, sublingual)
              or minor salivary glands distributed throughout the oral cavity. While most
              parotid tumors are benign, the smaller the gland, the higher the likelihood
              of malignancy.
            </p>
          </CardContent>
        </Card>

        <SyntheticDiagram type="gland" variant="mec" label="Salivary Gland Architecture" />

        <Accordion type="multiple" defaultValue={["benign"]}>
          <AccordionItem value="benign">
            <AccordionTrigger>Benign Salivary Tumors</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <LesionCard
                  title="Pleomorphic Adenoma"
                  description="Most common salivary gland tumor; 'mixed tumor'"
                  category="Benign"
                  features={[
                    "Epithelial and myoepithelial cells",
                    "Chondromyxoid stroma ('mesenchymal' component)",
                    "Variable architecture (ducts, sheets, trabeculae)",
                    "May show squamous metaplasia",
                    "Capsule (may be incomplete)"
                  ]}
                  keyPoints={[
                    "Most common in parotid (80% of parotid tumors)",
                    "Palate most common intraoral site",
                    "Recurrence if incompletely excised",
                    "Carcinoma ex PA: malignant transformation"
                  ]}
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <LesionCard
                    title="Warthin Tumor"
                    description="Papillary cystadenoma lymphomatosum"
                    category="Benign"
                    features={[
                      "Papillary cystic architecture",
                      "Bilayered oncocytic epithelium",
                      "Dense lymphoid stroma with germinal centers",
                      "Luminal columnar and basal cuboidal cells"
                    ]}
                    keyPoints={[
                      "Almost exclusively in parotid",
                      "May be bilateral/multifocal",
                      "Associated with smoking",
                      "Second most common parotid tumor"
                    ]}
                  />
                  <LesionCard
                    title="Canalicular Adenoma"
                    description="Benign tumor of minor salivary glands"
                    category="Benign"
                    features={[
                      "Bilayered cords/strands of columnar cells",
                      "Loose, vascular stroma",
                      "Beading/rosary-like pattern",
                      "May be multifocal"
                    ]}
                    keyPoints={[
                      "Upper lip most common site",
                      "Elderly patients",
                      "Excellent prognosis",
                      "Multifocality important to note"
                    ]}
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="malignant">
            <AccordionTrigger>Malignant Salivary Tumors</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <LesionCard
                  title="Mucoepidermoid Carcinoma"
                  description="Most common salivary gland malignancy"
                  category="Malignant"
                  features={[
                    "Three cell types: mucous, epidermoid, intermediate",
                    "Cystic and solid areas",
                    "Mucin-containing cells (mucicarmine+)",
                    "Low-grade: more cystic, more mucous cells",
                    "High-grade: more solid, more epidermoid cells"
                  ]}
                  keyPoints={[
                    "Grading crucial for prognosis",
                    "Low-grade: excellent prognosis",
                    "High-grade: aggressive behavior",
                    "MAML2 translocation common (good prognosis)"
                  ]}
                />
                <LesionCard
                  title="Adenoid Cystic Carcinoma"
                  description="Slow-growing but relentless malignancy"
                  category="Malignant"
                  features={[
                    "Basaloid cells with dark nuclei",
                    "Cribriform pattern (Swiss cheese): mucoid material",
                    "Tubular pattern: better prognosis",
                    "Solid pattern: worse prognosis",
                    "Perineural invasion very common"
                  ]}
                  keyPoints={[
                    "High propensity for perineural invasion",
                    "Late distant metastases (lung)",
                    "Prolonged clinical course",
                    "Solid pattern worse prognosis"
                  ]}
                />
                <LesionCard
                  title="Acinic Cell Carcinoma"
                  description="Low-grade malignancy with serous differentiation"
                  category="Malignant"
                  features={[
                    "Cells resemble serous acinar cells",
                    "Basophilic granular cytoplasm",
                    "Multiple architectural patterns",
                    "May have clear cell or papillary variants"
                  ]}
                  keyPoints={[
                    "Most common in parotid",
                    "Generally indolent course",
                    "May dedifferentiate (worse prognosis)",
                    "DOG1 positive"
                  ]}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* IHC Panel */}
        <IHCPanel
          title="Salivary Gland Tumors"
          markers={[
            { name: "p63", result: "positive", note: "myoepithelial cells" },
            { name: "S100", result: "positive", note: "myoepithelial cells" },
            { name: "CK7", result: "positive", note: "luminal cells" },
            { name: "SMA", result: "positive", note: "myoepithelial cells" },
            { name: "DOG1", result: "positive", note: "acinic cell carcinoma" }
          ]}
          interpretation="Salivary tumors often show dual population of luminal (CK7+) and myoepithelial (p63+, S100+) cells. DOG1 is useful for acinic cell carcinoma."
        />

        {/* Pitfalls */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Pitfalls & Key Distinctions</h3>
          <PitfallAlert
            title="Low-grade MEC vs. Mucocele"
            description="Low-grade mucoepidermoid carcinoma can be very cystic and may be confused with mucocele. Look for the three cell types and epithelial proliferation. Mucocele lacks epithelial lining (extravasation type)."
          />
          <PitfallAlert
            title="ACC vs. Polymorphous Adenocarcinoma"
            description="Both tumors have similar patterns and infiltrative growth. Polymorphous adenocarcinoma (formerly PLGA) has more uniform cytology and multiple architectural patterns. It is more common in minor glands of the palate."
          />
          <PitfallAlert
            title="Carcinoma ex Pleomorphic Adenoma"
            description="Long-standing pleomorphic adenoma can undergo malignant transformation. Look for areas of frankly malignant epithelial proliferation. The malignant component determines behavior."
          />
        </div>

        {/* Quiz */}
        <QuickQuiz title="Module Quiz" questions={quizQuestions} />
      </div>
    </ModuleLayout>
  )
}

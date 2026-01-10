import { ModuleLayout } from '@/components/layout'
import { PitfallAlert, QuickQuiz } from '@/components/content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle, ArrowRight } from 'lucide-react'

const quizQuestions = [
  {
    question: "Which benign lesion can cause pseudoepitheliomatous hyperplasia that mimics SCC?",
    options: ["Fibroma", "Lipoma", "Granular cell tumor", "Pyogenic granuloma"],
    correctIndex: 2,
    explanation: "Granular cell tumor commonly induces pseudoepitheliomatous hyperplasia of the overlying epithelium, which can closely mimic well-differentiated squamous cell carcinoma."
  },
  {
    question: "A cyst with parakeratinized lining and palisaded basal layer should raise concern for:",
    options: ["Dentigerous cyst", "Radicular cyst", "Odontogenic keratocyst", "Glandular odontogenic cyst"],
    correctIndex: 2,
    explanation: "Parakeratinized lining with a palisaded basal layer and corrugated surface is characteristic of odontogenic keratocyst (OKC), which has high recurrence rate."
  },
  {
    question: "Which feature helps distinguish epithelial dysplasia from lichenoid inflammation?",
    options: ["Hyperkeratosis", "Cytologic atypia in upper epithelium", "Lymphocytic infiltrate", "Basal cell changes"],
    correctIndex: 1,
    explanation: "Dysplasia shows cytologic atypia (nuclear changes) throughout the epithelium, including upper layers. Lichenoid inflammation causes interface changes but cells above the basal layer remain cytologically normal."
  }
]

const mimicPairs = [
  {
    dangerous: "Oral SCC",
    mimic: "Pseudoepitheliomatous hyperplasia",
    key: "PEH lacks cytologic atypia and is associated with underlying lesion (granular cell tumor, deep fungal infection). Always look deeper!"
  },
  {
    dangerous: "Ameloblastoma",
    mimic: "Dental follicle / Dentigerous cyst",
    key: "Examine entire lining. Ameloblastoma shows peripheral palisading with reverse polarity and stellate reticulum-like areas."
  },
  {
    dangerous: "Oral melanoma",
    mimic: "Amalgam tattoo / Melanotic macule",
    key: "Melanoma shows atypical melanocytes with pagetoid spread. Amalgam has coarse metallic deposits. When in doubt, biopsy."
  },
  {
    dangerous: "Epithelial dysplasia",
    mimic: "Reactive atypia (lichenoid)",
    key: "Lichenoid inflammation causes basal changes but upper epithelium is normal. True dysplasia shows atypia throughout affected layers."
  },
  {
    dangerous: "Odontogenic keratocyst",
    mimic: "Other odontogenic cysts",
    key: "OKC has distinctive parakeratinized lining with palisaded basal layer and corrugated surface. High recurrence risk."
  },
  {
    dangerous: "Langerhans cell histiocytosis",
    mimic: "Reactive histiocytes / Granulomatous inflammation",
    key: "LCH cells have grooved 'coffee bean' nuclei and are CD1a, Langerin positive. Check for BRAF V600E."
  },
  {
    dangerous: "Mucoepidermoid carcinoma",
    mimic: "Mucocele / Low-grade adenocarcinoma",
    key: "MEC has three cell types (mucous, epidermoid, intermediate). Low-grade MEC is very cystic with abundant mucous cells."
  },
  {
    dangerous: "Adenoid cystic carcinoma",
    mimic: "Polymorphous adenocarcinoma",
    key: "ACC has basaloid cells, cribriform pattern, perineural invasion. PAC has more uniform cytology and multiple patterns."
  }
]

export function Pitfalls() {
  return (
    <ModuleLayout
      title="Pitfalls & Dangerous Mimics"
      description="Critical diagnostic pitfalls and look-alikes in oral pathology"
      icon={<AlertTriangle className="h-6 w-6 text-primary" />}
    >
      <div className="space-y-8">
        {/* Overview */}
        <Card className="border-yellow-500/30 bg-yellow-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-500">
              <AlertTriangle className="h-5 w-5" />
              Why This Matters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Diagnostic errors in oral pathology can lead to under-treatment of malignancies
              or over-treatment of benign conditions. This module highlights the most common
              and dangerous look-alikes that every pathology resident should know.
            </p>
          </CardContent>
        </Card>

        {/* Mimic Pairs */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Dangerous Mimics</h2>
          {mimicPairs.map((pair, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
                  <div className="flex-1">
                    <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm font-medium">
                      {pair.dangerous}
                    </span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground hidden md:block" />
                  <div className="flex-1">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium">
                      {pair.mimic}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
                  <strong className="text-yellow-500">Key distinction:</strong> {pair.key}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Pitfalls */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Detailed Pitfalls</h2>

          <PitfallAlert
            title="Pseudoepitheliomatous Hyperplasia Mimicking SCC"
            description="PEH is a reactive epithelial proliferation that can closely mimic well-differentiated SCC. Key features favoring PEH: 1) Associated underlying lesion (granular cell tumor, fungal infection, chronic ulcer), 2) Lack of cytologic atypia, 3) No perineural/lymphovascular invasion. Always examine the deeper tissue!"
          />

          <PitfallAlert
            title="Unicystic Ameloblastoma in Dentigerous Cyst"
            description="Always examine the entire lining of a pericoronal cyst. Unicystic ameloblastoma may arise within a dentigerous cyst. Look for areas with peripheral palisading, reverse nuclear polarity, and stellate reticulum-like loosening."
          />

          <PitfallAlert
            title="OKC vs. Orthokeratinized Odontogenic Cyst"
            description="Both are keratinized cysts but behavior differs dramatically. OKC has parakeratinized lining (nuclei in keratin), palisaded basal layer, and high recurrence rate. OOC has orthokeratin with granular layer and low recurrence."
          />

          <PitfallAlert
            title="CEOT Nuclear Pleomorphism"
            description="Calcifying epithelial odontogenic tumor (Pindborg tumor) can show striking nuclear pleomorphism that raises concern for malignancy. This is a benign tumor! Look for the characteristic Liesegang ring calcifications and amyloid-like material."
          />

          <PitfallAlert
            title="Glandular Odontogenic Cyst vs. Central MEC"
            description="GOC shows gland-like features (mucous cells, duct-like spaces) that can mimic central mucoepidermoid carcinoma. Key: GOC is a cyst with a thin lining; MEC is a solid/cystic tumor. Clinical and radiographic correlation essential."
          />

          <PitfallAlert
            title="Giant Cell Lesions"
            description="Central giant cell granuloma, brown tumor of hyperparathyroidism, aneurysmal bone cyst, and cherubism can all look similar histologically. Check serum calcium/PTH. Brown tumor resolves after treating hyperparathyroidism."
          />

          <PitfallAlert
            title="Blue Nevus vs. Melanoma"
            description="Oral blue nevus can show deep, heavily pigmented spindle cells that raise concern for melanoma. Key: blue nevus cells are bland, dendritic, and lack mitoses/atypia. Any atypical features warrant careful evaluation and possible excision."
          />

          <PitfallAlert
            title="Fibrous Dysplasia vs. Ossifying Fibroma"
            description="Both are fibro-osseous lesions. FD: irregular 'Chinese letter' trabeculae blending into normal bone, no osteoblastic rimming. OF: well-demarcated, mixed woven/lamellar bone with osteoblastic rimming. Clinical/radiographic correlation essential."
          />
        </div>

        {/* Quiz */}
        <QuickQuiz title="Module Quiz" questions={quizQuestions} />
      </div>
    </ModuleLayout>
  )
}

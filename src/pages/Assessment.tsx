import { useState, useMemo } from 'react'
import { ModuleLayout } from '@/components/layout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { ClipboardCheck, CheckCircle, XCircle, RotateCcw, Play } from 'lucide-react'

interface Question {
  id: string
  category: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const allQuestions: Question[] = [
  {
    id: "q1",
    category: "Odontogenic Cysts",
    question: "A cyst with a parakeratinized lining, palisaded basal layer, and corrugated surface is most consistent with:",
    options: ["Dentigerous cyst", "Radicular cyst", "Odontogenic keratocyst", "Lateral periodontal cyst"],
    correctIndex: 2,
    explanation: "Odontogenic keratocyst (OKC) has a distinctive parakeratinized epithelium with a palisaded basal layer and corrugated (wavy) surface."
  },
  {
    id: "q2",
    category: "Odontogenic Tumors",
    question: "Which histologic feature is characteristic of ameloblastoma?",
    options: ["Liesegang ring calcifications", "Peripheral palisading with reverse nuclear polarity", "Rosette structures", "Broad-based budding yeast"],
    correctIndex: 1,
    explanation: "Ameloblastoma shows peripheral columnar cells with nuclei polarized away from the basement membrane (reverse polarity) and central stellate reticulum-like areas."
  },
  {
    id: "q3",
    category: "Gingival Lesions",
    question: "A gingival lesion containing osteoclast-like multinucleated giant cells is most likely:",
    options: ["Pyogenic granuloma", "Peripheral ossifying fibroma", "Peripheral giant cell granuloma", "Irritation fibroma"],
    correctIndex: 2,
    explanation: "Peripheral giant cell granuloma contains multinucleated osteoclast-like giant cells and is exclusive to the gingiva and alveolar ridge."
  },
  {
    id: "q4",
    category: "Epithelial Lesions",
    question: "Which feature indicates invasion in squamous cell carcinoma?",
    options: ["Nuclear hyperchromasia", "Increased mitotic activity", "Extension through basement membrane", "Surface ulceration"],
    correctIndex: 2,
    explanation: "Invasion through the basement membrane into underlying connective tissue is the defining feature of carcinoma, distinguishing it from dysplasia."
  },
  {
    id: "q5",
    category: "Pigmented Lesions",
    question: "Which stain or marker would help distinguish melanoma from carcinoma?",
    options: ["PAS", "S100 and SOX10", "CK7", "Mucicarmine"],
    correctIndex: 1,
    explanation: "S100 and SOX10 are melanocytic markers. CK7 is a cytokeratin that would be positive in carcinoma but negative in melanoma."
  },
  {
    id: "q6",
    category: "Salivary Gland",
    question: "A tumor with a 'cribriform' pattern and perineural invasion is most consistent with:",
    options: ["Pleomorphic adenoma", "Mucoepidermoid carcinoma", "Adenoid cystic carcinoma", "Warthin tumor"],
    correctIndex: 2,
    explanation: "Adenoid cystic carcinoma shows a classic cribriform (Swiss cheese) pattern and has a high propensity for perineural invasion."
  },
  {
    id: "q7",
    category: "Infections",
    question: "Multinucleated giant cells with nuclear molding and ground-glass chromatin suggest:",
    options: ["Candidiasis", "Herpes simplex virus", "Syphilis", "Histoplasmosis"],
    correctIndex: 1,
    explanation: "HSV causes characteristic multinucleated epithelial giant cells with nuclear molding and Cowdry type A inclusions (ground-glass chromatin)."
  },
  {
    id: "q8",
    category: "Mucocutaneous",
    question: "Suprabasal acantholysis with 'tombstone' basal cells is seen in:",
    options: ["Lichen planus", "Pemphigus vulgaris", "Mucous membrane pemphigoid", "Erythema multiforme"],
    correctIndex: 1,
    explanation: "Pemphigus vulgaris shows suprabasal acantholysis with basal cells remaining attached to the basement membrane like a 'row of tombstones.'"
  },
  {
    id: "q9",
    category: "Jaw Lesions",
    question: "'Chinese letter' trabeculae blending into surrounding bone suggests:",
    options: ["Ossifying fibroma", "Fibrous dysplasia", "Osteomyelitis", "Central giant cell granuloma"],
    correctIndex: 1,
    explanation: "Fibrous dysplasia shows irregularly shaped woven bone trabeculae with a 'Chinese letter' appearance, blending into normal bone without a capsule."
  },
  {
    id: "q10",
    category: "Soft Tissue",
    question: "Which tumor induces pseudoepitheliomatous hyperplasia that may mimic SCC?",
    options: ["Lipoma", "Schwannoma", "Granular cell tumor", "Fibroma"],
    correctIndex: 2,
    explanation: "Granular cell tumor commonly induces pseudoepitheliomatous hyperplasia of the overlying epithelium, which can closely mimic well-differentiated SCC."
  },
  {
    id: "q11",
    category: "Pediatric",
    question: "A translucent swelling over an erupting tooth in an infant is most likely:",
    options: ["Dentigerous cyst", "Eruption cyst", "Mucocele", "Ranula"],
    correctIndex: 1,
    explanation: "Eruption cyst is a soft tissue variant of dentigerous cyst that presents as a dome-shaped swelling over an erupting tooth."
  },
  {
    id: "q12",
    category: "IHC/Molecular",
    question: "BRAF V600E mutation is commonly found in:",
    options: ["Adenoid cystic carcinoma", "Mucoepidermoid carcinoma", "Ameloblastoma", "Pleomorphic adenoma"],
    correctIndex: 2,
    explanation: "BRAF V600E mutation is found in 60-80% of ameloblastomas and represents a potential therapeutic target."
  },
  {
    id: "q13",
    category: "Odontogenic Cysts",
    question: "A cyst associated with a non-vital tooth, lined by inflamed hyperplastic epithelium, is most likely:",
    options: ["Odontogenic keratocyst", "Dentigerous cyst", "Radicular cyst", "Glandular odontogenic cyst"],
    correctIndex: 2,
    explanation: "Radicular (periapical) cysts arise from epithelial rests of Malassez stimulated by inflammation from a non-vital tooth."
  },
  {
    id: "q14",
    category: "Salivary Gland",
    question: "A tumor with three cell types (mucous, epidermoid, intermediate) is:",
    options: ["Adenoid cystic carcinoma", "Mucoepidermoid carcinoma", "Pleomorphic adenoma", "Acinic cell carcinoma"],
    correctIndex: 1,
    explanation: "Mucoepidermoid carcinoma is composed of three cell types: mucous cells, epidermoid cells, and intermediate cells."
  },
  {
    id: "q15",
    category: "Pigmented Lesions",
    question: "Granular metallic deposits in connective tissue suggest:",
    options: ["Melanoma", "Melanotic macule", "Amalgam tattoo", "Blue nevus"],
    correctIndex: 2,
    explanation: "Amalgam tattoo shows granular black/brown metallic (silver/mercury) deposits within connective tissue from dental amalgam."
  },
  {
    id: "q16",
    category: "Jaw Lesions",
    question: "Langerhans cells with 'coffee bean' nuclei are positive for:",
    options: ["S100 only", "CD1a and Langerin", "CD68 only", "p63"],
    correctIndex: 1,
    explanation: "Langerhans cells are positive for CD1a and Langerin (CD207), as well as S100. These markers are essential for diagnosis."
  },
  {
    id: "q17",
    category: "Epithelial Lesions",
    question: "Koilocytes are characteristic of infection with:",
    options: ["HSV", "HPV", "Candida", "Treponema"],
    correctIndex: 1,
    explanation: "Koilocytes (cells with perinuclear clearing and nuclear hyperchromasia) are the cytopathic effect of human papillomavirus (HPV)."
  },
  {
    id: "q18",
    category: "Mucocutaneous",
    question: "A band-like lymphocytic infiltrate with 'sawtooth' rete ridges suggests:",
    options: ["Pemphigus vulgaris", "Oral lichen planus", "Mucous membrane pemphigoid", "SCC"],
    correctIndex: 1,
    explanation: "Oral lichen planus shows characteristic 'sawtooth' irregular rete ridges and a band-like (lichenoid) lymphocytic infiltrate at the interface."
  },
  {
    id: "q19",
    category: "Gingival Lesions",
    question: "Which gingival lesion contains calcified material (bone/cementum)?",
    options: ["Pyogenic granuloma", "Peripheral giant cell granuloma", "Peripheral ossifying fibroma", "Irritation fibroma"],
    correctIndex: 2,
    explanation: "Peripheral ossifying fibroma contains mineralized material (bone, cementum-like material, or dystrophic calcification) within fibrous tissue."
  },
  {
    id: "q20",
    category: "Soft Tissue",
    question: "Verocay bodies and Antoni A/B patterns are seen in:",
    options: ["Neurofibroma", "Schwannoma", "Traumatic neuroma", "Granular cell tumor"],
    correctIndex: 1,
    explanation: "Schwannoma shows classic Verocay bodies (nuclear palisading) and alternating Antoni A (cellular) and Antoni B (myxoid) patterns."
  }
]

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function Assessment() {
  const [started, setStarted] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [completed, setCompleted] = useState(false)

  const questions = useMemo(() => shuffleArray(allQuestions).slice(0, 15), [started])
  const currentQuestion = questions[currentQuestionIndex]
  const isCorrect = selectedAnswer === currentQuestion?.correctIndex

  const handleStart = () => {
    setStarted(true)
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setCorrectCount(0)
    setCompleted(false)
  }

  const handleSelect = (index: number) => {
    if (showResult) return
    setSelectedAnswer(index)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return
    setShowResult(true)
    if (isCorrect) {
      setCorrectCount(c => c + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(i => i + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setCompleted(true)
    }
  }

  if (!started) {
    return (
      <ModuleLayout
        title="Assessment"
        description="Test your knowledge with randomized questions"
        icon={<ClipboardCheck className="h-6 w-6 text-primary" />}
      >
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Ready to Test Your Knowledge?</CardTitle>
              <CardDescription>
                This assessment contains 15 randomized questions covering all modules.
                Your score is for this session only and is not tracked.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="p-4 rounded-lg bg-muted">
                  <div className="text-2xl font-bold text-primary">15</div>
                  <div className="text-muted-foreground">Questions</div>
                </div>
                <div className="p-4 rounded-lg bg-muted">
                  <div className="text-2xl font-bold text-primary">All</div>
                  <div className="text-muted-foreground">Topics</div>
                </div>
              </div>
              <Button onClick={handleStart} size="lg" className="w-full">
                <Play className="h-5 w-5 mr-2" />
                Start Assessment
              </Button>
              <p className="text-xs text-muted-foreground">
                Educational only — not for certification or clinical competency assessment.
              </p>
            </CardContent>
          </Card>
        </div>
      </ModuleLayout>
    )
  }

  if (completed) {
    const percentage = Math.round((correctCount / questions.length) * 100)
    return (
      <ModuleLayout
        title="Assessment Complete"
        description="Your session results"
        icon={<ClipboardCheck className="h-6 w-6 text-primary" />}
      >
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Session Results</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="py-8">
                <div className="text-6xl font-bold mb-2">
                  {correctCount}/{questions.length}
                </div>
                <div className="text-xl text-muted-foreground">
                  {percentage}% Correct
                </div>
              </div>

              <div className={cn(
                "p-4 rounded-lg",
                percentage >= 80 ? "bg-green-500/10 text-green-400" :
                percentage >= 60 ? "bg-yellow-500/10 text-yellow-400" :
                "bg-red-500/10 text-red-400"
              )}>
                {percentage >= 80 ? "Excellent work! Strong understanding of oral pathology concepts." :
                 percentage >= 60 ? "Good effort! Review the modules where you had difficulty." :
                 "Consider reviewing the modules before trying again."}
              </div>

              <p className="text-sm text-muted-foreground">
                You answered {correctCount} out of {questions.length} questions correctly this session.
              </p>

              <Button onClick={handleStart} size="lg" className="w-full">
                <RotateCcw className="h-5 w-5 mr-2" />
                Try Again
              </Button>
            </CardContent>
          </Card>
        </div>
      </ModuleLayout>
    )
  }

  return (
    <ModuleLayout
      title="Assessment"
      description={`Question ${currentQuestionIndex + 1} of ${questions.length}`}
      icon={<ClipboardCheck className="h-6 w-6 text-primary" />}
    >
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary">{currentQuestion.category}</Badge>
              <span className="text-sm text-muted-foreground">
                {currentQuestionIndex + 1} / {questions.length}
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 mb-4">
              <div
                className="bg-primary h-2 rounded-full transition-all"
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
            <CardTitle className="text-lg">{currentQuestion.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  disabled={showResult}
                  className={cn(
                    "w-full text-left p-4 rounded-lg border transition-colors",
                    selectedAnswer === index && !showResult && "border-primary bg-primary/10",
                    showResult && index === currentQuestion.correctIndex && "border-green-500 bg-green-500/10",
                    showResult && selectedAnswer === index && index !== currentQuestion.correctIndex && "border-red-500 bg-red-500/10",
                    !showResult && selectedAnswer !== index && "hover:bg-accent"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showResult && index === currentQuestion.correctIndex && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                    {showResult && selectedAnswer === index && index !== currentQuestion.correctIndex && (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {showResult && (
              <div className={cn(
                "p-4 rounded-lg",
                isCorrect ? "bg-green-500/10 border border-green-500/20" : "bg-yellow-500/10 border border-yellow-500/20"
              )}>
                <p className="text-sm">
                  <strong>{isCorrect ? "Correct!" : "Explanation:"}</strong> {currentQuestion.explanation}
                </p>
              </div>
            )}

            <div className="flex justify-end gap-2 pt-4">
              {!showResult ? (
                <Button onClick={handleSubmit} disabled={selectedAnswer === null}>
                  Submit Answer
                </Button>
              ) : (
                <Button onClick={handleNext}>
                  {currentQuestionIndex < questions.length - 1 ? "Next Question" : "See Results"}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </ModuleLayout>
  )
}

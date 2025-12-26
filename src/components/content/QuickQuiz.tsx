import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

interface QuickQuizProps {
  title?: string
  questions: QuizQuestion[]
}

export function QuickQuiz({ title = "Quick Quiz", questions }: QuickQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [completed, setCompleted] = useState(false)

  const question = questions[currentQuestion]
  const isCorrect = selectedAnswer === question.correctIndex

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
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(c => c + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setCompleted(true)
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setCorrectCount(0)
    setCompleted(false)
  }

  if (completed) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-primary" />
            {title} - Results
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center py-8">
          <div className="text-4xl font-bold mb-2">
            {correctCount}/{questions.length}
          </div>
          <p className="text-muted-foreground mb-6">
            You answered {correctCount} out of {questions.length} correctly this session.
          </p>
          <Button onClick={handleReset}>Try Again</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-primary" />
            {title}
          </span>
          <span className="text-sm font-normal text-muted-foreground">
            {currentQuestion + 1} / {questions.length}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="font-medium">{question.question}</p>

        <div className="space-y-2">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={showResult}
              className={cn(
                "w-full text-left p-3 rounded-lg border transition-colors",
                selectedAnswer === index && !showResult && "border-primary bg-primary/10",
                showResult && index === question.correctIndex && "border-green-500 bg-green-500/10",
                showResult && selectedAnswer === index && index !== question.correctIndex && "border-red-500 bg-red-500/10",
                !showResult && selectedAnswer !== index && "hover:bg-accent"
              )}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {showResult && index === question.correctIndex && (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
                {showResult && selectedAnswer === index && index !== question.correctIndex && (
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
              <strong>{isCorrect ? "Correct!" : "Explanation:"}</strong> {question.explanation}
            </p>
          </div>
        )}

        <div className="flex justify-end gap-2">
          {!showResult ? (
            <Button onClick={handleSubmit} disabled={selectedAnswer === null}>
              Submit Answer
            </Button>
          ) : (
            <Button onClick={handleNext}>
              {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

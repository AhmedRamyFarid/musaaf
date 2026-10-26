import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, RotateCcw, Award, ChevronLeft, ChevronRight } from 'lucide-react'
import { quizQuestions } from '../data/quiz'

export function Quiz() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [answers, setAnswers] = useState<boolean[]>([])

  const q = quizQuestions[current]

  const handleSelect = (idx: number) => {
    if (answered) return
    setSelected(idx)
    setAnswered(true)
    const correct = idx === q.correctIndex
    if (correct) setScore((s) => s + 1)
    setAnswers((prev) => [...prev, correct])
  }

  const handleNext = () => {
    if (current + 1 >= quizQuestions.length) {
      setFinished(true)
    } else {
      setCurrent((c) => c + 1)
      setSelected(null)
      setAnswered(false)
    }
  }

  const handleRestart = () => {
    setCurrent(0)
    setSelected(null)
    setAnswered(false)
    setScore(0)
    setFinished(false)
    setAnswers([])
  }

  const scorePercent = Math.round((score / quizQuestions.length) * 100)
  const feedback =
    scorePercent >= 80
      ? 'ممتاز! أنت مستعد لتقديم الإسعافات الأولية.'
      : scorePercent >= 60
        ? 'جيد! استمر في تعلم المزيد لتصبح أكثر استعدادًا.'
        : 'لا بأس، راجع الأدلة وحاول مجددًا.'

  if (finished) {
    return (
      <motion.div
        key="results"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl border-2 border-[#E8F3FA] p-8 text-center max-w-xl mx-auto"
      >
        <div className="w-20 h-20 rounded-full bg-[#E8F3FA] flex items-center justify-center mx-auto mb-6">
          <Award className="w-10 h-10 text-[#124A78]" aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-bold text-[#092D4B] mb-2">نتيجتك</h3>
        <div className="text-5xl font-black text-[#124A78] mb-2">
          {score} / {quizQuestions.length}
        </div>
        <div className="text-[#667789] mb-6">{feedback}</div>

        {/* Score bar */}
        <div className="w-full bg-[#E8F3FA] rounded-full h-3 mb-6">
          <motion.div
            className="h-3 rounded-full bg-[#124A78]"
            initial={{ width: 0 }}
            animate={{ width: `${scorePercent}%` }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>

        {/* Answers review */}
        <div className="grid grid-cols-4 gap-2 mb-8">
          {answers.map((correct, i) => (
            <div
              key={i}
              className={`rounded-lg p-2 text-xs font-semibold ${correct ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
            >
              س {i + 1} {correct ? '✓' : '✗'}
            </div>
          ))}
        </div>

        <div className="bg-[#FFF7F7] border border-[#FECACA] rounded-xl p-4 mb-6">
          <p className="text-[#D92736] text-xs leading-relaxed">
            هذا الاختبار للتوعية التعليمية فقط وليس دليلًا على الكفاءة الطبية المعتمدة.
          </p>
        </div>

        <button
          onClick={handleRestart}
          className="flex items-center gap-2 mx-auto bg-[#124A78] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#092D4B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#124A78]"
        >
          <RotateCcw className="w-4 h-4" aria-hidden="true" />
          أعد الاختبار
        </button>
      </motion.div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-[#667789]">
          السؤال {current + 1} من {quizQuestions.length}
        </span>
        <span className="text-sm font-semibold text-[#124A78]">
          النتيجة: {score}
        </span>
      </div>
      <div className="w-full bg-[#E8F3FA] rounded-full h-2 mb-6">
        <motion.div
          className="h-2 rounded-full bg-[#124A78]"
          animate={{ width: `${((current + (answered ? 1 : 0)) / quizQuestions.length) * 100}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl border-2 border-[#E8F3FA] p-6 sm:p-8"
        >
          <h3 className="text-lg sm:text-xl font-bold text-[#092D4B] mb-6 leading-relaxed">
            {q.question}
          </h3>

          <div className="space-y-3">
            {q.options.map((option, idx) => {
              let style = 'border-[#E8F3FA] bg-[#FAFBFD] text-[#092D4B] hover:border-[#124A78] hover:bg-[#E8F3FA]'
              if (answered) {
                if (idx === q.correctIndex) {
                  style = 'border-green-400 bg-green-50 text-green-800'
                } else if (idx === selected && idx !== q.correctIndex) {
                  style = 'border-red-400 bg-red-50 text-red-800'
                } else {
                  style = 'border-[#E8F3FA] bg-[#FAFBFD] text-[#667789] opacity-60'
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={answered}
                  className={`w-full text-right px-5 py-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between gap-3 font-medium text-sm ${style} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#124A78]`}
                  aria-pressed={selected === idx}
                >
                  <span>{option}</span>
                  {answered && idx === q.correctIndex && (
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" aria-hidden="true" />
                  )}
                  {answered && idx === selected && idx !== q.correctIndex && (
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" aria-hidden="true" />
                  )}
                </button>
              )
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {answered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div
                  className={`mt-5 p-4 rounded-xl text-sm leading-relaxed ${
                    selected === q.correctIndex
                      ? 'bg-green-50 border border-green-200 text-green-800'
                      : 'bg-amber-50 border border-amber-200 text-amber-900'
                  }`}
                >
                  <strong>{selected === q.correctIndex ? '✓ صحيح! ' : '✗ غير صحيح. '}</strong>
                  {q.explanation}
                </div>

                <button
                  onClick={handleNext}
                  className="mt-4 flex items-center gap-2 mr-auto bg-[#124A78] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#092D4B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#124A78]"
                >
                  {current + 1 >= quizQuestions.length ? 'عرض النتيجة' : 'السؤال التالي'}
                  <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}


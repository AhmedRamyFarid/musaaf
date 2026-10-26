import { Quiz } from '../components/Quiz'
import { SectionReveal } from '../components/SectionReveal'
import { AlertTriangle } from 'lucide-react'

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <div className="bg-[#124A78] pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#D92736] text-sm font-bold uppercase tracking-widest mb-3 block">اختبار تعليمي</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">اختبر معلوماتك</h1>
          <p className="text-[#E8F3FA]/75 max-w-xl mx-auto">
            اختبر معلوماتك عن الإسعافات الأولية وراجع الإجابات الصحيحة.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionReveal>
          <div className="bg-[#FFF7ED] border-2 border-[#FED7AA] rounded-2xl p-5 flex items-start gap-4 max-w-2xl mx-auto mb-8">
            <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-orange-900 text-sm leading-relaxed">
              هذا الاختبار للتوعية التعليمية فقط وليس شهادة كفاءة طبية أو دليلًا على الاستعداد لتقديم الإسعافات الأولية.
            </p>
          </div>
        </SectionReveal>
        <Quiz />
      </div>
    </div>
  )
}


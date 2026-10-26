import { useParams, Link } from 'react-router-dom'
import { ArrowRight, AlertTriangle, CheckCircle, XCircle, ExternalLink, BookOpen } from 'lucide-react'
import { getGuideById } from '../data/guides'
import { SectionReveal } from '../components/SectionReveal'

export default function GuidePage() {
  const { slug } = useParams<{ slug: string }>()
  const guide = getGuideById(slug ?? '')

  if (!guide) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 pt-24 px-4">
        <div className="text-6xl" aria-hidden="true">😕</div>
        <h1 className="text-2xl font-bold text-[#092D4B]">الدليل غير موجود</h1>
        <p className="text-[#667789]">تأكد من الرابط أو اختر دليلًا من المكتبة.</p>
        <Link
          to="/guides"
          className="mt-4 bg-[#124A78] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#092D4B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#124A78]"
        >
          مكتبة الأدلة
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      {/* Header */}
      <div
        className="pt-24 pb-16 px-4"
        style={{ backgroundColor: guide.color }}
      >
        <div className="max-w-4xl mx-auto">
          <Link
            to="/guides"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
          >
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
            مكتبة الأدلة
          </Link>
          <div className="flex items-center gap-4">
            <div
              className="text-5xl w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center"
              aria-hidden="true"
            >
              {guide.icon}
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white">{guide.title}</h1>
              <p className="text-white/70 text-sm mt-1">دليل إسعافات أولية — للتوعية التعليمية</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        {/* Emergency summary */}
        <SectionReveal>
          <div className="bg-[#FEF2F2] border-2 border-[#FECACA] rounded-2xl p-6 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-[#D92736] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-bold text-[#D92736] mb-1">ملخص الطوارئ</p>
              <p className="text-[#7F1D1D] text-sm leading-relaxed">{guide.emergencySummary}</p>
            </div>
          </div>
        </SectionReveal>

        {/* Introduction */}
        <SectionReveal>
          <div className="bg-white rounded-2xl border border-[#E8F3FA] p-7">
            <h2 className="font-bold text-[#092D4B] text-xl mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#124A78]" aria-hidden="true" />
              مقدمة
            </h2>
            <p className="text-[#667789] leading-relaxed">{guide.intro}</p>
          </div>
        </SectionReveal>

        {/* Warning signs */}
        {guide.warnings.length > 0 && (
          <SectionReveal>
            <div className="bg-[#FFF7ED] border-2 border-[#FED7AA] rounded-2xl p-7">
              <h2 className="font-bold text-orange-800 text-xl mb-5">⚠️ متى يكون الوضع خطيرًا؟</h2>
              <ul className="space-y-3">
                {guide.warnings.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-sm text-orange-900">
                    <span className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0 mt-1.5" aria-hidden="true" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        )}

        {/* Steps */}
        <SectionReveal>
          <div>
            <h2 className="font-black text-[#092D4B] text-2xl mb-6">خطوات التعامل مع الحالة</h2>
            <div className="space-y-4">
              {guide.steps.map((step, i) => (
                <div
                  key={step.number}
                  className="bg-white rounded-2xl border border-[#E8F3FA] p-6 flex gap-5 hover:border-[#124A78]/30 transition-colors"
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full text-white font-bold flex items-center justify-center text-sm"
                    style={{ backgroundColor: guide.color }}
                    aria-hidden="true"
                  >
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#092D4B] mb-2">{step.title}</h3>
                    <p className="text-[#667789] text-sm leading-relaxed">{step.description}</p>
                    {step.warning && (
                      <p className="mt-3 text-[#D92736] text-xs font-semibold bg-[#FEF2F2] px-3 py-2 rounded-lg inline-flex items-center gap-1.5">
                        <AlertTriangle className="w-3 h-3" aria-hidden="true" />
                        {step.warning}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Avoid list */}
        {guide.avoidList.length > 0 && (
          <SectionReveal>
            <div className="bg-[#FEF2F2] border-2 border-[#FECACA] rounded-2xl p-7">
              <h2 className="font-bold text-red-800 text-xl mb-5 flex items-center gap-2">
                <XCircle className="w-5 h-5" aria-hidden="true" />
                ما الذي يجب تجنّبه؟
              </h2>
              <ul className="space-y-3">
                {guide.avoidList.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-red-900">
                    <span className="text-red-500 font-bold mt-0.5 flex-shrink-0" aria-hidden="true">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        )}

        {/* When to seek help */}
        <SectionReveal>
          <div className="bg-[#F0FDF4] border-2 border-[#86EFAC] rounded-2xl p-7">
            <h2 className="font-bold text-green-800 text-xl mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" aria-hidden="true" />
              متى تطلب المساعدة الطبية؟
            </h2>
            <p className="text-green-900 text-sm leading-relaxed">{guide.whenToSeekHelp}</p>
          </div>
        </SectionReveal>

        {/* Sources */}
        <SectionReveal>
          <div className="bg-[#E8F3FA] rounded-2xl p-7">
            <h2 className="font-bold text-[#124A78] text-xl mb-5">المصادر الطبية</h2>
            <ul className="space-y-4">
              {guide.sources.map((src) => (
                <li key={src.url} className="bg-white rounded-xl p-4 border border-[#BFDBFE]">
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-[#124A78] font-semibold text-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#124A78] rounded"
                  >
                    <ExternalLink className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {src.title}
                  </a>
                  <p className="text-[#667789] text-xs mt-1 mr-6">
                    آخر مراجعة: {src.lastReviewed}
                    {src.pendingReview && ' · المراجعة الطبية المتخصصة قيد الانتظار'}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[#667789] text-xs leading-relaxed">
              هذا الدليل أداة توعية تعليمية فقط. تحقق دائمًا من المعلومات من مصادرها الرسمية الحديثة.
            </p>
          </div>
        </SectionReveal>

        {/* Back link */}
        <div className="text-center">
          <Link
            to="/guides"
            className="inline-flex items-center gap-2 text-[#124A78] font-semibold hover:underline focus-visible:outline-none"
          >
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
            العودة إلى مكتبة الأدلة
          </Link>
        </div>
      </div>
    </div>
  )
}


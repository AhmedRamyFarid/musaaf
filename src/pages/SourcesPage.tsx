import { SectionReveal } from '../components/SectionReveal'
import { ExternalLink, BookOpen, Calendar } from 'lucide-react'
import { guides } from '../data/guides'

const globalSources = [
  {
    org: 'هيئة الصحة الوطنية البريطانية — NHS',
    url: 'https://www.nhs.uk',
    desc: 'مورد شامل للمعلومات الصحية بمراجعة طبية مستمرة.',
    badge: '🇬🇧',
  },
  {
    org: 'الصليب الأحمر الأمريكي',
    url: 'https://www.redcross.org',
    desc: 'دورات تدريبية وموارد تعليمية معتمدة للإسعافات الأولية والإنعاش القلبي الرئوي.',
    badge: '🇺🇸',
  },
  {
    org: 'جمعية القلب الأمريكية — AHA',
    url: 'https://cpr.heart.org',
    desc: 'الإرشادات الدولية للإنعاش القلبي الرئوي وإنعاش الطوارئ القلبية الوعائية.',
    badge: '🫀',
  },
  {
    org: 'المجلس الأوروبي للإنعاش — ERC',
    url: 'https://www.erc.edu',
    desc: 'إرشادات الإنعاش الأوروبية المعتمدة وموارد التدريب على CPR.',
    badge: '🇪🇺',
  },
  {
    org: 'منظمة الصحة العالمية — WHO',
    url: 'https://www.who.int',
    desc: 'بيانات ومعلومات صحية عالمية موثوقة.',
    badge: '🌍',
  },
]

export default function SourcesPage() {
  // Collect all sources from guides, deduplicated
  const allGuideSources = guides.flatMap((g) =>
    g.sources.map((s) => ({ ...s, guideTitle: g.title, guideSlug: g.slug }))
  )

  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <div className="bg-[#092D4B] pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#D92736] text-sm font-bold uppercase tracking-widest mb-3 block">المراجع</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">المصادر الطبية</h1>
          <p className="text-[#E8F3FA]/75 max-w-xl mx-auto">
            جميع الأدلة مبنية على مصادر طبية موثوقة. تحقق دائمًا من آخر المستجدات الطبية من هذه المصادر مباشرة.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Global references */}
        <SectionReveal>
          <h2 className="text-2xl font-black text-[#092D4B] mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-[#124A78]" aria-hidden="true" />
            المصادر الطبية المعتمدة
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {globalSources.map((src) => (
              <a
                key={src.url}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl border-2 border-[#E8F3FA] p-6 hover:border-[#124A78] hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#124A78]"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl" aria-hidden="true">{src.badge}</span>
                  <div>
                    <h3 className="font-bold text-[#092D4B] mb-1 group-hover:text-[#124A78] transition-colors flex items-center gap-1.5">
                      {src.org}
                      <ExternalLink className="w-3.5 h-3.5 opacity-50" aria-hidden="true" />
                    </h3>
                    <p className="text-[#667789] text-sm leading-relaxed">{src.desc}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </SectionReveal>

        {/* Per-guide sources */}
        <SectionReveal>
          <h2 className="text-2xl font-black text-[#092D4B] mb-6">مصادر الأدلة التفصيلية</h2>
          <div className="space-y-4">
            {allGuideSources.map((src, i) => (
              <div key={`${src.url}-${i}`} className="bg-white rounded-2xl border border-[#E8F3FA] p-5">
                <p className="text-xs text-[#667789] mb-2 font-semibold">{src.guideTitle}</p>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#124A78] font-semibold text-sm hover:underline flex items-center gap-1.5 mb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#124A78] rounded"
                >
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                  {src.title}
                </a>
                <div className="flex items-center gap-1 text-xs text-[#667789]">
                  <Calendar className="w-3 h-3" aria-hidden="true" />
                  آخر مراجعة: {src.lastReviewed}
                  {src.pendingReview && ' · المراجعة الطبية المتخصصة قيد الانتظار'}
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Disclaimer */}
        <SectionReveal>
          <div className="bg-[#FEF2F2] border-2 border-[#FECACA] rounded-2xl p-7">
            <h2 className="font-bold text-[#D92736] mb-3">إخلاء المسؤولية</h2>
            <div className="space-y-3 text-sm text-[#7F1D1D] leading-relaxed">
              <p>
                هذا الموقع أداة توعية تعليمية فقط وليس بديلًا عن الرعاية الطبية المتخصصة أو التدريب الطبي المعتمد.
              </p>
              <p>
                المعلومات الطبية تتطور باستمرار. تحقق دائمًا من المصادر الرسمية للحصول على أحدث التوصيات.
              </p>
              <p>
                لم يخضع محتوى هذا الموقع للمراجعة الطبية المتخصصة الرسمية. يعتمد على مصادر طبية موثوقة مشار إليها في كل دليل.
              </p>
              <p>
                في أي حالة طارئة: اتصل بالإسعاف فورًا على الرقم{' '}
                <a href="tel:123" className="font-black underline">123</a>
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  )
}


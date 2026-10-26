import { SectionReveal } from '../components/SectionReveal'
import { AlertTriangle, Info } from 'lucide-react'

const bleedingTypes = [
  {
    id: 'arterial',
    title: 'النزيف الشرياني',
    arabic: 'Arterial Bleeding',
    description:
      'قد يكون النزيف الشرياني غزيرًا أو نابضًا، ويحتاج النزيف الشديد إلى استجابة طارئة.',
    color: '#D92736',
    bg: '#FEF2F2',
    border: '#FECACA',
    icon: '🔴',
    details: [
      'يحدث عند إصابة الشرايين وهي الأوعية الدموية التي تحمل الدم من القلب إلى الجسم.',
      'يتميز أحيانًا بأنه ينبض بتزامن مع دقات القلب.',
      'النزيف الشرياني الغزير يستلزم الاستجابة الطارئة الفورية.',
    ],
    emergency: true,
  },
  {
    id: 'venous',
    title: 'النزيف الوريدي',
    arabic: 'Venous Bleeding',
    description:
      'قد يكون النزيف الوريدي مستمرًا وغزيرًا، ويمكن أن يكون خطيرًا بحسب مكان الإصابة وشدتها.',
    color: '#7C3AED',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    icon: '🟣',
    details: [
      'يحدث عند إصابة الأوردة وهي الأوعية الدموية التي تحمل الدم إلى القلب.',
      'قد يكون تدفق الدم مستمرًا وثابتًا.',
      'قد يكون خطيرًا حسب مكان الإصابة وكميته.',
    ],
    emergency: false,
  },
  {
    id: 'capillary',
    title: 'النزيف الشعيري',
    arabic: 'Capillary Bleeding',
    description:
      'ينتج عادة عن إصابة الأوعية الدموية الصغيرة القريبة من سطح الجلد، وقد يكون محدودًا أو مصحوبًا بنزيف أكبر حسب الإصابة.',
    color: '#0369A1',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    icon: '🔵',
    details: [
      'يحدث عند إصابة الشعيرات الدموية الصغيرة.',
      'يتميز بتدفق دم خفيف ومنتشر من سطح الجرح.',
      'يتوقف في الغالب من تلقاء نفسه عند جروح الخدوش البسيطة.',
      'قد يكون أكبر في الجروح الأوسع.',
    ],
    emergency: false,
  },
]

export default function BleedingTypesPage() {
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#D92736] to-[#9B1C1C] pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-white/70 text-sm font-bold uppercase tracking-widest mb-3 block">الدليل الطبي</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">أنواع النزيف</h1>
          <p className="text-white/75 max-w-2xl mx-auto">
            معلومات توعوية عامة عن أنواع النزيف — لا تستخدم لتشخيص الإصابات أو تقدير خطورتها.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Important note */}
        <SectionReveal>
          <div className="bg-[#FFF7ED] border-2 border-[#FED7AA] rounded-2xl p-6 flex items-start gap-4">
            <Info className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-bold text-orange-800 mb-1">ملاحظة مهمة</p>
              <p className="text-orange-900 text-sm leading-relaxed">
                هذه أوصاف عامة وليست وسيلة كافية لتشخيص نوع الوعاء الدموي أو تقدير خطورة الإصابة.
                لا يمكن تحديد شدة النزيف من لون الدم وحده؛ فكمية الدم ومعدل فقدانه وحالة المصاب علامات أكثر أهمية.
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* Emergency banner */}
        <SectionReveal>
          <div className="bg-[#D92736] rounded-2xl p-6 text-white">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-bold mb-1">متى يكون النزيف خطيرًا؟</p>
                <ul className="text-white/85 text-sm space-y-1">
                  {[
                    'نزيف غزير أو مستمر أو يندفع بقوة.',
                    'وجود علامات قد تشير إلى الصدمة، مثل شحوب الجلد وبرودته أو اضطراب الوعي.',
                    'إصابة عميقة أو وجود جسم مغروس داخل الجرح.',
                    'إصابة خطيرة في الرأس أو الصدر أو البطن أو الرقبة.',
                    'تدهور حالة المصاب أو وجود صعوبة في التنفس.',
                  ].map((w) => (
                    <li key={w} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" aria-hidden="true" />
                      {w}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 font-semibold">
                  إذا كان النزيف شديدًا أو ظهرت علامات خطر، اطلب الإسعاف فورًا{' '}
                  <a href="tel:123" className="underline font-black">123</a>
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Bleeding types */}
        {bleedingTypes.map((type, i) => (
          <SectionReveal key={type.id} delay={i * 0.1}>
            <div
              className="rounded-3xl border-2 p-8"
              style={{ backgroundColor: type.bg, borderColor: type.border }}
            >
              <div className="flex items-start gap-5">
                <div className="text-4xl" aria-hidden="true">{type.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h2
                      className="text-xl font-black"
                      style={{ color: type.color }}
                    >
                      {type.title}
                    </h2>
                    <span className="text-xs text-[#667789] font-mono">{type.arabic}</span>
                    {type.emergency && (
                      <span className="bg-[#D92736] text-white text-xs px-2 py-0.5 rounded-full font-bold">
                        طارئ
                      </span>
                    )}
                  </div>
                  <p className="text-[#667789] mb-5 leading-relaxed text-sm">{type.description}</p>
                  <ul className="space-y-2">
                    {type.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm" style={{ color: type.color.replace(')', ')/0.8') }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: type.color }} aria-hidden="true" />
                        <span className="text-[#092D4B]">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </SectionReveal>
        ))}

        {/* Reminder */}
        <SectionReveal>
          <div className="bg-[#E8F3FA] rounded-2xl p-7 text-center">
            <p className="text-[#124A78] font-bold text-lg mb-2">في جميع حالات النزيف:</p>
            <p className="text-[#667789] text-sm leading-relaxed">
              ابدأ بالضغط المباشر على الجرح، واطلب المساعدة الطبية عند أي شك أو خطر.
              الإسعاف في مصر: <a href="tel:123" className="font-black text-[#D92736] underline">123</a>
            </p>
          </div>
        </SectionReveal>
      </div>
    </div>
  )
}


import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown, ArrowLeft, AlertTriangle, Phone } from 'lucide-react'
import { HeroIllustration } from '../components/HeroIllustration'
import { GuideCategoryGrid } from '../components/GuideCategoryGrid'
import { SectionReveal, StaggerReveal, staggerItem } from '../components/SectionReveal'
import { Quiz } from '../components/Quiz'
import { KitGrid } from '../components/KitGrid'
import { guides } from '../data/guides'
import { TeamSection } from '../components/TeamSection'

const bleedingGuide = guides.find((g) => g.id === 'bleeding')!

export default function HomePage() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section
        className="relative min-h-screen bg-gradient-to-br from-[#092D4B] via-[#124A78] to-[#0a3a60] flex items-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background subtle pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #D92736 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, #E8F3FA 0%, transparent 50%)`,
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-white/10 text-[#E8F3FA] text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-white/20"
              >
                <span className="w-2 h-2 bg-[#D92736] rounded-full animate-pulse" aria-hidden="true" />
                مبادرة توعوية للإسعافات الأولية
              </motion.div>

              <motion.h1
                id="hero-heading"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4"
              >
                مُسعف في
                <br />
                <span className="text-[#D92736]">كل مكان</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-xl text-[#E8F3FA]/90 font-semibold mb-4"
              >
                الإسعافات الأولية.. معرفة بسيطة قد تنقذ حياة
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="text-[#E8F3FA]/75 text-base leading-relaxed mb-8 max-w-lg"
              >
                معرفة التصرف الصحيح في اللحظة المناسبة قد تساعد على حماية الحياة وتقليل المضاعفات.
                تعرّف على المبادئ الأساسية للإسعافات الأولية من خلال أدلة تعليمية واضحة ورسوم توضيحية ومصادر طبية موثوقة.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                <Link
                  to="/guides"
                  className="inline-flex items-center gap-2 bg-[#D92736] text-white px-7 py-3.5 rounded-2xl font-bold text-base hover:bg-[#b71c2c] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  استكشف دليل الإسعافات
                  <ArrowLeft className="w-5 h-5" aria-hidden="true" />
                </Link>
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-7 py-3.5 rounded-2xl font-semibold text-base hover:bg-white/20 transition-all duration-200 border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  تعرّف على المبادرة
                </a>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-[#E8F3FA]/50 text-sm italic"
              >
                لأن سلامتك وسلامة الآخرين مسؤوليتنا جميعًا.
              </motion.p>
            </div>

            {/* Right: illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
              aria-hidden="true"
            >
              <div className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[440px] lg:h-[440px]">
                <HeroIllustration />
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-1"
            aria-hidden="true"
          >
            <span className="text-xs">تمرير</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-20 bg-white" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block text-[#D92736] text-sm font-bold uppercase tracking-widest mb-4">عن المبادرة</span>
              <h2 id="about-heading" className="text-3xl sm:text-4xl font-black text-[#092D4B] mb-6">
                معًا.. لنشر الوعي ونصنع فرقًا
              </h2>
              <p className="text-[#667789] text-lg leading-relaxed mb-6">
                مُسعف في كل مكان مبادرة توعوية تهدف إلى نشر المعرفة الأساسية بالإسعافات الأولية،
                وتشجيع الأفراد على التعرف على التصرفات الصحيحة في المواقف الطارئة،
                ومعرفة متى يجب طلب المساعدة الطبية المتخصصة.
              </p>
              <p className="text-[#092D4B]/60 text-sm italic">
                الوعي بداية التصرف الصحيح، والتعلّم المستمر خطوة نحو مجتمع أكثر استعدادًا.
              </p>
            </div>
          </SectionReveal>

          {/* Affiliation */}
          <SectionReveal delay={0.1}>
            <div className="bg-[#E8F3FA] rounded-3xl p-8 text-center max-w-lg mx-auto">
              <div className="text-4xl mb-4" aria-hidden="true">🎓</div>
              <h3 className="font-bold text-[#124A78] text-lg mb-1">جامعة عين شمس</h3>
              <p className="text-[#667789]">كلية التربية النوعية</p>
              <p className="text-xs text-[#667789] mt-3 italic">
                Ain Shams University — Faculty of Specific Education
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===== EMERGENCY BANNER ===== */}
      <section className="bg-[#D92736] py-6" aria-label="معلومات الطوارئ">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Phone className="w-6 h-6 text-white" aria-hidden="true" />
          <span className="text-white font-bold text-xl">في أي حالة طوارئ: اتصل فورًا بالإسعاف 123</span>
          <a
            href="tel:123"
            className="bg-white text-[#D92736] px-6 py-2 rounded-full font-black text-lg hover:bg-[#E8F3FA] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="اتصل بالإسعاف 123"
          >
            123
          </a>
        </div>
      </section>

      {/* ===== GUIDE CATEGORIES ===== */}
      <section className="py-20 bg-[#FAFBFD]" aria-labelledby="guides-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="text-[#D92736] text-sm font-bold uppercase tracking-widest mb-3 block">أدلة الإسعافات</span>
              <h2 id="guides-heading" className="text-3xl sm:text-4xl font-black text-[#092D4B]">
                دليل الإسعافات التفاعلي
              </h2>
              <p className="text-[#667789] mt-3 max-w-xl mx-auto">
                أدلة تعليمية مبنية على مصادر طبية موثوقة — اختر الحالة لعرض الخطوات التفصيلية.
              </p>
            </div>
          </SectionReveal>
          <GuideCategoryGrid />
        </div>
      </section>

      {/* ===== FEATURED GUIDE: BLEEDING ===== */}
      <section className="py-20 bg-white" aria-labelledby="bleeding-guide-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="text-[#D92736] text-sm font-bold uppercase tracking-widest mb-3 block">دليل مميز</span>
              <h2 id="bleeding-guide-heading" className="text-3xl sm:text-4xl font-black text-[#092D4B]">
                التعامل مع النزيف
              </h2>
            </div>
          </SectionReveal>

          <div className="max-w-4xl mx-auto">
            {/* Emergency summary */}
            <SectionReveal>
              <div className="bg-[#FEF2F2] border-2 border-[#FECACA] rounded-2xl p-6 mb-8 flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-[#D92736] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-bold text-[#D92736] mb-1">ملخص الطوارئ</p>
                  <p className="text-[#7F1D1D] text-sm leading-relaxed">{bleedingGuide.emergencySummary}</p>
                </div>
              </div>
            </SectionReveal>

            {/* Steps */}
            <div className="space-y-4">
              {bleedingGuide.steps.map((step, i) => (
                <SectionReveal key={step.number} delay={i * 0.08}>
                  <div className="bg-[#FAFBFD] rounded-2xl border border-[#E8F3FA] p-6 flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#124A78] text-white font-bold flex items-center justify-center text-sm" aria-hidden="true">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#092D4B] mb-1">{step.title}</h3>
                      <p className="text-[#667789] text-sm leading-relaxed">{step.description}</p>
                      {step.warning && (
                        <p className="mt-2 text-[#D92736] text-xs font-semibold bg-[#FEF2F2] px-3 py-2 rounded-lg inline-block">
                          ⚠ {step.warning}
                        </p>
                      )}
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal delay={0.3}>
              <div className="mt-8 text-center">
                <Link
                  to="/guides/bleeding"
                  className="inline-flex items-center gap-2 bg-[#124A78] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#092D4B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#124A78]"
                >
                  عرض الدليل الكامل
                  <ArrowLeft className="w-5 h-5" aria-hidden="true" />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ===== DO / DON'T ===== */}
      <section className="py-20 bg-[#FAFBFD]" aria-labelledby="dos-donts-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="text-[#D92736] text-sm font-bold uppercase tracking-widest mb-3 block">للوعي والتوعية</span>
              <h2 id="dos-donts-heading" className="text-3xl sm:text-4xl font-black text-[#092D4B]">
                افعل / تجنّب
              </h2>
              <p className="text-[#667789] mt-2">في التعامل مع نزيف الجروح</p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <SectionReveal>
              <div className="bg-[#F0FDF4] border-2 border-[#86EFAC] rounded-2xl p-7">
                <h3 className="font-bold text-green-800 text-lg mb-5 flex items-center gap-2">
                  <span aria-hidden="true">✅</span> افعل
                </h3>
                <ul className="space-y-3">
                  {[
                    'تأكد من سلامة المكان أولًا.',
                    'استخدم القفازات الواقية إن توفرت.',
                    'اضغط بثبات ومباشرة على الجرح.',
                    'اطلب الإسعاف فورًا عند الضرورة.',
                    'راقب مستوى وعي المصاب وتنفسه.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-green-900">
                      <span className="text-green-600 font-bold mt-0.5" aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="bg-[#FEF2F2] border-2 border-[#FECACA] rounded-2xl p-7">
                <h3 className="font-bold text-red-800 text-lg mb-5 flex items-center gap-2">
                  <span aria-hidden="true">❌</span> تجنّب
                </h3>
                <ul className="space-y-3">
                  {bleedingGuide.avoidList.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-red-900">
                      <span className="text-red-600 font-bold mt-0.5" aria-hidden="true">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ===== KIT ===== */}
      <section className="py-20 bg-white" aria-labelledby="kit-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="text-[#D92736] text-sm font-bold uppercase tracking-widest mb-3 block">الإعداد</span>
              <h2 id="kit-heading" className="text-3xl sm:text-4xl font-black text-[#092D4B]">
                حقيبة الإسعافات الأولية
              </h2>
              <p className="text-[#667789] mt-3 max-w-xl mx-auto">
                مستلزمات أساسية يُنصح بتوافرها. امتلاكها لا يُغني عن التدريب الطبي المعتمد.
              </p>
            </div>
          </SectionReveal>
          <KitGrid />
          <SectionReveal delay={0.2}>
            <div className="text-center mt-8">
              <Link
                to="/kit"
                className="inline-flex items-center gap-2 border-2 border-[#124A78] text-[#124A78] px-7 py-3.5 rounded-2xl font-bold hover:bg-[#124A78] hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#124A78]"
              >
                عرض الكل
                <ArrowLeft className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===== QUIZ ===== */}
      <section className="py-20 bg-[#FAFBFD]" aria-labelledby="quiz-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="text-[#D92736] text-sm font-bold uppercase tracking-widest mb-3 block">اختبار تعليمي</span>
              <h2 id="quiz-heading" className="text-3xl sm:text-4xl font-black text-[#092D4B]">
                اختبر معلوماتك
              </h2>
              <p className="text-[#667789] mt-3 max-w-xl mx-auto">
                اختبار توعوي للتعليم فقط — ليس شهادة كفاءة طبية.
              </p>
            </div>
          </SectionReveal>
          <Quiz />
        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
      <TeamSection />

      {/* ===== CLOSING CTA ===== */}
      <section className="py-20 bg-[#092D4B]" aria-labelledby="closing-heading">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionReveal>
            <h2 id="closing-heading" className="text-3xl sm:text-4xl font-black text-white mb-4">
              الوعي.. حماية لحياتك
            </h2>
            <p className="text-[#E8F3FA]/75 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              قد تكون أول شخص يساعد المصاب. تعلّم المبادئ الأساسية، وتصرف بأمان، واطلب المساعدة المتخصصة في الوقت المناسب.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/guides"
                className="bg-[#D92736] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#b71c2c] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                ابدأ التعلم
              </Link>
              <Link
                to="/sources"
                className="bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-colors border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                المصادر الطبية
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  )
}


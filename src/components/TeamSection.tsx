import { motion } from 'framer-motion'
import { SectionReveal, StaggerReveal, staggerItem } from './SectionReveal'

// =====================================================================
// بيانات فريق العمل — مستخرجة من أسماء الملفات الفعلية
// الترتيب: دكتور المادة أولاً، ليدر التيم ثانياً، ثم الأعضاء
// =====================================================================

interface TeamMember {
  name: string
  role: string
  image: string
  isProfessor?: boolean
  isLeader?: boolean
}

const teamMembers: TeamMember[] = [
  // 1. دكتور المادة
  {
    name: 'د. منى الزناتي',
    role: 'أستاذ مقرر الإسعافات الأولية',
    image: '/team/د. منى الزناتي - أستاذ مقرر الأسعافات الأولية.jpeg',
    isProfessor: true,
  },
  // 2. ليدر التيم
  {
    name: 'يوسف عبداللا ربيع',
    role: 'ليدر الفريق',
    image: '/team/يوسف عبداللا ربيع - ليدر.jpg',
    isLeader: true,
  },
  // 3. باقي الأعضاء
  {
    name: 'أحمد رامي فريد',
    role: 'عضو الفريق',
    image: '/team/أحمد رامي فريد - عضو.jpg',
  },
  {
    name: 'عبدالرحمن حمدي محمود',
    role: 'عضو الفريق',
    image: '/team/عبدالرحمن حمدي محمود - عضو.jpeg',
  },
  {
    name: 'علياء عاصم عبدالسميع',
    role: 'عضو الفريق',
    image: '/team/علياء عاصم عبدالسميع.jpg',
  },
  {
    name: 'مريم محمد علي محمد مبارك',
    role: 'عضو الفريق',
    image: '/team/مريم محمد علي محمد مبارك - عضو.jpg',
  },
  {
    name: 'ملك فرج سعيد',
    role: 'عضو الفريق',
    image: '/team/ملك فرج سعيد - عضو.jpeg',
  },
]

// =====================================================================
// بطاقة عضو بارز (دكتور المادة / ليدر)
// =====================================================================
function FeaturedCard({ member }: { member: TeamMember }) {
  const badgeColor = member.isProfessor
    ? { bg: '#D92736', text: 'أستاذة المقرر' }
    : { bg: '#124A78', text: 'ليدر الفريق' }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="bg-white rounded-3xl overflow-hidden border-2 border-[#E8F3FA] shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
    >
      {/* صورة */}
      <div className="relative overflow-hidden" style={{ paddingTop: '85%' }}>
        <img
          src={member.image}
          alt={`صورة ${member.name}`}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        {/* شارة الدور */}
        <div className="absolute top-3 right-3">
          <span
            className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold shadow-md"
            style={{ backgroundColor: badgeColor.bg }}
          >
            {badgeColor.text}
          </span>
        </div>
        {/* gradient أسفل الصورة */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
      </div>

      {/* البيانات */}
      <div className="p-5 text-center flex-1 flex flex-col justify-center">
        <h3 className="font-black text-[#092D4B] text-lg leading-snug mb-1">{member.name}</h3>
        <p className="text-sm font-medium" style={{ color: badgeColor.bg }}>
          {member.role}
        </p>
      </div>
    </motion.div>
  )
}

// =====================================================================
// بطاقة عضو عادي
// =====================================================================
function MemberCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl overflow-hidden border border-[#E8F3FA] shadow-sm hover:shadow-xl hover:border-[#124A78]/30 transition-all duration-300 flex flex-col"
    >
      {/* صورة */}
      <div className="relative overflow-hidden" style={{ paddingTop: '90%' }}>
        <img
          src={member.image}
          alt={`صورة ${member.name}`}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* البيانات */}
      <div className="p-4 text-center flex-1 flex flex-col justify-center">
        <h3 className="font-bold text-[#092D4B] text-sm leading-snug mb-1">{member.name}</h3>
        <p className="text-xs text-[#667789] font-medium">{member.role}</p>
      </div>
    </motion.div>
  )
}

// =====================================================================
// القسم الرئيسي
// =====================================================================
export function TeamSection() {
  const professor = teamMembers.find((m) => m.isProfessor)
  const leader = teamMembers.find((m) => m.isLeader)
  const others = teamMembers.filter((m) => !m.isProfessor && !m.isLeader)

  return (
    <section
      className="py-20 bg-[#FAFBFD]"
      aria-labelledby="team-heading"
      id="team"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== اللوجوهات والبيانات الأكاديمية ===== */}
        <SectionReveal>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 p-6 bg-white rounded-3xl border border-[#E8F3FA] shadow-sm max-w-2xl mx-auto">
            {/* لوجو الكلية */}
            <div className="flex-shrink-0">
              <img
                src="/logos/faculty - logo.png"
                alt="شعار كلية التربية النوعية"
                className="h-20 w-auto object-contain"
                loading="lazy"
              />
            </div>

            {/* فاصل */}
            <div className="hidden sm:block w-px h-16 bg-[#E8F3FA]" aria-hidden="true" />

            {/* البيانات الأكاديمية */}
            <div className="text-center sm:text-right">
              <p className="font-black text-[#092D4B] text-base leading-snug">جامعة عين شمس</p>
              <p className="font-bold text-[#124A78] text-sm mt-0.5">كلية التربية النوعية</p>
              <p className="font-medium text-[#667789] text-xs mt-0.5">قسم تكنولوجيا التعليم</p>
            </div>

            {/* فاصل */}
            <div className="hidden sm:block w-px h-16 bg-[#E8F3FA]" aria-hidden="true" />

            {/* لوجو القسم */}
            <div className="flex-shrink-0">
              <img
                src="/logos/department - logo.png"
                alt="شعار قسم تكنولوجيا التعليم"
                className="h-20 w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </SectionReveal>

        {/* ===== عنوان القسم ===== */}
        <SectionReveal>
          <div className="text-center mb-14">
            <span className="text-[#D92736] text-sm font-bold uppercase tracking-widest mb-3 block">
              من نحن
            </span>
            <h2
              id="team-heading"
              className="text-3xl sm:text-4xl font-black text-[#092D4B] mb-4"
            >
              فريق العمل
            </h2>
            <p className="text-[#667789] text-base max-w-xl mx-auto leading-relaxed">
              وراء كل مبادرة مؤثرة فريق يجمعه العلم والعمل من أجل إنقاذ الأرواح.
            </p>
            {/* خط زخرفي */}
            <div className="flex items-center justify-center gap-3 mt-6" aria-hidden="true">
              <div className="h-px w-16 bg-[#E8F3FA]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#D92736]" />
              <div className="h-px w-16 bg-[#E8F3FA]" />
            </div>
          </div>
        </SectionReveal>

        {/* ===== البطاقات البارزة: دكتور المادة + ليدر ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 max-w-2xl mx-auto">
          {professor && <FeaturedCard member={professor} />}
          {leader && <FeaturedCard member={leader} />}
        </div>

        {/* فاصل بسيط */}
        <SectionReveal>
          <div className="flex items-center gap-4 mb-8 max-w-4xl mx-auto">
            <div className="flex-1 h-px bg-[#E8F3FA]" aria-hidden="true" />
            <span className="text-[#667789] text-sm font-semibold whitespace-nowrap">أعضاء الفريق</span>
            <div className="flex-1 h-px bg-[#E8F3FA]" aria-hidden="true" />
          </div>
        </SectionReveal>

        {/* ===== شبكة بقية الأعضاء ===== */}
        <StaggerReveal className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {others.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </StaggerReveal>

      </div>
    </section>
  )
}


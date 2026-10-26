import { SectionReveal } from '../components/SectionReveal'
import { GuideSearch } from '../components/GuideSearch'

export default function GuidesLibraryPage() {
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      {/* Header */}
      <div className="bg-[#092D4B] pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#D92736] text-sm font-bold uppercase tracking-widest mb-3 block">مكتبة الأدلة</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">دليل الإسعافات</h1>
          <p className="text-[#E8F3FA]/70 max-w-xl mx-auto">
            ابحث عن الحالة التي تحتاج معلومات عنها، أو تصفح الفئات المتاحة.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionReveal>
          <GuideSearch />
        </SectionReveal>
      </div>
    </div>
  )
}


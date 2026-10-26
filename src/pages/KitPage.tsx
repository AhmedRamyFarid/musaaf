import { SectionReveal } from '../components/SectionReveal'
import { KitGrid } from '../components/KitGrid'
import { AlertTriangle } from 'lucide-react'

export default function KitPage() {
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <div className="bg-[#124A78] pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#D92736] text-sm font-bold uppercase tracking-widest mb-3 block">الإعداد المسبق</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">حقيبة الإسعافات الأولية</h1>
          <p className="text-[#E8F3FA]/75 max-w-xl mx-auto">
            مستلزمات يُنصح بتوافرها في المنزل والسيارة وبيئة العمل.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <SectionReveal>
          <div className="bg-[#FFF7ED] border-2 border-[#FED7AA] rounded-2xl p-6 flex items-start gap-4 max-w-3xl mx-auto">
            <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-orange-900 text-sm leading-relaxed">
              امتلاك حقيبة إسعافات لا يُغني عن التدريب الطبي المعتمد على الإسعافات الأولية.
              تأكد من التحقق من صلاحية المحتويات وتجديدها بانتظام.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal>
          <KitGrid />
        </SectionReveal>

        <SectionReveal>
          <div className="bg-[#092D4B] rounded-3xl p-8 text-center max-w-2xl mx-auto">
            <p className="text-white font-bold text-lg mb-2">رقم الإسعاف في مصر</p>
            <a
              href="tel:123"
              className="text-6xl font-black text-[#D92736] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
              aria-label="اتصل بالإسعاف 123"
            >
              123
            </a>
            <p className="text-[#E8F3FA]/60 text-sm mt-2">احتفظ بهذا الرقم في مكان ظاهر</p>
          </div>
        </SectionReveal>
      </div>
    </div>
  )
}


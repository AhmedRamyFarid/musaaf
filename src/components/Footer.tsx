import { Link } from 'react-router-dom'
import { Heart, Phone, ExternalLink } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#092D4B] text-white" role="contentinfo">
      {/* Emergency Banner */}
      <div className="bg-[#D92736] py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-right">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" aria-hidden="true" />
            <span className="font-bold text-lg">في حالة الطوارئ: اتصل بـ 123</span>
          </div>
          <span className="text-white/80 text-sm">رقم الإسعاف المعتمد في جمهورية مصر العربية</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#D92736] rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white fill-white" aria-hidden="true" />
              </div>
              <span className="font-bold text-xl">مُسعف في كل مكان</span>
            </div>
            <p className="text-[#E8F3FA]/70 text-sm leading-relaxed mb-4">
              مبادرة توعوية تهدف إلى نشر المعرفة الأساسية بالإسعافات الأولية.
            </p>
            <div className="text-[#E8F3FA]/60 text-xs space-y-1">
              <div>جامعة عين شمس</div>
              <div>كلية التربية النوعية</div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-[#E8F3FA] mb-4 text-sm uppercase tracking-wider">أقسام الموقع</h3>
            <ul className="space-y-2">
              {[
                { href: '/guides', label: 'دليل الإسعافات' },
                { href: '/bleeding-types', label: 'أنواع النزيف' },
                { href: '/kit', label: 'حقيبة الإسعافات' },
                { href: '/quiz', label: 'اختبر معلوماتك' },
                { href: '/sources', label: 'المصادر الطبية' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-[#E8F3FA]/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sources */}
          <div>
            <h3 className="font-semibold text-[#E8F3FA] mb-4 text-sm uppercase tracking-wider">مصادر طبية موثوقة</h3>
            <ul className="space-y-2">
              {[
                { href: 'https://www.nhs.uk', label: 'هيئة الصحة الوطنية — NHS' },
                { href: 'https://www.redcross.org', label: 'الصليب الأحمر الأمريكي' },
                { href: 'https://cpr.heart.org', label: 'جمعية القلب الأمريكية' },
                { href: 'https://www.erc.edu', label: 'المجلس الأوروبي للإنعاش' },
              ].map((src) => (
                <li key={src.href}>
                  <a
                    href={src.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E8F3FA]/60 hover:text-white text-sm transition-colors flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                    {src.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="bg-white/5 rounded-xl p-5 mb-6">
            <p className="text-[#E8F3FA]/70 text-sm leading-relaxed text-center">
              <strong className="text-[#E8F3FA]">تنبيه مهم:</strong>{' '}
              هذا الموقع أداة توعية تعليمية فقط ولا يُغني عن التدريب الطبي المعتمد أو الرعاية الصحية المتخصصة.
              تحقق دائمًا من المعلومات الطبية من مصادرها الرسمية الحديثة.
              في الحالات الطارئة، اتصل بالإسعاف <strong>123</strong> فورًا.
            </p>
          </div>
          <div className="text-center text-[#E8F3FA]/40 text-xs">
            <p>© {new Date().getFullYear()} مبادرة مُسعف في كل مكان — جامعة عين شمس، كلية التربية النوعية</p>
            <p className="mt-1">"معًا.. لنشر الوعي ونصنع فرقًا"</p>
          </div>
        </div>
      </div>
    </footer>
  )
}


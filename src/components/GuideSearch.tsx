import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, X, ArrowLeft } from 'lucide-react'
import { guides } from '../data/guides'

export function GuideSearch() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories = [
    { id: 'all', label: 'الكل' },
    { id: 'bleeding', label: 'النزيف' },
    { id: 'burns', label: 'الحروق' },
    { id: 'choking', label: 'الاختناق' },
    { id: 'cpr', label: 'الإنعاش' },
    { id: 'allergy', label: 'الحساسية' },
    { id: 'fainting', label: 'الإغماء' },
    { id: 'sprains', label: 'الالتواءات' },
    { id: 'nosebleed', label: 'نزيف الأنف' },
  ]

  const filtered = useMemo(() => {
    return guides.filter((g) => {
      const matchQuery =
        query.trim() === '' ||
        g.title.includes(query) ||
        g.intro.includes(query) ||
        g.steps.some((s) => s.title.includes(query) || s.description.includes(query))
      const matchCategory = activeCategory === 'all' || g.category === activeCategory
      return matchQuery && matchCategory
    })
  }, [query, activeCategory])

  return (
    <div>
      {/* Search bar */}
      <div className="relative mb-6">
        <label htmlFor="guide-search" className="sr-only">ابحث في الأدلة</label>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#667789]">
          <Search className="w-5 h-5" aria-hidden="true" />
        </div>
        <input
          id="guide-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ابحث بكلمة مفتاحية..."
          dir="rtl"
          className="w-full pr-12 pl-12 py-4 rounded-2xl border-2 border-[#E8F3FA] bg-white text-[#092D4B] placeholder-[#667789] focus:outline-none focus:border-[#124A78] text-base font-medium transition-colors"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#667789] hover:text-[#092D4B] focus-visible:outline-none"
            aria-label="مسح البحث"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="تصفية حسب الفئة">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            aria-pressed={activeCategory === cat.id}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#124A78] ${
              activeCategory === cat.id
                ? 'bg-[#124A78] text-white shadow-md'
                : 'bg-[#E8F3FA] text-[#124A78] hover:bg-[#124A78] hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-[#092D4B] mb-2">لا توجد نتائج</h3>
          <p className="text-[#667789]">جرّب كلمات مختلفة أو غيّر الفئة المحددة.</p>
          <button
            onClick={() => { setQuery(''); setActiveCategory('all') }}
            className="mt-4 text-[#124A78] font-semibold hover:underline focus-visible:outline-none"
          >
            مسح الفلاتر
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((guide) => (
            <Link
              key={guide.id}
              to={`/guides/${guide.slug}`}
              className="group bg-white rounded-2xl border-2 border-[#E8F3FA] p-6 hover:border-[#124A78] hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#124A78]"
            >
              <div className="text-3xl mb-3" aria-hidden="true">{guide.icon}</div>
              <h3 className="font-bold text-[#092D4B] mb-2 group-hover:text-[#124A78] transition-colors">
                {guide.title}
              </h3>
              <p className="text-sm text-[#667789] leading-relaxed line-clamp-2">
                {guide.intro.substring(0, 100)}...
              </p>
              <div className="flex items-center gap-1 mt-3 text-xs font-semibold text-[#124A78]">
                <span>اقرأ الدليل</span>
                <ArrowLeft className="w-3 h-3" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}


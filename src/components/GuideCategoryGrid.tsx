import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { guides } from '../data/guides'
import { StaggerReveal, staggerItem } from './SectionReveal'

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  bleeding: { bg: '#FEF2F2', text: '#D92736', border: '#FECACA' },
  burns: { bg: '#FFF7ED', text: '#C2410C', border: '#FED7AA' },
  nosebleed: { bg: '#FFF1F2', text: '#BE123C', border: '#FECDD3' },
  choking: { bg: '#EFF6FF', text: '#1D4ED8', border: '#BFDBFE' },
  fainting: { bg: '#F8FAFC', text: '#475569', border: '#CBD5E1' },
  sprains: { bg: '#F0FDF4', text: '#15803D', border: '#BBF7D0' },
  allergy: { bg: '#FEF2F2', text: '#DC2626', border: '#FECACA' },
  cpr: { bg: '#FFF1F2', text: '#D92736', border: '#FECDD3' },
}

export function GuideCategoryGrid() {
  return (
    <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {guides.map((guide) => {
        const colors = categoryColors[guide.category] ?? { bg: '#F8FAFC', text: '#124A78', border: '#E2E8F0' }
        return (
          <motion.div key={guide.id} variants={staggerItem}>
            <Link
              to={`/guides/${guide.slug}`}
              className="group block rounded-2xl p-6 border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{
                backgroundColor: colors.bg,
                borderColor: colors.border,
              }}
              aria-label={`دليل: ${guide.title}`}
            >
              <div
                className="text-4xl mb-4 w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: colors.border }}
                aria-hidden="true"
              >
                {guide.icon}
              </div>
              <h3
                className="font-bold text-base mb-2 group-hover:underline"
                style={{ color: colors.text }}
              >
                {guide.title}
              </h3>
              <p className="text-xs text-[#667789] leading-relaxed line-clamp-2">
                {guide.intro.substring(0, 80)}...
              </p>
              <div
                className="flex items-center gap-1 mt-4 text-xs font-semibold"
                style={{ color: colors.text }}
              >
                <span>اقرأ الدليل</span>
                <ArrowLeft className="w-3 h-3" aria-hidden="true" />
              </div>
            </Link>
          </motion.div>
        )
      })}
    </StaggerReveal>
  )
}


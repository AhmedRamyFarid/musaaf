import { kitItems } from '../data/kit'
import { StaggerReveal, staggerItem } from './SectionReveal'
import { motion } from 'framer-motion'

export function KitGrid() {
  return (
    <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {kitItems.map((item) => (
        <motion.div
          key={item.id}
          variants={staggerItem}
          className="bg-white rounded-2xl border-2 border-[#E8F3FA] p-6 hover:border-[#124A78] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
          <h3 className="font-bold text-[#092D4B] mb-2 text-sm">{item.name}</h3>
          <p className="text-xs text-[#667789] leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </StaggerReveal>
  )
}


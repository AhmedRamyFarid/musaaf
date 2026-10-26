import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Heart, Phone } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'المبادرة' },
  { href: '/guides', label: 'دليل الإسعافات' },
  { href: '/bleeding-types', label: 'أنواع النزيف' },
  { href: '/kit', label: 'حقيبة الإسعافات' },
  { href: '/quiz', label: 'اختبر معلوماتك' },
  { href: '/sources', label: 'المصادر الطبية' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#092D4B]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="التنقل الرئيسي">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D92736] rounded-lg p-1" aria-label="الصفحة الرئيسية — مُسعف في كل مكان">
            <div className="relative">
              <div className="w-9 h-9 bg-[#D92736] rounded-full flex items-center justify-center heartbeat">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
            </div>
            <div>
              <span className="block text-white font-bold text-base sm:text-lg leading-tight">مُسعف في كل مكان</span>
              <span className="block text-[#E8F3FA]/70 text-xs leading-tight">مبادرة توعوية</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.href
                    ? 'bg-white/15 text-white'
                    : 'text-[#E8F3FA]/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Emergency + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:123"
              className="hidden sm:flex items-center gap-1.5 bg-[#D92736] text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-[#b71c2c] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="اتصل بالإسعاف 123"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>إسعاف 123</span>
            </a>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D92736]"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'أغلق القائمة' : 'افتح القائمة'}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pb-4 space-y-1 border-t border-white/10 pt-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === link.href
                        ? 'bg-white/15 text-white'
                        : 'text-[#E8F3FA]/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="tel:123"
                  className="flex items-center gap-2 px-4 py-3 bg-[#D92736] text-white rounded-lg font-bold text-sm"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>اتصل بالإسعاف — 123</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}


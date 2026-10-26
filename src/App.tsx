import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import GuidePage from './pages/GuidePage'
import GuidesLibraryPage from './pages/GuidesLibraryPage'
import BleedingTypesPage from './pages/BleedingTypesPage'
import KitPage from './pages/KitPage'
import QuizPage from './pages/QuizPage'
import SourcesPage from './pages/SourcesPage'

export default function App() {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guides" element={<GuidesLibraryPage />} />
          <Route path="/guides/:slug" element={<GuidePage />} />
          <Route path="/bleeding-types" element={<BleedingTypesPage />} />
          <Route path="/kit" element={<KitPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/sources" element={<SourcesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

import { lazy, Suspense } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Home from '@/pages/Home'

const CareersHub = lazy(() => import('@/pages/CareersHub'))
const ConnectionsPage = lazy(() => import('@/pages/Connections'))
const MediaPage = lazy(() => import('@/pages/Media'))
const PreviousEvents = lazy(() => import('@/pages/PreviousEvents'))
const NotFound = lazy(() => import('@/pages/NotFound'))

function App() {
  return (
    <Router>
      <div role="document">
        {/* Skip Link - First element for accessibility */}
        <a
          className="absolute left-[6px] top-[-60px] z-[100] bg-white px-2 py-1 text-black focus:top-[6px]"
          href="#main-content"
        >
          Skip to main content
        </a>
        <Suspense
          fallback={
            <div
              className="flex min-h-screen items-center justify-center"
              aria-live="polite"
              aria-busy="true"
            >
              <span className="text-lg text-gray-600">Loading…</span>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/careers-hub" element={<CareersHub />} />
            <Route path="/connections" element={<ConnectionsPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/previous-events" element={<PreviousEvents />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App

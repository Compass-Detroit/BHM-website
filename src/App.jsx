import { lazy, Suspense, useEffect, useState } from 'react'
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'

import Home from '@/pages/Home'
import { loadMySchedule, saveMySchedule } from '@/utils/scheduleStorage'

const CareersHub = lazy(() => import('@/pages/CareersHub'))
const ConnectionsPage = lazy(() => import('@/pages/Connections'))
const MediaPage = lazy(() => import('@/pages/Media'))
const MySchedule = lazy(() => import('@/pages/MySchedule'))
const PreviousEvents = lazy(() => import('@/pages/PreviousEvents'))
const NotFound = lazy(() => import('@/pages/NotFound'))

function App() {
  const [mySchedule, setMySchedule] = useState(() => loadMySchedule())

  useEffect(() => {
    saveMySchedule(mySchedule)
  }, [mySchedule])

  const removeSessionFromSchedule = (sessionId) => {
    setMySchedule((current) =>
      current.filter((session) => session.id !== sessionId)
    )
  }

  const toggleSessionInSchedule = (session) => {
    setMySchedule((current) => {
      const exists = current.some((saved) => saved.id === session.id)
      if (exists) {
        return current.filter((saved) => saved.id !== session.id)
      }

      return [...current, session]
    })
  }

  return (
    <Router>
      <div role="document">
        {/* Skip Link - First element for accessibility; hidden until Tab focus */}
        <a className="skip-link" href="#main-content">
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
            <Route
              path="/"
              element={
                <Home
                  mySchedule={mySchedule}
                  onToggleSchedule={toggleSessionInSchedule}
                />
              }
            />
            <Route
              path="/my-schedule"
              element={
                <MySchedule
                  mySchedule={mySchedule}
                  onRemoveSession={removeSessionFromSchedule}
                />
              }
            />
            <Route path="/careers-hub" element={<CareersHub />} />
            <Route path="/connections" element={<ConnectionsPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/past-events" element={<PreviousEvents />} />
            <Route
              path="/previous-events"
              element={<Navigate to="/past-events" replace />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App

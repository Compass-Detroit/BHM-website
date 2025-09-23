import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Home from '@/pages/Home'
import PreviousEvents from '@/pages/PreviousEvents'
import PreviousEvent from '@/pages/PreviousEvent'
import NotFound from '@/pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/previous-events" element={<PreviousEvents />} />
        <Route path="/previous-events/:year" element={<PreviousEvent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App

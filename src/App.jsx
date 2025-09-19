import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Home from '@/pages/Home'
import PreviousEvents from '@/pages/PreviousEvents'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/previous-events" element={<PreviousEvents />} />
      </Routes>
    </Router>
  )
}

export default App

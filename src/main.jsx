import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'

inject()
injectSpeedInsights()

// Initialize axe-core for accessibility testing in development mode
if (import.meta.env.DEV) {
  import('@axe-core/react')
    .then((axe) => {
      try {
        axe.default(React, ReactDOM, 1000)
      } catch (err) {
        console.warn('axe-core failed to initialize:', err)
      }
    })
    .catch((err) => {
      console.warn('axe-core failed to load:', err)
    })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

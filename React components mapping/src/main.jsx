import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Pictures from './components/Pictures'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pictures />
  </StrictMode>,
)

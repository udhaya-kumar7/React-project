import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Advice } from './Advice.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <div>
 <Advice/>
  </div>
  </StrictMode>,
)

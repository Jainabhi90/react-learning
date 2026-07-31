import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import Context from './class-4/A.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Context.Provider value={"hehehehhehehehheheheheheh"}>
      <App />
    </Context.Provider>
    
    </BrowserRouter>
)

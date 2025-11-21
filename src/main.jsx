import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import ContactcontextProvider, { } from './context/ContactContext.jsx'
import ContactContextProvider from './context/ContactContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <div className='container'>
    <BrowserRouter>
        <ContactContextProvider>
            <App />
        </ContactContextProvider>
    </BrowserRouter>
  </div>
)

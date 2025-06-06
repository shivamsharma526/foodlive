import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import ContextApi from './ContextApi.jsx'
createRoot(document.getElementById('root')).render(
    <ContextApi>
<BrowserRouter>
<App/>
</BrowserRouter>
</ContextApi>
)

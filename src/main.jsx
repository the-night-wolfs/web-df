import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/js/bootstrap.bundle';
import './styles/custom.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <Router>
      <App />
    </Router>
)
import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './login'
import Signup from './signup'

type Page = 'home' | 'login' | 'signup';

function Router() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: Page): void => {
    setCurrentPage(page);
  };

  switch (currentPage) {
    case 'login':
      return <Login onNavigate={navigate} />;
    case 'signup':
      return <Signup onNavigate={navigate} />;
    default:
      return <App onNavigate={navigate} />;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Router />)
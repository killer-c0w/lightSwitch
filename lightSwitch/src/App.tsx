import { useState } from 'react'
import './App.css'
import lightswitchUp from './assets/lightswitchUP.png'
import lightswitchDown from './assets/lightswitchDOWN.png'


// Exportable state for backend integration
export interface SwitchState {
  isOn: boolean;
  clickCount: number;
}

interface AppProps {
  onNavigate: (page: 'home' | 'login' | 'signup') => void;
}

function App({ onNavigate }: AppProps) {
  const [isUp, setIsUp] = useState<boolean>(true);
  const [clickCount, setClickCount] = useState<number>(0);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    setIsUp(!isUp);
    setClickCount(prev => prev + 1);
  };

  // Accessible state for backend
  const switchState: SwitchState = {
    isOn: isUp,
    clickCount: clickCount
  };

  // Function to send to backend (you can call this when needed)
  const sendToBackend = async (): Promise<void> => {
    console.log('Sending to backend:', switchState);
    // await fetch('/api/switch', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(switchState)
    // });
  };

  return (
    <div className={`root ${isUp ? 'light-mode' : 'dark-mode'}`}>
      <nav className="nav-bar">
        <button className="nav-btn" onClick={() => onNavigate('login')}>
          Login
        </button>
        <button className="nav-btn" onClick={() => onNavigate('signup')}>
          Sign Up
        </button>
      </nav>

      <div className="content">
        <a href="#" className="switchFrame" onClick={handleClick}>
          <img
            id="switchableImage"
            src={isUp ? lightswitchUp : lightswitchDown}
            alt="Switchable Image"
          />
        </a>
        <p className="click-count">Clicks: {clickCount}</p>
      </div>
    </div>
  )
}

export default App
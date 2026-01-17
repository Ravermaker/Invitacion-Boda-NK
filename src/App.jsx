import { useState, useRef } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import InvitationScreen from './components/InvitationScreen';
import './index.css';

function App() {
  const [step, setStep] = useState('welcome'); // 'welcome' | 'invite'
  const [guestName, setGuestName] = useState('');
  const audioRef = useRef(null);

  const playMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('./mi historia de amor.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
    }
    audioRef.current.play().catch(e => console.log("Audio play failed", e));
  };

  const handleWelcomeComplete = (name) => {
    setGuestName(name);
    playMusic();
    setStep('invite');
    window.scrollTo(0, 0);
  };

  return (
    <div className="app-container">
      {step === 'welcome' && (
        <WelcomeScreen onComplete={handleWelcomeComplete} />
      )}

      {step === 'invite' && (
        <div className="main-content fade-in">
          <InvitationScreen guestName={guestName} />
        </div>
      )}
    </div>
  );
}

export default App;


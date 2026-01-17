import { useState } from 'react';

const WelcomeScreen = ({ onComplete }) => {
    const [name, setName] = useState('');
    const [isFading, setIsFading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            setIsFading(true);

            setTimeout(() => {
                onComplete(name);
            }, 1000); // Wait for fade out
        }
    };

    return (
        <div className={`welcome-container ${isFading ? 'fade-out' : ''}`}>
            <div className="monogram">N & K</div>
            <form onSubmit={handleSubmit} className="welcome-form">
                <p className="welcome-text">Es un honor para nosotros tenerte aquí.<br />Por favor, ingresa tu nombre completo.</p>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu Nombre"
                    className="name-input"
                />
                <button type="submit" className="enter-button" disabled={!name.trim()}>
                    Ingresar
                </button>
            </form>
        </div>
    );
};

export default WelcomeScreen;

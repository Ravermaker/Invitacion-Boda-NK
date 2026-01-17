import { useState } from 'react';
import { motion } from 'framer-motion';

const RSVP = () => {
    const [status, setStatus] = useState(null); // 'attending', 'not_attending'
    const [guests, setGuests] = useState(1);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Logic to save RSVP could go here
    };

    if (submitted) {
        return (
            <motion.div
                className="rsvp-container"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <div className="rsvp-success">
                    <h2 className="font-script text-gold" style={{ fontSize: '3rem' }}>¡Gracias!</h2>
                    <p>Tu respuesta ha sido registrada con éxito.</p>
                    <p className="text-ruby" style={{ marginTop: '20px', fontStyle: 'italic' }}>Nos hace mucha ilusión compartir este día contigo.</p>
                </div>
            </motion.div>
        );
    }

    return (
        <section className="rsvp-container" id="rsvp">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="font-cinematic text-ruby">Confirmar Asistencia</h2>
                <p className="rsvp-intro">Por favor, confírmanos tu asistencia antes del 1 de Junio de 2026</p>

                <form onSubmit={handleSubmit} className="rsvp-form">
                    <div className="radio-group">
                        <div
                            className={`radio-option ${status === 'attending' ? 'selected' : ''}`}
                            onClick={() => setStatus('attending')}
                        >
                            <span>Asistiré</span>
                        </div>
                        <div
                            className={`radio-option ${status === 'not_attending' ? 'selected' : ''}`}
                            onClick={() => setStatus('not_attending')}
                        >
                            <span>No podré asistir</span>
                        </div>
                    </div>

                    {status === 'attending' && (
                        <motion.div
                            className="guest-count"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                        >
                            <label>Número de acompañantes:</label>
                            <input
                                type="number"
                                min="1"
                                max="10"
                                value={guests}
                                onChange={(e) => setGuests(e.target.value)}
                            />
                        </motion.div>
                    )}

                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={!status}
                    >
                        Confirmar
                    </button>
                </form>
            </motion.div>
        </section>
    );
};

export default RSVP;

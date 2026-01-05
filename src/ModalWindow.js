import React, {useState, useCallback, useEffect} from "react";
import './ModalWindow.css'

const ModalWindow = ({show, onClose, children}) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleKeyDown = useCallback((event) => {
        if (event.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (show) {
            setIsVisible(true);
            document.addEventListener('keydown', handleKeyDown);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 800);
            document.removeEventListener('keydown', handleKeyDown);
            return () => clearTimeout(timer);
        }
    }, [show, handleKeyDown]);

    useEffect(() => {
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown])



    return (
    <div className={`modal-backdrop ${show ? 'show' : ''}`}
        style={{display: isVisible ? 'flex' : 'none'}} onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose} className="modal-close-button" aria-label="Close modal"></button>
            {children}
            <div style={{display: "flex"}}>
                <a href="https://t.me/" target="_blank" className="social-button">
                    <span className="social-icon telegram"></span>
                    <span>Telegram</span>
                </a>
                <a href="https://wa.me/" target="_blank" className="social-button">
                    <span className="social-icon whatsapp"></span>
                    <span>WhatsApp</span>
                </a>
            </div>
        </div>
    </div>
)
};

export default ModalWindow;
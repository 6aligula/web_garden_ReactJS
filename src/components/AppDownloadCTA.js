import React, {useState} from 'react';
import playStore from '../img/logoJM_cuadrado.png'
import './styles/AppDownloadCTA.css'

const AppDownloadCTA = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="logo-container left-floating-button">
            <button className="close-button" onClick={() => setIsVisible(false)}>x</button>
            <a href="https://play.google.com/store/apps/details?id=com.jmjardiners&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                <img src={playStore} alt="Descargar en Play Store" />
                <p className='text-below-logo'>¡Descarga nuestra app móvil!</p>
            </a>
            {/* <p className='text-below-logo'>¡Descarga nuestra app móvil!</p> */}
        </div>
    );
}

export default AppDownloadCTA;
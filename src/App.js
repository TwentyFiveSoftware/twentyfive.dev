import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDiscord, faGithub, faItchIo} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

import {ReactComponent as Logo} from './assets/twentyfivesoftware-logo.svg';

export default function App() {
    return (
        <div className="app">
            <div className="header">
                <div className="logo"/>
            </div>
            <div className="content">
                <div className="logo">
                    <Logo/>
                </div>
                <div className="icons">
                    <a href={'https://github.com/TwentyFiveSoftware/'} className="icon-container">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                    <a href={'https://twentyfive.itch.io/'} className="icon-container">
                        <FontAwesomeIcon icon={faItchIo}/>
                    </a>
                    <a href={'https://discord.gg/5eEr4Pd'} className="icon-container">
                        <FontAwesomeIcon icon={faDiscord}/>
                    </a>
                    <a href={'mailto:twentyfivesoftware@gmail.com'} className="icon-container">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </a>
                </div>
            </div>

            <div className="mountain"/>
        </div>
    );
}

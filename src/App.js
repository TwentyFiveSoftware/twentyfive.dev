import React from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faGithub, faItchIo} from '@fortawesome/free-brands-svg-icons';
// import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
// import {ReactComponent as Logo} from './assets/twentyfivesoftware-logo.svg';

export default function App() {
    return (
        <div className="app">
            <div className={'landing-zone'}>
                <div className={'landing-zone__background-image'}/>
                <div className={'landing_zone__logo'}></div>

                <div className={'landing-zone__bottom'}>
                    <a href={'#projects'} className={'button button--filled'}>Explore my projects</a>
                    <a href={'https://www.github.com/TwentyFiveSoftware'} className={'button'}>Visit me on Github</a>
                </div>
            </div>
            <div className={'projects-zone'} id={'projects'}>
                <div className={'projects-zone__title-container'}>
                    <div className={'projects-zone__title'}>PROJECTS</div>
                    <div className={'projects-zone__subtitle'}>A selection of my latest projects that you can find on Github.</div>
                </div>
                <div className={'projects-zone__list'}>
                    <div className={'project'}>
                        <div className={'project__image'}>LOGO</div>
                        <div className={'project__info'}>
                            <div className={'project__name'}>Calculator</div>
                            <div className={'project__description'}>A simple minimalistic calculator for the web.</div>
                            <div className={'project__buttons'}>
                                <a href={'https://twentyfivesoftware.github.io/calculator/'} className={'button'}>Open Website</a>
                                <a href={'https://www.github.com/TwentyFiveSoftware/calculator'} className={'button'}>View on Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'footer'}>
                <a href={'https://www.github.com/TwentyFiveSoftware'}>Github</a>
                <a href={'mailto:TwentyFiveSoftware@gmail.com'}>Mail</a>
                <a href={'https://twentyfive.itch.io/'}>Itch</a>
            </div>
        </div>
    );
}

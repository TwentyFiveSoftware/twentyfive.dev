import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown, faAngleRight, faCalculator} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
// import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import TwentyFiveIcon from './assets/icon.png';

export default function App() {
    return (
        <div className="app">
            <div className={'landing-zone'}>
                <div className={'landing-zone__background-image'}/>
                <div className={'landing-zone__logo'}/>
                <img className={'landing-zone__icon'} src={TwentyFiveIcon} alt={''}/>
                <a href={'#projects'} className={'landing-zone__angle'}><FontAwesomeIcon icon={faAngleDown}/></a>
            </div>
            <div className={'projects-zone'} id={'projects'}>
                <div>
                    <div className={'projects-zone__title'}>PROJECTS</div>
                    <div className={'projects-zone__subtitle'}>A selection of my latest projects that you can find on Github.</div>
                </div>
                <div className={'projects-zone__list'}>
                    <div className={'project'}>
                        <div className={'project__image'}><FontAwesomeIcon icon={faCalculator}/></div>
                        <div className={'project__info'}>
                            <div className={'project__name'}>Calculator</div>
                            <div className={'project__description'}>A simple minimalistic calculator for the web.</div>
                            <div className={'project__buttons'}>
                                <a href={'https://twentyfivesoftware.github.io/calculator/'} className={'button button--icon-right'}>Open Website<FontAwesomeIcon icon={faAngleRight}/></a>
                                <a href={'https://www.github.com/TwentyFiveSoftware/calculator'} className={'button'}><FontAwesomeIcon icon={faGithub}/>Visit on Github</a>
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

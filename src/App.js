import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faItchIo} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

import {ReactComponent as TwentyFiveIcon} from './assets/icon.svg';
import ProjectElement from './components/ProjectElement';

import {COLORS, PROJECTS} from './content';

export default function App() {
    return (
        <div className="app">
            <div className={'landing-zone'}>
                <div className={'landing-zone__background-image'}/>
                <div className={'landing-zone__icon'}><TwentyFiveIcon/></div>
                <div className={'landing-zone__overlay'}>
                    <div className={'landing-zone__logo'}/>
                    <div className={'landing-zone__social-buttons'}>
                        <a className={'social-button'} href={'https://www.github.com/TwentyFiveSoftware'}><FontAwesomeIcon icon={faGithub}/></a>
                        <a className={'social-button'} href={'mailto:TwentyFiveSoftware@gmail.com'}><FontAwesomeIcon icon={faEnvelope}/></a>
                        <a className={'social-button'} href={'https://twentyfive.itch.io/'}><FontAwesomeIcon icon={faItchIo}/></a>
                    </div>
                </div>
                <a href={'#projects'} className={'landing-zone__angle'}><FontAwesomeIcon icon={faAngleDown}/></a>
            </div>
            <div className={'projects-zone'} id={'projects'}>
                <div>
                    <div className={'projects-zone__title'}>PROJECTS</div>
                    <div className={'projects-zone__subtitle'}>A selection of my latest projects. All of them are open source on GitHub.</div>
                </div>
                <div className={'projects-zone__list'}>
                    {PROJECTS.map((project, index) =>
                        <ProjectElement project={project} color={COLORS[index]} key={index}/>
                    )}
                </div>
            </div>
            <div className={'footer'}>
                <a className={'social-button'} href={'https://www.github.com/TwentyFiveSoftware'}><FontAwesomeIcon icon={faGithub}/></a>
                <a className={'social-button'} href={'mailto:TwentyFiveSoftware@gmail.com'}><FontAwesomeIcon icon={faEnvelope}/></a>
                <a className={'social-button'} href={'https://twentyfive.itch.io/'}><FontAwesomeIcon icon={faItchIo}/></a>
            </div>
        </div>
    );
}

import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown, faCalculator, faNewspaper} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faItchIo} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

import {ReactComponent as TwentyFiveIcon} from './assets/icon.svg';
import FuncturyLogo from './assets/functury-logo.png';
import Project from './components/Project';

export default function App() {
    let projects = [
        {
            image: <FontAwesomeIcon icon={faCalculator}/>,
            name: 'Calculator',
            description: 'A simple minimalistic calculator for the web.',
            projectUrl: 'https://calculator.twentyfive.dev/',
            githubUrl: 'https://www.github.com/TwentyFiveSoftware/calculator',
            colors: {
                from: '#FCB76B',
                to: '#FB8080',
                buttons: '#FC9C76'
            }
        },
        {
            image: <FontAwesomeIcon icon={faNewspaper}/>,
            name: 'NewsHub',
            description: 'A central location showing all new articles of many newspaper websites.',
            projectUrl: 'https://newshub.twentyfive.dev/',
            githubUrl: 'https://github.com/TwentyFiveSoftware/NewsHub',
            colors: {
                from: '#8EF7AA',
                to: '#DFF494',
                buttons: '#B7F69F'
            }
        },
        {
            image: <img alt={'f'} src={FuncturyLogo} style={{height: '70%'}}/>,
            name: 'functury',
            description: 'A website that brings together all the important information for various math functions.',
            projectUrl: 'https://functury.web.app/',
            githubUrl: 'https://www.github.com/TwentyFiveSoftware/functury',
            colors: {
                from: '#9CFCF8',
                to: '#6E7BFB',
                buttons: '#83B8F9'
            }
        },
    ];

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
                    {projects.map((project, index) =>
                        <Project project={project} key={index}/>
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

import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown, faAngleRight, faCalculator, faNewspaper} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faItchIo} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import TwentyFiveIcon from './assets/icon.png';
import FuncturyLogo from './assets/functury-logo.png';

export default function App() {
    let projects = [
        {
            image: <FontAwesomeIcon icon={faCalculator}/>,
            name: 'Calculator',
            description: 'A simple minimalistic calculator for the web.',
            projectUrl: 'https://twentyfivesoftware.github.io/calculator/',
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
                <img className={'landing-zone__icon'} src={TwentyFiveIcon} alt={''}/>
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
                    <div className={'projects-zone__subtitle'}>A selection of my latest projects. All of them are open source on <a href={'https://www.github.com/TwentyFiveSoftware'}>Github</a>.</div>
                </div>
                <div className={'projects-zone__list'}>
                    {projects.map((project, index) =>
                        <div className={'project'} key={index}>
                            <div className={'project__image'} style={{background: `linear-gradient(to bottom right, ${project.colors.from}, ${project.colors.to})`}}>
                                {project.image}
                            </div>
                            <div className={'project__info'}>
                                <div className={'project__name'}>{project.name}</div>
                                <div className={'project__description'}>{project.description}</div>
                                <div className={'project__buttons'}>
                                    <a href={project.projectUrl} className={'button button--icon-right'} style={{color: project.colors.buttons, borderColor: project.colors.buttons}}>Open Website<FontAwesomeIcon icon={faAngleRight}/></a>
                                    <a href={project.githubUrl} className={'button'} style={{color: project.colors.buttons, borderColor: project.colors.buttons}}><FontAwesomeIcon icon={faGithub}/>Visit on Github</a>
                                </div>
                            </div>
                        </div>
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

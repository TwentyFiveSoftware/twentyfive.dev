import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faItchIo} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

import styles from './styles/App.module.scss';

import {ReactComponent as TwentyFiveIcon} from './assets/icon.svg';
import ProjectList from './components/ProjectList';

const App = () => (
    <>
        <section className={styles.landingZone}>
            <div className={styles.background}/>
            <div className={styles.icon}><TwentyFiveIcon/></div>
            <div className={styles.overlay}>
                <div className={styles.logo}/>
                <div className={styles.socialButtons}>
                    <a className={styles.socialButton} href={'https://www.github.com/TwentyFiveSoftware'}><FontAwesomeIcon icon={faGithub}/></a>
                    <a className={styles.socialButton} href={'mailto:TwentyFiveSoftware@gmail.com'}><FontAwesomeIcon icon={faEnvelope}/></a>
                    <a className={styles.socialButton} href={'https://twentyfive.itch.io/'}><FontAwesomeIcon icon={faItchIo}/></a>
                </div>
            </div>
            <a href={'#projects'} className={styles.angle}><FontAwesomeIcon icon={faAngleDown}/></a>
        </section>
        <main className={styles.projectsZone} id={'projects'}>
            <div>
                <h1 className={styles.title}>PROJECTS</h1>
                <p className={styles.subtitle}>A selection of my latest projects. All of them are open source on GitHub.</p>
            </div>
            <ProjectList/>
        </main>
        <footer className={styles.footer}>
            <a className={styles.socialButton} href={'https://www.github.com/TwentyFiveSoftware'}><FontAwesomeIcon icon={faGithub}/></a>
            <a className={styles.socialButton} href={'mailto:TwentyFiveSoftware@gmail.com'}><FontAwesomeIcon icon={faEnvelope}/></a>
            <a className={styles.socialButton} href={'https://twentyfive.itch.io/'}><FontAwesomeIcon icon={faItchIo}/></a>
        </footer>
    </>
);

export default App;
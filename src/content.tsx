import {faCalculator, faNewspaper, faVideo} from '@fortawesome/free-solid-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';

import FuncturyLogo from './assets/functury-logo.png';
import type {Color, Project} from './types';


export const COLORS: Color[] = [
    {from: '#D74C7F', to: '#EE4758', buttons: '#EF4859'},
    {from: '#FCB76B', to: '#FB8080', buttons: '#FC9C76'},
    {from: '#8EF7AA', to: '#DFF494', buttons: '#B7F69F'},
    {from: '#9CFCF8', to: '#6E7BFB', buttons: '#83B8F9'},
    {from: '#D7B6FC', to: '#8460FC', buttons: '#B795FC'}
];

export const PROJECTS: Project[] = [
    {
        name: 'Watch2Gether (Clone)',
        githubRepoName: 'watch2gether-client',
        image: {fontAwesomeIcon: faYoutube}
    },
    {
        name: 'Video Recorder',
        githubRepoName: 'Video-Recorder',
        image: {fontAwesomeIcon: faVideo}
    },
    {
        name: 'Calculator',
        githubRepoName: 'calculator',
        image: {fontAwesomeIcon: faCalculator}
    },
    {
        name: 'NewsHub',
        githubRepoName: 'NewsHub',
        image: {fontAwesomeIcon: faNewspaper}
    },
    {
        name: 'functury',
        githubRepoName: 'functury',
        image: {image: FuncturyLogo, imageStyle: {height: '70%'}}
    }
];

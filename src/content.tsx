import {faCalculator, faKeyboard, faRocket, faShare, faVideo} from '@fortawesome/free-solid-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import type {Color, Project} from './types';

export const COLORS: Color[] = [
    {from: '#D74C7F', to: '#EE4758', buttons: '#EF4859'},
    {from: '#FCB76B', to: '#FB8080', buttons: '#FC9C76'},
    {from: '#8EF7AA', to: '#DFF494', buttons: '#B7F69F'},
    {from: '#9CFCF8', to: '#6E7BFB', buttons: '#83B8F9'},
    {from: '#7BCAD1', to: '#77A1D3', buttons: '#7BCAD1'},
    {from: '#D7B6FC', to: '#8460FC', buttons: '#B795FC'}
];

export const PROJECTS: Project[] = [
    {
        name: 'SpaceX',
        fullName: 'TwentyFiveSoftware/spacex',
        image: {fontAwesomeIcon: faRocket}
    },
    {
        name: 'TypeRace',
        fullName: 'TwentyFiveSoftware/typerace',
        image: {fontAwesomeIcon: faKeyboard}
    },
    {
        name: 'FileShare',
        fullName: 'TwentyFiveSoftware/fileshare',
        image: {fontAwesomeIcon: faShare}
    },
    {
        name: 'Watch2Gether (Clone)',
        fullName: 'TwentyFiveSoftware/watch2gether-client',
        image: {fontAwesomeIcon: faYoutube}
    },
    {
        name: 'Video Recorder',
        fullName: 'TwentyFiveSoftware/Video-Recorder',
        image: {fontAwesomeIcon: faVideo}
    },
    {
        name: 'Calculator',
        fullName: 'TwentyFiveSoftware/calculator',
        image: {fontAwesomeIcon: faCalculator}
    }
];

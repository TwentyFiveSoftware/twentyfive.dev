import Color from './models/Color';
import Project from './models/Project';
import ImageInfo from './models/ImageInfo';

import {faCalculator, faNewspaper, faVideo} from '@fortawesome/free-solid-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';

import FuncturyLogo from './assets/functury-logo.png';


export const COLORS = [
    new Color('#D74C7F', '#EE4758', '#EF4859'),
    new Color('#FCB76B', '#FB8080', '#FC9C76'),
    new Color('#8EF7AA', '#DFF494', '#B7F69F'),
    new Color('#9CFCF8', '#6E7BFB', '#83B8F9'),
    new Color('#D7B6FC', '#8460FC', '#B795FC')
];

export const PROJECTS = [
    new Project(
        'Watch2Gether (Clone)',
        new ImageInfo(faYoutube),
        'An approach to implement the video synchronization mechanic of the original Watch2Gether (w2g.tv).',
        'https://github.com/TwentyFiveSoftware/watch2gether-client',
        'https://w2g.twentyfive.dev/'),
    new Project(
        'Video Recorder',
        new ImageInfo(faVideo),
        'A simple client side screen recorder.',
        'https://github.com/TwentyFiveSoftware/Video-Recorder',
        'https://recorder.twentyfive.dev/'),
    new Project(
        'Calculator',
        new ImageInfo(faCalculator),
        'A simple minimalistic calculator for the web.',
        'https://github.com/TwentyFiveSoftware/calculator',
        'https://calculator.twentyfive.dev/'),
    new Project(
        'NewsHub',
        new ImageInfo(faNewspaper),
        'A central location showing all new articles of many newspaper websites.',
        'https://github.com/TwentyFiveSoftware/NewsHub',
        'https://newshub.twentyfive.dev/'),
    new Project(
        'functury',
        new ImageInfo(null, FuncturyLogo, {height: '70%'}),
        'A website that brings together all the important information for various math functions.',
        'https://github.com/TwentyFiveSoftware/functury',
        'https://functury.twentyfive.dev')
];

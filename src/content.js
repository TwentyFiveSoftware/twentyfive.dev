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
        'watch2gether-client',
        new ImageInfo(faYoutube)
    ),
    new Project(
        'Video Recorder',
        'Video-Recorder',
        new ImageInfo(faVideo),
    ),
    new Project(
        'Calculator',
        'calculator',
        new ImageInfo(faCalculator)
    ),
    new Project(
        'NewsHub',
        'NewsHub',
        new ImageInfo(faNewspaper),
    ),
    new Project(
        'functury',
        'functury',
        new ImageInfo(null, FuncturyLogo, {height: '70%'})
    )
];

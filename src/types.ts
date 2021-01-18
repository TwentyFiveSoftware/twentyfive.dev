import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

export type ImageInfo = {
    fontAwesomeIcon?: IconDefinition,
    image?: any,
    imageStyle?: { height: string }
}

export type Project = {
    name: string,
    githubRepoName: string,
    image: ImageInfo
}

export type Color = {
    from: string,
    to: string,
    buttons: string
}

export type ProjectInfo = {
    description: '',
    homepage: '',
    githubUrl: ''
}
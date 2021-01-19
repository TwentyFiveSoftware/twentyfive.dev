import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

export type ImageInfo = {
    fontAwesomeIcon?: IconDefinition,
    image?: any,
    imageStyle?: { height: string }
}

export type Color = {
    from: string,
    to: string,
    buttons: string
}

export interface Project {
    name: string,
    fullName: string,
    image: ImageInfo
}

export interface ProjectInfo extends Project {
    description: string,
    homepage: string,
    github: string,
}
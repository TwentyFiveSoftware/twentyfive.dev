import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Color {
    from: string;
    to: string;
    buttons: string;
}

export interface Project {
    name: string;
    fullName: string;
    image: IconDefinition;
}

export interface ProjectInfo extends Project {
    description: string;
    homepage: string;
    github: string;
}

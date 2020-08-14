import React from 'react';
import Fade from 'react-reveal/Fade';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

const Project = ({project}) => {
    const {image, name, description, projectUrl, githubUrl, colors} = project;

    return (
        <Fade bottom distance={'5em'}>
            <div className={'project'}>
                <div className={'project__image'} style={{background: `linear-gradient(to bottom right, ${colors.from}, ${colors.to})`}}>
                    {image}
                </div>
                <div className={'project__info'}>
                    <div className={'project__name'}>{name}</div>
                    <div className={'project__description'}>{description}</div>
                    <div className={'project__buttons'}>
                        <a href={projectUrl} className={'button button--icon-right'} style={{color: colors.buttons, borderColor: colors.buttons}}>Open Website<FontAwesomeIcon icon={faAngleRight}/></a>
                        <a href={githubUrl} className={'button'} style={{color: colors.buttons, borderColor: colors.buttons}}><FontAwesomeIcon icon={faGithub}/>Visit on Github</a>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Project;

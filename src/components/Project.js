import React from 'react';
import Fade from 'react-reveal/Fade';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

const Button = ({icon, iconRight, text, color, href}) => (
    <a href={href} className={`button ${iconRight && 'button--icon-right'}`} style={{color: color, borderColor: color}}>
        {!iconRight && <FontAwesomeIcon icon={icon}/>}
        {text}
        {iconRight && <FontAwesomeIcon icon={icon}/>}
    </a>
);

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
                        <Button icon={faAngleRight} iconRight={true} href={projectUrl} color={colors.buttons} text={'Open Website'}/>
                        <Button icon={faGithub} iconRight={false} href={githubUrl} color={colors.buttons} text={'Visit on Github'}/>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Project;

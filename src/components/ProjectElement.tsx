import React, {FunctionComponent} from 'react';
import {Fade} from 'react-awesome-reveal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

import styles from '../styles/ProjectElement.module.scss';

import type {Color, ProjectInfo} from '../types';
import Button from './Button';

const ProjectElement: FunctionComponent<{ project: ProjectInfo, color: Color }> = ({project, color}) => {
    const {name, image, description, github, homepage} = project;

    return (
        <Fade direction={'up'} cascade={true} triggerOnce={true} className={styles.project}>
            <>
                <figure className={styles.image} style={{background: `linear-gradient(to bottom right, ${color.from}, ${color.to})`}}>
                    {image.fontAwesomeIcon && <FontAwesomeIcon icon={image.fontAwesomeIcon}/>}
                    {!image.fontAwesomeIcon && <img alt={''} src={image.image} style={image.imageStyle}/>}
                </figure>
                <article className={styles.info} itemScope itemType={'http://schema.org/Project'}>
                    <h2 className={styles.name} itemProp={'name'}>{name}</h2>
                    <p className={styles.description} itemProp={'description'}>{description}</p>
                    <div className={styles.buttons}>
                        <Button icon={faAngleRight} iconRight={true} href={homepage} color={color.buttons} text={'Open Website'} itemProp={'url'}/>
                        <Button icon={faGithub} iconRight={false} href={github} color={color.buttons} text={'Visit on Github'} itemProp={'identifier'}/>
                    </div>
                </article>
            </>
        </Fade>
    );
}

export default ProjectElement;

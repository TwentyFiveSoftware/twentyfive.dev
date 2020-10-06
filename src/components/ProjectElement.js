import React, {Component} from 'react';
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

export default class ProjectElement extends Component {
    state = {
        project: this.props.project,
        description: '',
        projectUrl: '',
        githubUrl: ''
    }

    componentDidMount() {
        this.state.project.fetchGithubRepoInfo()
            .then(({description, githubUrl, projectUrl}) =>
                this.setState({description, githubUrl, projectUrl}));
    }

    render() {
        const {color} = this.props;
        const {name, image} = this.state.project;
        const {description, githubUrl, projectUrl} = this.state;

        return (
            <Fade bottom distance={'5em'}>
                <div className={'project'}>
                    <div className={'project__image'} style={{background: `linear-gradient(to bottom right, ${color.from}, ${color.to})`}}>
                        {image.fontAwesomeIcon === null ?
                            <img alt={''} src={image.image} style={image.imageStyle}/> :
                            <FontAwesomeIcon icon={image.fontAwesomeIcon}/>
                        }
                    </div>
                    <div className={'project__info'}>
                        <div className={'project__name'}>{name}</div>
                        <div className={'project__description'}>{description}</div>
                        <div className={'project__buttons'}>
                            <Button icon={faAngleRight} iconRight={true} href={projectUrl} color={color.buttons} text={'Open Website'}/>
                            <Button icon={faGithub} iconRight={false} href={githubUrl} color={color.buttons} text={'Visit on Github'}/>
                        </div>
                    </div>
                </div>
            </Fade>
        );
    }
}

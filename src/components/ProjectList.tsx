import React, { FunctionComponent, useEffect, useState } from 'react';
import * as styles from '../styles/App.module.scss';
import type { ProjectInfo } from '../types';
import { COLORS, PROJECTS } from '../content';
import ProjectElement from './ProjectElement';

const ProjectList: FunctionComponent = (): JSX.Element => {
    const [projects, setProjects] = useState<ProjectInfo[]>([]);

    useEffect(() => {
        (async () => {
            const response = await fetch('https://api.github.com/users/TwentyFiveSoftware/repos');
            const repos = await response.json();

            setProjects(
                PROJECTS.map((project) => {
                    const { homepage = '', description = '', html_url = '' } =
                        repos.find((repo: { full_name: string }) => repo.full_name === project.fullName) ?? {};
                    return { ...project, homepage, description, github: html_url };
                }),
            );
        })();
    }, []);

    return (
        <ul className={styles.list}>
            {projects.map((project, index) => (
                <ProjectElement project={project} color={COLORS[index]} key={index} />
            ))}
        </ul>
    );
};

export default ProjectList;

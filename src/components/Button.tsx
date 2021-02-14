import React, {FunctionComponent} from 'react';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import styles from '../styles/Button.module.scss';

const Button: FunctionComponent<{ icon: IconDefinition, iconRight: boolean, text: string, color: string, href: string, itemProp: string }> =
    ({icon, iconRight, text, color, href, itemProp}) => (
        <a href={href} className={iconRight ? styles.button__iconRight : styles.button} style={{color: color, borderColor: color}} itemProp={itemProp}>
            {!iconRight && <FontAwesomeIcon icon={icon}/>}
            {text}
            {iconRight && <FontAwesomeIcon icon={icon}/>}
        </a>
    );

export default Button;
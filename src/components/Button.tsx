import React, { FunctionComponent } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as styles from '../styles/Button.module.scss';

interface Props {
    icon: IconDefinition;
    iconRight: boolean;
    text: string;
    color: string;
    href: string;
    itemProp: string;
}

const Button: FunctionComponent<Props> = ({ icon, iconRight, text, color, href, itemProp }: Props): JSX.Element => (
    <a
        href={href}
        className={iconRight ? styles.button__iconRight : styles.button}
        style={{ color: color, borderColor: color }}
        itemProp={itemProp}
    >
        {!iconRight && <FontAwesomeIcon icon={icon} />}
        {text}
        {iconRight && <FontAwesomeIcon icon={icon} />}
    </a>
);

export default Button;

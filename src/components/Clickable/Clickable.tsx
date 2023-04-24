import { classNames } from '../../utils';
import styles from './Clickable.module.scss';
import React from 'react'

type Props = {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}

const Clickable = ({ onClick, children, className }: Props) => {
    return <button className={classNames([styles.clickable, className])} onClick={onClick}>{children}</button>
}

export default Clickable
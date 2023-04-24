import Clock from "../Clock/Clock"
import { classNames } from '../../utils';
import { selectIsMenuOpen } from "../../redux/displayModeSlice"
import { selectNewsCount } from "../../redux/newsCountSlice"
import styles from './Footer.module.scss'
import useSelector from "../../hooks/useSelector"
import React from 'react'

const Footer = () => {
    const newsCount = useSelector(selectNewsCount)
    const isMenuOpen = useSelector(selectIsMenuOpen)
    return (
        <footer className={classNames([styles.footer, !newsCount && !isMenuOpen && styles.noArticles])}>
            <span className={styles.newsCount}>News count: <strong>{newsCount}</strong></span>
            <Clock />
        </footer>)
}

export default Footer
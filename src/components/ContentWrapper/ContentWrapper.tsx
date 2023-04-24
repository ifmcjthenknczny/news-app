import { Route, Routes } from 'react-router';
import Content from '../Content/Content';
import { ROUTES } from '../../consts';
import SideMenu from '../SideMenu/SideMenu';
import { selectIsMenuOpen } from '../../redux/displayModeSlice';
import { setNewsCount } from '../../redux/newsCountSlice';
import styles from './ContentWrapper.module.scss';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react'
import useIsMobile from '../../hooks/useIsMobile';
import { useLocation } from 'react-router';
import useSelector from '../../hooks/useSelector';

const ContentWrapper = () => {
    const isMobile = useIsMobile()
    const { pathname } = useLocation()
    const dispatch = useDispatch()
    const isMenuOpen = useSelector(selectIsMenuOpen)

    useEffect(() => {
        dispatch(setNewsCount(0))
    }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

    return (<section className={styles.contentWrapper}>
        {(!isMobile || isMenuOpen) && <SideMenu />}
        {(!isMobile || !isMenuOpen) && <Routes>
            <Route path={ROUTES.content()} element={<Content className={styles.articlesContainer} />} />
            <Route path={ROUTES.main} element={<ReplacementContent />} />
        </Routes>}
    </section >)
};

export default ContentWrapper;

const ReplacementContent = () => {
    const REPLACEMENT_TEXT = "Feel free to use side menu and choose a country you would like to read news from."
    return <div className={styles.replacementContent}>{REPLACEMENT_TEXT}</div>
}

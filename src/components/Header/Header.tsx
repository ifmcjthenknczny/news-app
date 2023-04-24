import { APP_NAME, ROUTES } from "../../consts"
import { toggleDisplayMode, toggleMenuOpen } from "../../redux/displayModeSlice";
import Clickable from "../Clickable/Clickable";
import FunModal from "../FunModal/FunModal";
import { classNames } from '../../utils';
import listIcon from '../../assets/list.png'
import { selectDisplayMode } from "../../redux/displayModeSlice";
import styleMenuIcon from '../../assets/menu.png'
import styles from '../Header/Header.module.scss'
import tilesIcon from '../../assets/tiles.png'
import useBoolState from "../../hooks/useBoolState";
import { useDispatch } from "react-redux";
import useIsMobile from "../../hooks/useIsMobile";
import { useNavigate } from "react-router-dom";
import useSelector from "../../hooks/useSelector";
import React from 'react'

const Header = () => {
    const navigate = useNavigate()
    const displayMode = useSelector(selectDisplayMode);
    const dispatch = useDispatch();
    const styleToggleIcon = displayMode === 'list' ? tilesIcon : listIcon
    const [isModalOpen, openModal, closeModal] = useBoolState(false)
    const isMobile = useIsMobile()

    const handleStyleToggleClick = () => {
        dispatch(toggleDisplayMode());
    };

    const handleLogoClick = () => {
        navigate(ROUTES.main)
    }

    const handleFunButtonClick = () => {
        openModal()
    }

    const handleToggleMenuClick = () => {
        dispatch(toggleMenuOpen());
    }

    return (
        <header className={styles.header}>
            <Clickable className={styles.logo} onClick={handleLogoClick}>{APP_NAME}</Clickable>
            <div className={styles.buttonBar}>
                {isMobile && <button
                    className={classNames([styles.sadButton, styles.button])}
                    onClick={handleToggleMenuClick}
                ><img src={styleMenuIcon} className={styles.sadIcon} alt="" />
                </button>}
                <button className={classNames([styles.sadButton, styles.button])} onClick={handleStyleToggleClick}><img src={styleToggleIcon} className={styles.sadIcon} alt="" /></button>
                <button className={classNames([styles.funButton, styles.button])} onClick={handleFunButtonClick}><span className={styles.funButtonContent}>CLICK ME</span></button>
            </div>
            <FunModal isOpen={isModalOpen} onClose={closeModal} />
        </header>
    )
}

export default Header
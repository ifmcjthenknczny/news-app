import Modal, { Props } from "../Modal/Modal";
import React from 'react'
import styles from "./FunModal.module.scss";

const FunModal = ({ ...props }: Omit<Props, 'children'>) => {
    return (
        <Modal {...props}>
            <ul className={styles.list}>
                <li className={styles.listElement}>
                    Największa trudność?{" "}<strong>Wyeliminowanie błędu react__ WEBPACK_IMPORTED_MODULE_ 0__.useContext is null</strong>
                    <p className={styles.paragraph}>Błędnie przyjąłem że jest to wina Reduxa - okazało się że jest to moje niedopatrzenie przy Routerze</p>
                </li>
                <li className={styles.listElement}>
                    Największa frajda?{" "}<strong>Cała reszta</strong>
                    <p className={styles.paragraph}>Szczególnie miłą odmianą było robić cały projekt od samych podstaw. I do przyjemnych rzeczy na pewno należało też stylowanie tego buttona :)</p>
                </li>
            </ul>
        </Modal>
    )
};

export default FunModal;
import { COUNTRY_CODES } from '../../consts'
import Country from '../Country/Country'
import { CountryName } from '../../types'
import React from 'react'
import { classNames } from '../../utils'
import { selectNewsCount } from '../../redux/newsCountSlice'
import styles from './SideMenu.module.scss'
import useSelector from '../../hooks/useSelector'

const SideMenu = () => {
    const newsCount = useSelector(selectNewsCount)

    return (<ul className={classNames([styles.sideMenu, !newsCount && styles.noArticlesLoaded])}>
        {Object.keys(COUNTRY_CODES).map((country) => <Country key={country} name={country as CountryName} />)}
    </ul>)
}

export default SideMenu
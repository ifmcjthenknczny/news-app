import { buildFlagUrl, decodeCountry } from '../../helpers'
import { CountryName } from "../../types"
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../consts'
import React from 'react'
import { classNames } from '../../utils';
import { closeMenu } from '../../redux/displayModeSlice'
import styles from './Country.module.scss'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

type Props = {
    name: CountryName
}

const Country = ({ name }: Props) => {
    const { pathname } = useLocation()
    const country = pathname.split('/').at(-1)
    const decodedCountryName = decodeCountry(name)
    const isActive = country && decodedCountryName === decodeCountry(country)
    const flagUrl = buildFlagUrl(name)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(closeMenu())
    }

    return (
        <div onClick={handleClick}>
            <NavLink className={styles.link} to={ROUTES.content(name)}>
                <li className={classNames([styles.country, isActive && styles.active])}>
                    <div className={styles.countryName}>
                        {decodedCountryName}
                    </div>
                    <div className={styles.flagContainer}>
                        <img src={flagUrl} alt="" />
                    </div>
                </li>
            </NavLink>
        </div>)
}

export default Country
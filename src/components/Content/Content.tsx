import { ArticleResponse, CountryName, NewsErrorResponse, NewsOkResponse } from '../../types';
import React, { useEffect, useState } from 'react';
import { buildNewsUrl, decodeCountry } from '../../helpers';
import ArticleWrapper from '../ArticleWrapper/ArticleWrapper';
import { COUNTRY_CODES } from '../../consts';
import Error from '../Error/Error';
import Spinner from '../Spinner/Spinner';
import axios from 'axios';
import { classNames } from '../../utils';
import { selectDisplayMode } from '../../redux/displayModeSlice';
import { setNewsCount } from '../../redux/newsCountSlice';
import styles from './Content.module.scss';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useSelector from '../../hooks/useSelector';

type Props = {
    className?: string;
}

const Content = ({ className }: Props) => {
    const { country } = useParams()
    const displayMode = useSelector(selectDisplayMode)
    const dispatch = useDispatch();
    const [articles, setArticles] = useState<ArticleResponse[]>()
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<undefined | string>();

    useEffect(() => {
        if (!country) {
            setErrorMessage('Country name is not provided')
            return
        }
        const countryName = decodeCountry(country).toLowerCase()
        if (!Object.keys(COUNTRY_CODES).includes(countryName)) {
            setErrorMessage('Provided country name is not supported')
            return
        }
        const getNews = async (countryName: CountryName) => {
            try {
                const news: NewsOkResponse | NewsErrorResponse = (await axios.get(buildNewsUrl(COUNTRY_CODES[countryName]), {
                    withCredentials: false,
                })
                ).data
                if (news.status === 'error') {
                    setErrorMessage(news.message)
                    return
                }
                setArticles(news.articles)
                dispatch(setNewsCount(news.articles.length))
            } catch (error) {
                setErrorMessage('An error occurred while fetching news')
            } finally {
                setLoading(false)
            }
        }
        getNews(countryName as CountryName)
    }, [country]) // eslint-disable-line react-hooks/exhaustive-deps

    if (!loading && (!articles || !articles?.length)) {
        setErrorMessage('No news found')
    }

    if (errorMessage) {
        return <Error message={errorMessage} />
    }

    if (loading) {
        return <Spinner fullScreen />
    }

    return (<div className={classNames([styles.articlesContainer, className, displayMode === 'list' ? styles.list : styles.tiles])}>
        {articles?.map((article, index) => (<ArticleWrapper key={index} data={article} />))}
    </div>)
}

export default Content;
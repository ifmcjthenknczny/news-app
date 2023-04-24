import { ArticleResponse } from "../../types";
import Clickable from "../Clickable/Clickable";
import { classNames } from '../../utils';
import { selectDisplayMode } from '../../redux/displayModeSlice';
import styles from "./Article.module.scss";
import useSelector from '../../hooks/useSelector';
import React from 'react'

type Props = {
    data: ArticleResponse;
    openModal: () => void;
}

const Article = ({ data, openModal }: Props) => {
    const displayMode = useSelector(selectDisplayMode)
    const datePublished = new Date(data.publishedAt).toLocaleDateString(undefined, { day: "2-digit", month: 'long', year: 'numeric' })

    return (
        <article className={classNames([styles.article, displayMode === 'list' ? styles.list : styles.tile])}>
            {<Clickable onClick={openModal} className={styles.title}>{data.title}</Clickable>}
            {<div className={styles.sourceName}>{data.source.name}</div>}
            {displayMode === 'tiles' && data.urlToImage && <Clickable className={styles.imageContainer} onClick={openModal}><img className={styles.image} src={data.urlToImage} alt="" /></Clickable>}
            {<div className={styles.publishedAt}>{datePublished}</div>}
            {displayMode === 'tiles' && <div className={styles.description}>{data.description || buildDescription(data.content!)}</div>}
        </article>
    );
};

export default Article;

const buildDescription = (content: string) => {
    const CHAR_LIMIT = 100;
    if (content.length <= CHAR_LIMIT) {
        return `${content}...`
    }
    return `${content.slice(0, CHAR_LIMIT)}${content.slice(CHAR_LIMIT).split(' ').at(0)}...`
}
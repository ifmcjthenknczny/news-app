import Article from "../Article/Article"
import ArticleModal from "../ArticleModal/ArticleModal"
import { ArticleResponse } from "../../types"
import { LOREM_IPSUM } from "../../consts"
import { buildPhotoUrl } from "../../helpers"
import useBoolState from "../../hooks/useBoolState"
import React from 'react'

type Props = {
    data: ArticleResponse;
}

const ArticleWrapper = ({ data }: Props) => {
    const [isModalOpen, openModal, closeModal] = useBoolState(false)
    data.content = data.content || LOREM_IPSUM
    data.urlToImage = data.urlToImage || buildPhotoUrl(data.title)

    return (
        <>
            <Article data={data} openModal={openModal} />
            <ArticleModal article={data} isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}

export default ArticleWrapper

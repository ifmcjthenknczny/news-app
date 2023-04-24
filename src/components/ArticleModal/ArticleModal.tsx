import Modal, { Props as ModalProps } from "../Modal/Modal";
import React from 'react'
import { ArticleResponse } from "../../types";
import styles from "./ArticleModal.module.scss";

type Props = {
  article: ArticleResponse;
} & Omit<ModalProps, 'children'>

const ArticleModal = ({ article, ...otherProps }: Props) => {
  return (
    <Modal className={styles.articleModal} {...otherProps}>
      <div className={styles.content}>{article.content}</div>
      <div><span className={styles.author}>Author:</span>{' '}<span className={styles.authorName}>{article.author}</span></div>
      <div className={styles.source}><a className={styles.url} href={article.url}>Read more</a></div>
    </Modal>
  )
};

export default ArticleModal;
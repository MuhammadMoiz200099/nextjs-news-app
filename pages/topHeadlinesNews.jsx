import React from 'react'
import BaseLine from './components/BaseLine';
import styles from '../styles/Styles.module.css';

const topHeadlinesNews = () => {
    return (
        <BaseLine>
            <div className={styles.page}>
                <h1>Top Headlines News</h1>
            </div>
        </BaseLine>
    )
}

export default topHeadlinesNews

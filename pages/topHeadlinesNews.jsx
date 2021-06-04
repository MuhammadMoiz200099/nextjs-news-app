import React from 'react'
import BaseLine from './components/BaseLine';
import styles from '../styles/Styles.module.css';
import News from './components/news';

const topHeadlinesNews = () => {

    const API_NAME = 'top-headlines';
    const API_PARAMS = {
        sources: 'techcrunch'
    }

    return (
        <BaseLine>
            <div className={styles.page}>
                <News apiName={API_NAME} apiUrlParams={API_PARAMS} />
            </div>
        </BaseLine>
    )
}

export default topHeadlinesNews

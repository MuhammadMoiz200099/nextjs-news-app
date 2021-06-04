import React from 'react'
import BaseLine from './components/BaseLine';
import styles from '../styles/Styles.module.css';
import News from './components/news';

const businessHeadlinesNews = () => {

    const API_NAME = 'top-headlines';
    const API_PARAMS = {
        country: 'us',
        category: 'business'
    }

    return (
        <BaseLine>
            <div className={styles.page}>
                <News apiName={API_NAME} apiUrlParams={API_PARAMS} />
            </div>
        </BaseLine>
    )
}

export default businessHeadlinesNews

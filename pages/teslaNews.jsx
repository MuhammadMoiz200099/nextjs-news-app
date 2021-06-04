import React from 'react'
import BaseLine from './components/BaseLine';
import styles from '../styles/Styles.module.css';
import News from './components/news';

const teslaNews = () => {

    const API_NAME = 'everything';
    const API_PARAMS = {
        q: 'tesla',
        from: '2021-05-04',
        sortBy: 'publishedAt'
    }

    return (
        <BaseLine>
            <div className={styles.page}>
                <News apiName={API_NAME} apiUrlParams={API_PARAMS} />
            </div>
        </BaseLine>
    )
}

export default teslaNews

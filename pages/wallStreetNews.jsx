import React from 'react'
import BaseLine from './components/BaseLine';
import styles from '../styles/Styles.module.css';
import News from './components/news';

const wallStreetNews = () => {

    const API_NAME = 'everything';
    const API_PARAMS = {
        domains: 'wsj.com'
    }

    return (
        <BaseLine>
            <div className={styles.page}>
                <News apiName={API_NAME} apiUrlParams={API_PARAMS} />
            </div>
        </BaseLine>
    )
}

export default wallStreetNews

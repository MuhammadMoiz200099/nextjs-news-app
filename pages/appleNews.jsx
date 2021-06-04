import React, { useEffect } from 'react'
import BaseLine from './components/BaseLine';
import styles from '../styles/Styles.module.css';
import News from './components/news';

const appleNews = () => {

    const API_NAME = 'everything';
    const API_PARAMS = {
        q: 'apple',
        from: '2021-06-03',
        to: '2021-06-03',
        sortBy: 'popularity'
    }

    return (
        <BaseLine>
            <div className={styles.page}>
                <News apiName={API_NAME} apiUrlParams={API_PARAMS} />
            </div>
        </BaseLine>
    )
}

export default appleNews

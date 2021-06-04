import React from 'react'
import BaseLine from './components/BaseLine';
import styles from '../styles/Styles.module.css';

const wallStreetNews = () => {
    return (
        <BaseLine>
            <div className={styles.page}>
                <h1>Wall Street News</h1>
            </div>
        </BaseLine>
    )
}

export default wallStreetNews

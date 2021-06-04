import React, { useEffect } from 'react'
import BaseLine from './components/BaseLine';
import styles from '../styles/Styles.module.css';

const appleNews = () => {

    const url = `https://newsapi.org/v2/everything?q=apple&from=2021-06-03&to=2021-06-03&sortBy=popularity&apiKey=c5480fdccd5143399579d1fed3ca8f88`

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <BaseLine>
            <div className={styles.page}>
                <h1>Apple News</h1>
            </div>
        </BaseLine>
    )
}

export default appleNews

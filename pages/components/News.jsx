import React, { useEffect, useState } from 'react'
import { objectToUrlParams } from '../../service/helper';
import { config } from '../../private/secret';
import styles from '../../styles/Styles.module.css';

const News = ({ apiName, apiUrlParams }) => {

    const [url, setUrl] = useState('');
    const [newsData, setNewsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        apiUrlParams.apiKey = config.API_KEY;
        setUrl(`https://newsapi.org/v2/${apiName}?${objectToUrlParams(apiUrlParams)}`);
    }, [])


    useEffect(() => {
        if (url) {
            getNews();
        }
    }, [url])


    function getNews() {
        setIsLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((res) => {
                setIsLoading(false);
                setNewsData(res.articles);
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
            })
    }

    return (
        <>
            {!isLoading ? (<div className={styles.newsContainer}>
                {newsData && (
                    newsData.map((news, idx) => (
                        <div key={idx} className={styles.card} style={{ boxShadow: '2px 0px 9px #2e2e2e' }}>
                            <div className={styles.imgContainer}>
                                <img className={styles.newImg} src={news.urlToImage} alt="News Image" />
                            </div>
                            <div className={styles.cardBody}>
                                <span className={styles.author}>{news.author}</span>
                                <span className={styles.title}>{news.title}</span>
                                <span className={styles.publish}>{new Date(news.publishedAt).toDateString()}</span>
                                <p className={styles.description}>{news.description}</p>
                                <p className={styles.extras}>{news.content}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>) : null}
        </>
    )
}

export default News;

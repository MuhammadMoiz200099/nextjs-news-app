import React from 'react'
import Header from './Header';
import styles from '../../styles/Styles.module.css';

const BaseLine = (props) => {
    return (
        <div className={styles.global}>
            <Header />
            <div className={styles.container}>
                { props.children }
            </div>
        </div>
    )
}

export default BaseLine
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import styles from '../../styles/Styles.module.css';

const Header = () => {
    const [selected, setSelected] = useState(1);

    useEffect(() => {
        const currentWindow = window.location.pathname.replace('/', '');
        switch(currentWindow) {
            case '':
                setSelected(1);
            break;
            case 'appleNews':
                setSelected(2);
            break;
            case 'teslaNews':
                setSelected(3);
            break;
            case 'businessHeadlinesNews':
                setSelected(4);
            break;
            case 'topHeadlinesNews':
                setSelected(5);
            break;
            case 'wallStreetNews':
                setSelected(6);
            break;
        }
    }, [])

    function verifySelection(index) {
        return selected === index ? '#2e2e2e' : '#848484';
    }

    return (
        <ul className={styles.navbar}>
            <li className={styles.navbarLink} style={{ color: verifySelection(1) }} onClick={() => setSelected(1)}>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li className={styles.navbarLink} style={{ color: verifySelection(2) }} onClick={() => setSelected(2)}>
                <Link href="/appleNews">
                    <a>Apple News</a>
                </Link>
            </li>
            <li className={styles.navbarLink} style={{ color: verifySelection(3) }} onClick={() => setSelected(3)}>
                <Link href="/teslaNews">
                    <a>Tesla News</a>
                </Link>
            </li>
            <li className={styles.navbarLink} style={{ color: verifySelection(4) }} onClick={() => setSelected(4)}>
                <Link href="/businessHeadlinesNews">
                    <a>business headlines News</a>
                </Link>
            </li>
            <li className={styles.navbarLink} style={{ color: verifySelection(5) }} onClick={() => setSelected(5)}>
                <Link href="/topHeadlinesNews">
                    <a>Top Headlines News</a>
                </Link>
            </li>
            <li className={styles.navbarLink} style={{ color: verifySelection(6) }} onClick={() => setSelected(6)}>
                <Link href="/wallStreetNews">
                    <a>Wall Street News</a>
                </Link>
            </li>
        </ul>
    )
}

export default Header

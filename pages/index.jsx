import BaseLine from './components/BaseLine';
import styles from '../styles/Styles.module.css';

export default function Home() {
  return (
    <BaseLine>
      <div className={styles.homeContainer}>
        <div className={styles.heroText}>News Application</div>
        <div className={styles.subHeroText}>Get the latest news, and know whats goning on in the world.</div>
      </div>
    </BaseLine>
  )
}

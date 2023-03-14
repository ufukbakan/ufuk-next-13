import styles from '@/styles/Sections.module.css';
import BackButton from './BackButton';

export default function () {
    return (
        <div className={styles['section']} id="education">
            <BackButton />
            <h2>Education</h2>
            <ol id={styles['education-list']}>
                <li className={styles['education-info']}>
                    <span className={styles["school"]}>Macit Zeren Science High School</span>
                    <span className={styles["location"]}>Amasya, Turkey</span>
                    <span className={styles["points"]}>92 / 100</span>
                </li>
                <li className={styles['education-info']}>
                    <span className={styles["school"]}>Gazi University Computer Science (Faculty of Engineering)</span>
                    <span className={styles["location"]}>Ankara, Turkey</span>
                    <span className={styles["points"]}>3.79 / 4.00<br />Third place</span>
                </li>
            </ol>
        </div>
    )
}
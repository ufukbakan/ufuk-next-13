import styles from '@/styles/Sections.module.css';
import { useRouter } from 'next/router';

export default function () {
    const router = useRouter();

    function goBack() {
        router.back();
    }

    return (
        <>
            <div id={styles['back-button']} onClick={goBack}>
                <img src='/arrow.svg' />
            </div>
            <div className={styles['section']} id="about">
                <h2>About Me</h2>
                <p></p>
            </div>
            <div className={styles['section']} id="education">
                <h2>Education</h2>
                <ol id={styles['education-list']}>
                    <li className={styles['education-info']}>
                        <span className="school">Macit Zeren Science High School</span>
                        <span className="location">Amasya, Turkey</span>
                        <span className="points">92 / 100</span>
                    </li>
                    <li className={styles['education-info']}>
                        <span className="school">Gazi University Computer Science (Faculty of Engineering)</span>
                        <span className="location">Ankara, Turkey</span>
                        <span className="points">3.79 / 4.00</span>
                    </li>
                </ol>
            </div>
            <div className={styles['section']} id="experiences">
                <h2>Experiences</h2>
                <p></p>
            </div>
            <div className={styles['section']} id="projects">
                <h2>Projects</h2>
                <p></p>
            </div>
        </>
    )
}
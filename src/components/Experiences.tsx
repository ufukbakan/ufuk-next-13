import styles from '@/styles/Sections.module.css';
import BackButton from './BackButton';

export default function () {
    return (
        <div className={styles['section']} id="experiences">
            <BackButton />
            <h2>Experiences</h2>
            <p></p>
        </div>
    )
}
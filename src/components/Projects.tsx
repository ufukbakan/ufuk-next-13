import styles from '@/styles/Sections.module.css';
import BackButton from './common/BackButton';

export default function () {
    return (
        <div className={styles['section']} id="projects">
            <BackButton />
            <h2>Projects</h2>
            <p><a href="https://ufukbakan.github.io/cv/#projects">Currently listed in this link.</a></p>
        </div>
    )
}
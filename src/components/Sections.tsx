import styles from '@/styles/Sections.module.css';

export default function () {
    return (
        <>
            <div className={styles['section']} id="about">about</div>
            <div className={styles['section']} id="education">education</div>
            <div className={styles['section']} id="experiences">experiences</div>
            <div className={styles['section']} id="projects">projects</div>
        </>
    )
}
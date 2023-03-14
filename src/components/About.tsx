import styles from '@/styles/Sections.module.css';
import BackButton from './BackButton';
import TypedText from "./TypedText";

export default function () {
    const content = TypedText("Ufuk Bakan, a software developer from Turkey, was born in Çorum. Have worked on many different subjects including AI, ML, cryptology, big data & web development.", 1.5, 1);

    return (
        <div className={styles['section']} id="about">
            <BackButton />
            <h2>About Me</h2>
            <p>
                {content}
            </p>
        </div>
    )
}
import styles from '@/styles/Sections.module.css';
import BackButton from './BackButton';
import { fadeComponent, fadeElement } from './Fade';
import TechStack from './TechStack';
import TypedText from "./TypedText";

export default function () {
    const content = TypedText("Ufuk Bakan, a software developer from Turkey, have worked on many different subjects including AI, ML, cryptology, big data, web & desktop development.", 3, 1);

    return (
        <div className={styles['section']} id="about">
            <BackButton />
            <h2>About Me</h2>
            <p>
                {content}
            </p>
            {/* {fadeElement(techStack, 4)} */}
            {fadeComponent(TechStack, 0)}

        </div>
    )
}
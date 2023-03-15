import styles from '@/styles/About.module.css';
import sstyles from '@/styles/Sections.module.css';
import BackButton from './BackButton';
import { fadeElement } from './Fade';
import GoldenTech from './GoldenTech';
import GoldenText from './GoldenText';
import Tech from './Tech';
import TypedText from "./TypedText";

export default function () {
    const content = TypedText("Ufuk Bakan, a software developer from Turkey, was born in Çorum. Have worked on many different subjects including AI, ML, cryptology, big data & web development.", 3, 1);
    const techStack = (
        <div className={styles['tech-stack']}>
            <h2>Tech Stack</h2>
            <h3>Languages</h3>
            <ol>
                <GoldenTech img='/icons/ts.png'>Typescript</GoldenTech>
                <GoldenTech img='/icons/js.png'>Javascript</GoldenTech>
                <GoldenTech img='/icons/java.png'>Java</GoldenTech>
                <GoldenTech img='/icons/css-3.png'>CSS</GoldenTech>
                <GoldenTech img='/icons/sql-server.png'>SQL</GoldenTech>
                <GoldenTech img='/icons/html-5.png'>HTML</GoldenTech>
                <Tech img='/icons/cassandra.png'>CQL</Tech>
                <Tech img='/icons/c-sharp.png'>C#</Tech>
                <Tech img='/icons/python.png'>Python</Tech>
                <Tech img='/icons/php.png'>PHP</Tech>
                <Tech img='/icons/godot.png'>GDScript</Tech>
                <Tech img='/icons/c.png'>C</Tech>
                <Tech img='/icons/haskell.png'>Haskell</Tech>
                <Tech img='/icons/ruby.svg'>Ruby</Tech>
                <Tech img='/icons/prolog.png'>Prolog</Tech>
                <Tech img='/icons/assembly.svg'>x8086 Assembly</Tech>
            </ol>
            <h3>Backend</h3>
            <h3>Frontend</h3>
            <h3>QA</h3>
            <h3>CI/CD</h3>
        </div>
    )

    return (
        <div className={sstyles['section']} id="about">
            <BackButton />
            <h2>About Me</h2>
            <p>
                {content}
            </p>
            {/* {fadeElement(techStack, 4)} */}
            {fadeElement(techStack, 0)}

        </div>
    )
}
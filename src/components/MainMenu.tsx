import useHash from "@/hooks/useHash";
import styles from "@/styles/Menu.module.css";
import FloatCard from "./FloatCard";

export default function () {
    const hash = useHash();

    return (
        <div className={styles["card-container"]}>
            <div className="v-stack w-full g-1">
                <div className="h-stack space-evenly">
                    <FloatCard active={hash === "#about"} bg="/developer.png" href="#about">Me<br />&<br />My Tech Stack</FloatCard>
                    <FloatCard active={hash === "#education"} bg="/graduation.png" href="#education">Education</FloatCard>
                </div>
                <div className="h-stack space-evenly">
                    <FloatCard active={hash === "#experiences"} bg="/work.png" href="#experiences">Experiences</FloatCard>
                    <FloatCard active={hash === "#projects"} bg="/project.png" href="#projects">Projects</FloatCard>
                </div>
            </div>
        </div>
    )
}
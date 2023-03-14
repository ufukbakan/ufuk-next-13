import usePath from "@/hooks/usePath";
import styles from "@/styles/Menu.module.css";
import { useEffect } from "react";
import FloatCard from "./FloatCard";

export default function () {
    const path = usePath();

    return (
        <div className={styles["card-container"]}>
            <div className="v-stack w-full g-1">
                <div className="h-stack space-evenly">
                    <FloatCard active={path === "/about"} bg="/developer.png" href="/about">Me<br />&<br />My Tech Stack</FloatCard>
                    <FloatCard active={path === "/education"} bg="/graduation.png" href="/education">Education</FloatCard>
                </div>
                <div className="h-stack space-evenly">
                    <FloatCard active={path === "/experiences"} bg="/work.png" href="/experiences">Experiences</FloatCard>
                    <FloatCard active={path === "/projects"} bg="/project.png" href="/projects">Projects</FloatCard>
                </div>
            </div>
        </div>
    )
}
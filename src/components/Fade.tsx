import { FunctionComponent, ReactNode, useEffect, useRef, useState } from "react";
import styles from "@/styles/Fade.module.css";

export function fadeComponent(Component: FunctionComponent, delay = 0) {

    return (
        <div style={{ animationDelay: delay + "s" }} className={styles.fading}>
            <Component />
        </div>
    )
}

export function fadeElement(element: ReactNode, delay = 0) {
    return (
        <div style={{
            animationDuration: 10 * delay / 7 + "s",
            animationPlayState: "running"
        }} className={styles.fading}>
            {element}
        </div>
    )
}
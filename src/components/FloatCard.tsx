import styles from "@/styles/Menu.module.css";
import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

type FloatCardProps = {
    children?: ReactNode,
    href?: string,
    bg: string,
    active?: boolean
}
export default function (props: FloatCardProps) {
    const [styleList, setStyleList] = useState([
        styles["float-card-link"]
    ]);
    const [customStyle, setCustomStyle] = useState<CSSProperties>({
        "--bg-image": `url('${props.bg}')`
    } as CSSProperties);
    const element = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        if (props.active && element.current) {
            setStyleList([
                styles["float-card-link"],
                styles["active-card"]
            ]);
            const shouldInX = global.window?.innerWidth / 2 - (element.current.getBoundingClientRect().width / 2);
            const shouldInY = global.window?.innerHeight / 2 - (element.current.getBoundingClientRect().height / 2);
            const diffToX = (shouldInX - element.current.getBoundingClientRect().x);
            const diffToY = (shouldInY - element.current.getBoundingClientRect().y);
            setCustomStyle({
                ...customStyle,
                "transform": `translate(${diffToX}px, ${diffToY}px) scale(4)`
            })
        } else {
            setStyleList([
                styles["float-card-link"]
            ]);
            setCustomStyle({
                "--bg-image": `url('${props.bg}')`
            } as CSSProperties);
        }
    }, [props.active, global.window]);

    return (
        <a ref={element} href={props.href} className={styleList.join(" ")} style={customStyle}>
            <div className={styles["float-card"]}>
                {props.children}
            </div>
        </a>
    )
}
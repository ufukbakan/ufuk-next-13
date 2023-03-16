import styles from "@/styles/Nav.module.css";
import HackyText from "./common/HackyText";

export default function () {
    return (
        <>
            <nav className={styles.nav}>
                <h1><HackyText>ufuk bakan</HackyText></h1>
            </nav>
        </>
    )
}
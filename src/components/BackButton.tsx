import styles from '@/styles/Sections.module.css';
import { useRouter } from 'next/router';

export default function () {
    const goBack = useRouter().back;

    return (
        <div id={styles['back-button']} onClick={goBack}>
            <img src='/arrow.svg' alt='Back button' />
        </div>
    )
}
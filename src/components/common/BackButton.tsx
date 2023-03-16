import useElementRect from '@/hooks/useElementRect';
import styles from '@/styles/Sections.module.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function () {
    const goBack = useRouter().back;
    const [slided, setSlided] = useState(false);
    const boundingBox = useElementRect("#"+styles['back-button-wrapper']);

    useEffect(() => {
        if(boundingBox.top <= 32 && !slided){
            setSlided(true);
        }else if(boundingBox.top > 32 && slided){
            setSlided(false);
        }
    }, [boundingBox.top])

    return (
        <div id={styles['back-button-wrapper']} className={slided ? styles.slided : ""}>
            <div id={styles['back-button']} onClick={goBack} >
                <img src='/arrow.svg' alt='Back button' />
            </div>
        </div >
    )
}
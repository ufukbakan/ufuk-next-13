import { prcInterval, prcTimeout } from "precision-timeout-interval";
import { useEffect, useState } from "react";

export default function (text: string, speed = 1, delay = 0, play = true) {
    const [state, setState] = useState(text);

    useEffect(() => {
        let i = 0;
        if (play) {
            setState("");
            let interval = prcInterval(50 / speed, () => {
                i++;
                setState(text.substring(0, i));
                if (i >= text.length) interval.cancel();
            });
            interval.pauseResume();
            prcTimeout(delay * 1000, () => { interval.pauseResume() });
            return () => interval.cancel();
        }
    }, []);

    return state;
}
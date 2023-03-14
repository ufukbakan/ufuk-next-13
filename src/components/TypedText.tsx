import { prcInterval } from "precision-timeout-interval";
import { useEffect, useState } from "react";

export default function (text: string, speed = 1, play = true) {
    const [state, setState] = useState(play ? "" : text);

    useEffect(() => {
        let i = 0;
        if (play) {
            let interval = prcInterval(50 / speed, () => {
                setState((prev) => prev + text.charAt(i));
                i++;
                if (i >= text.length) interval.cancel();
            });
            return () => interval.cancel();
        }
    }, []);

    return state;
}
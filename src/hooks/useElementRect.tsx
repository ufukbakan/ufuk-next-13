import { useEffect, useState } from "react";

export default function (selector: string) {
    let element = global.document ? document.querySelector(selector) : undefined;
    const [rect, setRect] = useState<DOMRect>(element?.getBoundingClientRect() ?? {
        x: Infinity,
        y: Infinity,
        bottom: Infinity,
        height: Infinity,
        left: Infinity,
        right: Infinity,
        top: Infinity,
        width: Infinity,
        toJSON: () => { }
    });

    useEffect(() => {
        element = document.querySelector(selector);
        const updateElementRect = () => {
            if (element) {
                setRect(element.getBoundingClientRect());
            }
        }
        global.document?.addEventListener('scroll', updateElementRect);
        global.window?.addEventListener('resize', updateElementRect);

        return (() => {
            global.document?.removeEventListener('scroll', updateElementRect);
            global.window?.removeEventListener('resize', updateElementRect);
        })
    }, [global.document, global.window]);

    return rect;
}
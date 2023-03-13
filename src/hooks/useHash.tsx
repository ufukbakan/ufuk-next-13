import { useEffect, useState, } from "react";

export default function () {
    const [hash, setHash] = useState(global.window?.location?.hash || "");
    useEffect(() => {
        const onHashChange = () => setHash(global.window?.location?.hash || "");
        global.window?.addEventListener("hashchange", onHashChange);
        return () => global.window?.removeEventListener("hashchange", onHashChange);
    }, [global.window]);

    return hash;
}
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function () {
    const [path, setPath] = useState("");
    const router = useRouter();

    useEffect(() => {
        setPath(router.pathname);
    }, [router, router.pathname]);

    return path;
}
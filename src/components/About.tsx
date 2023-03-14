import useHash from "@/hooks/useHash";
import { useEffect, useState } from "react";
import TypedText from "./TypedText";

export default function () {
    const hash = useHash();
    const content = TypedText("Ufuk Bakan, a software developer from Turkey, was born in Çorum. Have worked on many different subjects including AI, ML, cryptology, big data & web development.", 1, hash === "#about")
    return (
        <p>
            {content}
        </p>
    )
}
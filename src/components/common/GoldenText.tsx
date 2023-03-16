import { ReactNode } from "react";

type GoldenTextProps = {
    children: ReactNode;
}
export default function ({ children }: GoldenTextProps) {
    return (
        <span className="golden-text">{children}</span>
    )
}
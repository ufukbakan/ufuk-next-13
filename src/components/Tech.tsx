import { ReactNode } from "react";

export type TechProps = {
    children: ReactNode;
    img: string;
}

export default function Tech({ children, img }: TechProps) {
    return (
        <li> <img src={img} />
            {children}
        </li>
    )
}
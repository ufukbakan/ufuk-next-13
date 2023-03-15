import GoldenText from "./GoldenText";
import { TechProps } from "./Tech";

export default function ({ children, img }: TechProps) {
    return (
        <li className="golden-border"> <img src={img} />
            <GoldenText>{children}</GoldenText>
        </li>
    )
}
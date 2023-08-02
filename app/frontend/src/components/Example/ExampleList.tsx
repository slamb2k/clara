import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What is Girl Geek Academy?",
        value: "What is Girl Geek Academy?"
    },
    {
        text: "Show me how to read a file from disk in Python.",
        value: "Show me how to read a file from disk in Python."
    },
    {
        text: "Tell me about the work Girl Geek Academy did in Samoa.",
        value: "Tell me about the work Girl Geek Academy did in Samoa."
    }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};

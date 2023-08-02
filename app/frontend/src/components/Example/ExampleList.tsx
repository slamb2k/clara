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
        text: "How much money was raised for the #SheHacks Victoria hackathon?",
        value: "How much monery was raised for the #SheHacks Victoria hackathon?"
    },
    {
        text: "What work did Girl Geek Academy do in Samoa?",
        value: "What work did Girl Geek Academy do in Samoa?"
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

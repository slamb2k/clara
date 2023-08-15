import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    description: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Introductory Class",
        description: "Let's see what you already know by building a Hello World application.",
        value: "Please give me the code for a simple Hello World application in Python."
    },
    {
        text: "The Fundamentals",
        description: "Show me that you understand the fundamentals by making a leap year checker.",
        value: "Please give me the code for a Python application that when given a year, will check if that year is a leap year and return the answer."
    },
    {
        text: "Graduation Day!",
        description: "This is the big one! Develop an entire game of rock, paper, scissors.",
        value: "Please provide the code for a simple Rock, Paper, Scissor game written entirely in Python."
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
                    <Example text={x.text} description={x.description} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};

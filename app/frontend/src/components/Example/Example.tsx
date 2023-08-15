import styles from "./Example.module.css";

interface Props {
    text: string;
    description: string;
    value: string;
    onClick: (value: string) => void;
}

export const Example = ({ text, description, value, onClick }: Props) => {
    return (
        <div className={styles.example} onClick={() => onClick(value)}>
            <p className={styles.exampleText}>{text}</p>
            <p className={styles.exampleDescription}>{description}</p>
        </div>
    );
};

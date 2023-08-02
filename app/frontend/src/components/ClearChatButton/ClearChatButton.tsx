import { Text } from "@fluentui/react";
import { Delete24Regular } from "@fluentui/react-icons";

import styles from "./ClearChatButton.module.css";

interface Props {
    className?: string;
    onClick: () => void;
    disabled?: boolean;
}

export const ClearChatButton = ({ className, disabled, onClick }: Props) => {
    return (
        <div className={`${styles.container} ${className ?? ""} ${disabled && styles.disabled}`} onClick={onClick}>
            <Delete24Regular color="#5f7dd7" />
            <Text color="#5f7dd7">{"Clear chat"}</Text>
        </div>
    );
};

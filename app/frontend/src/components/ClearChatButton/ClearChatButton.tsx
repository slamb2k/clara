import { Text } from "@fluentui/react";
import { Delete20Regular } from "@fluentui/react-icons";

import styles from "./ClearChatButton.module.css";

interface Props {
    className?: string;
    onClick: () => void;
    disabled?: boolean;
}

export const ClearChatButton = ({ className, disabled, onClick }: Props) => {
    return (
        <div className={`${styles.container} ${className ?? ""} ${disabled && styles.disabled}`} onClick={onClick}>
            <Delete20Regular color="#ffffff" />
            <span color="#ffffff" font-size="20px">
                Clear chat
            </span>
        </div>
    );
};

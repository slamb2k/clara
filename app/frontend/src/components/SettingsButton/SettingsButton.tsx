import { Text } from "@fluentui/react";
import { Settings20Regular } from "@fluentui/react-icons";

import styles from "./SettingsButton.module.css";

interface Props {
    className?: string;
    onClick: () => void;
}

export const SettingsButton = ({ className, onClick }: Props) => {
    return (
        <div className={`${styles.container} ${className ?? ""}`} onClick={onClick}>
            <Settings20Regular color="#ffffff" />
            <span color="#ffffff" font-size="20px">
                Developer settings
            </span>
        </div>
    );
};

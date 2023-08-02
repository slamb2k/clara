import { Text } from "@fluentui/react";
import { Settings24Regular } from "@fluentui/react-icons";

import styles from "./SettingsButton.module.css";

interface Props {
    className?: string;
    onClick: () => void;
}

export const SettingsButton = ({ className, onClick }: Props) => {
    return (
        <div className={`${styles.container} ${className ?? ""}`} onClick={onClick}>
            <Settings24Regular color="#5f7dd7" />
            <Text color="#5f7dd7">{"Developer settings"}</Text>
        </div>
    );
};

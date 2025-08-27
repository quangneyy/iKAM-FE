"use client";

import { FC } from "react";
import styles from "./Switch.module.scss";

type IProps = {
    id: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
};

const Switch: FC<IProps> = ({ id, checked, onChange }) => {
    return (
        <div className={styles.switch}>
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange?.(e.target.checked)}
                className={styles["switch__input"]}
            />
            <label htmlFor={id} className={styles["switch__label"]}></label>
        </div>
    );
};

export default Switch
"use client";

import { FC } from "react";
import styles from "./Checkbox.module.scss";

type IProps = {
    id: string;
    title?: string;
    checked?: boolean;
    onPress?: (checked: boolean) => void;
};

const Checkbox: FC<IProps> = (props) => {

    const { id = '', title = "Checkbox", checked, onPress } = props

    return (
        <div className={styles.checkbox}>
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={(e) => onPress?.(e.target.checked)}
                className={styles.checkbox__input}
            />
            <label htmlFor={id} className={styles.checkbox__label}>
                <span>
                    <svg viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                </span>
                <span>{title}</span>
            </label>
        </div>
    );
};

export default Checkbox;
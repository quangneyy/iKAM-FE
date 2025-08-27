'use client'
import React from "react";
import styles from "./Checkbox.module.scss";

type Props = {
    title: string;
    checked?: boolean;
    onPress?: (checked: boolean) => void;
    disabled?: boolean;
};

const Checkbox: React.FC<Props> = (props) => {
    const { title, checked, onPress, disabled } = props;

    const id = React.useId();

    return (
        <div className={styles.checkboxWrapper}>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                disabled={disabled}
                onChange={(e) => onPress(e.target.checked)}
            />
            <label htmlFor={id}>{title}</label>
        </div>
    );
};

export default Checkbox;
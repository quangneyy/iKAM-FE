import React, {ReactNode} from "react";
import styles from "./Button.module.scss";

type Props = {
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    title: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
};

const Button = (p: Props) => {
    const { loading = false, disabled, onClick, title, leftIcon, rightIcon } = p;

    return (
        <button
            className={styles["button"]}
            disabled={disabled || loading}
            onClick={onClick}
        >
            {loading && <span className={styles.loader} />}
            {!loading && leftIcon && <span className={styles["button__icon"]}>{leftIcon}</span>}
            <span className={styles["button__title"]}>{title}</span>
            {!loading && rightIcon && <span className={styles["button__icon"]}>{rightIcon}</span>}
        </button>
    );
};

export default Button;
'use client'

import React from "react";
import styles from "./SearchBar.module.scss";
import { Search } from "lucide-react";
import Checkbox from "@/components/common/Checkbox/Checkbox";

type Props = {
    title: string;
    checkedTitle?: string
    checked?: boolean;
    onChecked?: (checked: boolean) => void;
    value: string
    onChange: (value: string) => void;
    onSearchPress: () => void;
    onPressChange: () => void;
}

const SearchBar = (props: Props) => {
    const { title, checked, checkedTitle, onChecked, value, onSearchPress, onPressChange, onChange } = props;

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <span>{title}</span>
                <input value={value} onChange={e => onChange(e.target.value)} />
                <button onClick={onSearchPress}>
                    <Search size={16} color={'white'} />
                    <span>Search</span>
                </button>
            </div>
            {checkedTitle && (
                <div className={styles.center}>
                    <Checkbox checked={checked} onPress={onChecked} title={checkedTitle} />
                </div>
            )}
        </div>
    );
};

export default SearchBar;

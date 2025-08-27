'use client'

import React from "react";
import styles from "./SearchBar.module.scss";
import {Search} from "lucide-react";
import Checkbox from "@/components/common/Checkbox/Checkbox";
import Button from "@/components/common/Button/Button";

type Props = {
    title: string;
    checkedTitle?: string
    checked?: boolean;
    onChecked?: (checked: boolean) => void;
    value: string
    onChange: (value: string) => void;
    onSearchPress: () => void;
}

const SearchBar = (props: Props) => {
    const {title, checked, checkedTitle, onChecked, value, onSearchPress, onChange} = props;

    return (
        <div className={styles['searchbar']}>
            <div className={styles['searchbar-container']}>
                <span className={styles['searchbar-container__title']}>{title}</span>
                <input className={styles['searchbar-container__input']} value={value} onChange={e => onChange(e.target.value)}/>
                <Button leftIcon={<Search size={16} color={'white'}/>} title={'Search'} onClick={onSearchPress}/>
            </div>
            {checkedTitle && (
                <div className={styles.center}>
                    <Checkbox id={'searchbar-checkbox'} checked={checked} onPress={onChecked} title={checkedTitle}/>
                </div>
            )}
        </div>
    );
};

export default SearchBar;

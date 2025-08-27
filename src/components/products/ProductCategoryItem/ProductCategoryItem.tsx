import React from 'react';
import styles from "./ProductCategoryItem.module.scss";

type IProps<T> = {
    item: T
}

export default function ProductCategoryItem<T>(props: IProps<T>) {
    const {item} = props
    const {name, link, img} = item

    return (
        <a href={link} className={styles['category']}>
            <img src={img} alt={name} className={styles['category__img']}/>
            <h5 className={styles['category__title']}>{name}</h5>
        </a>
    );
};

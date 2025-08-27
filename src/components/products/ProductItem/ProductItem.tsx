import React from 'react';
import styles from './ProductItem.module.scss';

type IProps<T> = {
    item: T
}

export default function ProductItem<T>(props: IProps<T>) {
    const { item } = props

    const { name, link, img, features = [] } = item

    const renderItem = (i: any, index: number) => {
        return (
            <li className={styles['product-desc__text']} key={`${i}${index}`}>{i}</li>
        )
    }

    return (
        <div className={styles['product']}>
            <a href={link}><img className={styles['product__image']} src={img} alt={name} /></a>
            <h4 className={styles['product__title']}>{name}</h4>
            <ul className={styles['product-desc']}>{features.map(renderItem)}</ul>
        </div>
    );
};


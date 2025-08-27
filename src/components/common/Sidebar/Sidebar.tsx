import React from 'react';
import styles from './Sidebar.module.scss';

type IProps = {
    sidebars: ISidebar[]
}

const Sidebar = ({ sidebars }: IProps) => {

    const renderItem = (item: ISidebar, index: number) => {
        return (
            <li key={`${item.id}${index}`}>
                <a href={item.href}>{item.label}</a>
                {item.children && (
                    <ul>{item.children?.map(renderItem)}</ul>
                )}
            </li>
        )
    }

    return (
        <aside className={styles.sidebar}>
            {sidebars!.map((item) => (
                <div key={item.id} className={styles.container}>
                    <a href={item.href}>{item.label}</a>
                    {item.children && (
                        <ul>{item.children?.map(renderItem)}</ul>
                    )}
                </div>
            ))}
        </aside>
    );
};

export default Sidebar;
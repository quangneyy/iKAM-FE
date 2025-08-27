import React, { ReactNode, useState } from "react";
import styles from "./List.module.scss";
import clsx from "clsx";

interface IProps<T> {
    data: T[];
    renderItem: (item: T) => ReactNode;
    columns?: number; // Số cột sẽ được hiển thị
    count?: number; // Số items được hiển thị mặc định mỗi lần viewmore
    className?: string;
}

export default function List<T>(props: IProps<T>) {
    const { data, renderItem, columns = 3, className, count } = props

    const [visible, setVisible] = useState(count || 10);

    const handleViewMore = () => {
        setVisible((prev) => Math.min(prev + count, data.length));
    };

    const items = data.slice(0, visible);

    return (
        <div>
            <div
                className={clsx(className, styles.grid)}
                style={{
                    "--columns": columns,
                    "--columns-tablet": columns - 1 || 1,
                    "--columns-mobile": columns - 2 || 1
                } as React.CSSProperties}
            >
                {items.map((item, index) => (<div key={`${item.id}${index}`}>{renderItem(item)}</div>))}
            </div>
            {count && (
                <div className={styles.more}>
                    <button onClick={handleViewMore}>
                        <span>View more</span>
                    </button>
                </div>
            )}
        </div>
    );
}
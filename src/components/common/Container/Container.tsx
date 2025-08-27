import React, { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Container.module.scss";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import Sidebar from "@/components/common/Sidebar/Sidebar";

type IProps = {
    children: ReactNode;
    className?: string;
    sidebars?: ISidebar[];
    breadcrumbs?: IBreadcrumbs[];
};

const Container = (props: IProps) => {
    const { children, className, sidebars, breadcrumbs } = props;

    const hasSidebar = Boolean(sidebars?.length);

    return (
        <div className={clsx(styles.container)}>
            <PageHeader title="Products" breadcrumbs={breadcrumbs} />
            <main
                className={clsx(
                    styles.main,
                    className,
                    hasSidebar && styles["main--with-sidebar"]
                )}
            >
                <div>{children}</div>
                {sidebars && <Sidebar sidebars={sidebars} />}
            </main>

        </div>
    );
};

export default Container;
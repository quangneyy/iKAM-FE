"use client";

import React from "react";
import Link from "next/link";
import styles from "./PageHeader.module.scss";

type BreadcrumbLink = {
  label: string;
  href?: string;
};

type PageHeaderProps = {
  title: string;
  breadcrumbs?: BreadcrumbLink[];
  separator?: React.ReactNode;
};

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const { title, breadcrumbs = [], separator = ">" } = props;
  return (
    <div className={styles.pageHeader}>
      <div className={styles.background}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      {breadcrumbs.length > 0 && (
        <nav className={styles.breadcrumb}>
          {breadcrumbs.map((link, idx) => (
            <span key={idx} className={styles.breadcrumbItem}>
              {link.href ? (
                <Link href={link.href}>{link.label}</Link>
              ) : (
                <span>{link.label}</span>
              )}
              {idx < breadcrumbs.length - 1 && (
                <span className={styles.breadcrumbSeparator}>{separator}</span>
              )}
            </span>
          ))}
        </nav>
      )}
    </div>
  );
};

export default PageHeader;

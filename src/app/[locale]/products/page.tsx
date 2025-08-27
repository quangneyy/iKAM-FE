'use client'
import React, { useState } from 'react';
import SearchBar from "@/components/common/SearchBar/SearchBar";
import Container from "@/components/common/Container/Container";
import List from "@/components/common/List/List";
import { categories, mockProducts, mockSidebars } from "@/../public/assets/mock/mock";
import styles from './products.module.scss'
import ProductItem from "@/components/products/ProductItem/ProductItem";
import ProductCategoryItem from "@/components/products/ProductCategoryItem/ProductCategoryItem";

type IProps = {}

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Products" },]

function Products(props: IProps) {

    const [query, setQuery] = useState<string>("");
    const [data, setData] = useState(mockProducts);

    const onSearch = () => {
    }

    return (
        <Container breadcrumbs={breadcrumbs} sidebars={mockSidebars}>
            <SearchBar checkedTitle={'ABC'} title={'Product search'} onChange={setQuery} onSearchPress={onSearch} value={query} />
            <h2 className={styles.h2}>New Products</h2>
            <List count={4} columns={4} className={styles.list} data={data}
                renderItem={item => <ProductItem item={item} />} />
            <h2 className={styles.h2}>Product category</h2>
            <List columns={2} className={styles.list} data={categories}
                renderItem={item => <ProductCategoryItem item={item} />} />
        </Container>
    );
}

export default Products;
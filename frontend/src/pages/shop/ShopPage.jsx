import React, { useEffect, useState } from 'react';
import productsData from '../../Data/products.json';
import ProductCards from './ProductCards';
import ShopFiltering from './ShopFiltering';

// filter untuk harga, kategori, dan warna
const filters = {
    categories: ['all', 'kursi', 'meja', 'lemari', 'alat-elektronik'],
    colors: ['all', 'black', 'silver', 'grey', 'light-brown', 'white', 'brown'],
    priceRanges: [
        { label: 'Di bawah Rp. 50.000', min: 0, max: 50000 },
        { label: 'Rp. 50.000 - Rp. 100.000', min: 50000, max: 100000 },
        { label: 'Rp. 100.000 - Rp. 200.000', min: 100000, max: 200000 },
        { label: 'Rp. 200.000 dan lebih', min: 200000, max: Infinity },
    ],
};

const ShopPage = () => {
    const [products, setProducts] = useState(productsData);
    const [filtersState, setFiltersState] = useState({
        category: 'all',
        color: 'all',
        priceRanges: ''
    });

    // filtering function
    const applyFilters = () => {
        let filteredProducts = productsData;

        // Filter berdasarkan kategori
        if (filtersState.category && filtersState.category !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === filtersState.category);
        }

        // Filter berdasarkan warna
        if (filtersState.color && filtersState.color !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.color === filtersState.color);
        }

        // Filter berdasarkan harga
        if (filtersState.priceRanges) {
            const selectedRange = filters.priceRanges.find(range => range.label === filtersState.priceRanges);
            if (selectedRange) {
                filteredProducts = filteredProducts.filter(product => 
                    product.price >= selectedRange.min && product.price <= selectedRange.max
                );
            }
        }

        setProducts(filteredProducts);
    };

    useEffect(() => {
        applyFilters();
    }, [filtersState]);

    const clearFilters = () => {
        setFiltersState({
            category: 'all',
            color: 'all',
            priceRanges: ''
        });
    };

    return (
        <>
            <section className='section__container bg-primary-brown'>
                <h2 className='section__header capitalize'>Shop Page</h2>
                <p className='section__subheader'>
                    Temukan Furnitur dan alat elektronik sesuai dengan Kebutuhan atau Favorit Anda
                </p>
            </section>

            <section className='section__container'>
                <div className='flex flex-col md:flex-row md:gap-12 gap-8'>
                    {/* left side */}
                    <ShopFiltering
                        filters={filters}
                        filtersState={filtersState}
                        setFiltersState={setFiltersState}
                        clearFilters={clearFilters}
                    />

                    {/* right side */}
                    <div>
                        <h3 className='text-x1 font-medium mb-4'>Products Available: {products.length}</h3>
                        <ProductCards products={products} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShopPage;

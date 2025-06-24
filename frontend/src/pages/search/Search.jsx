import React, { useState } from 'react'
import productData from "../../Data/products.json"
import ProductCards from '../shop/ProductCards';
 
const Search = () => {
    const [searchQuery, setSearchQuery] = useState ('');
    const [filteredProducts, setFilteredProducts] = useState();

    const handleSearch = () => {
        const query = searchQuery.toLowerCase();

        const filtered = productData.filter(product => product.name.toLowerCase().includes
        (query) || product.description.toLowerCase().includes(query));

        setFilteredProducts(filtered);
    }
  return (
    <>
        <section className='section__container bg-primary-brown'>
            <h2 className='section__header capitalize'>Search Page</h2>
            <p className='section__subheader'>Temukan Furnitur dan alat elektronik sesuai dengan Kebutuhan atau Favorit Anda</p>
        </section>

        <section className='section__container'>
            <div className='w-full mb-12 flex flex-col md:flex-row items-center justify-center gap-4'>
                <input type="text" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}
                className='search-bar w-full max-w-4x1 p-2 border rounded'
                placeholder='Cari produk yang anda inginkan...'/>

                <button onClick={handleSearch}
                className='search-button w-full md:w-auto py-2 px-8 bg-primary text-white rounded'>Search</button>
            </div>

            <ProductCards products={filteredProducts}/>
        </section>
    </>
  )
}   

export default Search
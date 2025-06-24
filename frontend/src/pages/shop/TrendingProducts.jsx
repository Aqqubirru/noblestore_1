import React, { useState } from 'react';
import ProductCards from './ProductCards';
import product from "../../Data/products.json";

const TrendingProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const loadMoreProducts = () => {
    setVisibleProducts(prevCount => prevCount + 4);
  };
  const productsToShow = product.slice(0, visibleProducts);

  return (
    <section className='section__container product__container'>
      <h2 className='section__header'>Barang Trending</h2>
      <p className='section__subheader mb-12'>
        Temukan furnitur trending dengan desain modern dan kualitas terbaik untuk rumah Anda. Jangan lewatkan pilihan populer kami.
      </p>

      {/* product card */}
      <div className='mt-12'>
        <ProductCards products={productsToShow} />
      </div>

      {/* button buat lihat lebih banyak produk */}
      <div className='product__btn'>
        {visibleProducts < product.length && (
          <button className='btn' onClick={loadMoreProducts}>Lihat lebih banyak</button>
        )}
      </div>
    </section>
  );
};

export default TrendingProducts;

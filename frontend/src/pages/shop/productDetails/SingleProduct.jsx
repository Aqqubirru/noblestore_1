import React from 'react'
import { Link, useParams } from 'react-router-dom'
import RatingStar from '../../../components/RatingStar';


const SingleProduct = () => {
    const {id} = useParams();
  return (
    <>
        <section className='section__container bg-primary-brown'>
                <h2 className='section__header capitalize'>Halaman Produk</h2>
                <div className='section__subheader space-x-2'>
                    <span>
                        <span className='hover:text-primary'><Link to="/">Home</Link></span>
                        <i className="ri-arrow-right-wide-line"></i>
                        <span className='hover:text-primary'><Link to="/shop">Shop</Link></span>
                        <i className="ri-arrow-right-wide-line"></i>
                        <span className='hover:text-primary'>Nama Produk</span>
                    </span>
                </div>
                <section className='section__container mt-8'>      
                    <div className='flex flex-col items-center md:flex-row gap-8'>
                        {/* gambar produk */}
                        <div className='md:w-1/2 w-full'>
                            <img src="https://images.unsplash.com/photo-1489269637500-aa0e75768394?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
                            className='rounded-md w-full h-auto'
                            />
                        </div>

                        <div className='md:w-1/2 w-full'>
                            <h3 className='text-2x1 font-semibold mb-4'>Kursi Hitam</h3>
                            <p className='text-x1 text-primary mb-4'>Rp. 70.000 <s>Rp. 100.000</s></p>
                            <p className='text-gray-400 mb-4'>Kursi Yang nyaman untuk diduduki</p>

                            {/* additional produk info */}
                            <div>
                                <p><strong>Kategori :</strong> Kursi </p>
                                <p><strong>Color :</strong> Black </p>
                                <div className='flex gap-1 items-center'>
                                    <strong>Rating :</strong>
                                </div>
                                <RatingStar rating={5}/>
                            </div>
                            <button className='mt-6 px-6 py-3 bg-primary text-white rounded-md'>
                                Add to Cart
                            </button>
                        </div>
                    </div>              
                </section>
        </section>

        {/* display review */}
        {/* to do when have API */}
        <section className='section__container mt-8'>
            Review disini
        </section>
    </>
  )
}

export default SingleProduct
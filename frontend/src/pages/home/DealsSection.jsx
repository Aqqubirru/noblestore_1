import React from 'react'
import dealsImg from '../../assets/deals.png'

const DealsSection = () => {
  return (
    <section className='section__container deals__container'>
        <div className='deals__image'>
            <img src={dealsImg} alt="" />
        </div>

        <div className='deals__content'>
            <h5>Dapatkan diskon hingga 30%!</h5>
            <h4>Cek penawaran bulan ini!</h4>
            <p>Dapatkan diskon besar untuk furnitur pilihan hanya bulan ini! Nikmati potongan harga menarik untuk berbagai produk furnitur berkualitas, dari sofa nyaman hingga meja makan modern. Jangan lewatkan kesempatan untuk memperbarui dekorasi rumah Anda dengan harga lebih terjangkau. Penawaran ini hanya berlaku sampai akhir bulan, jadi segera ambil kesempatan sebelum kehabisan.</p>
            <div className='deals__countdown flex-wrap'>
                <div className='deals__countdown__card'>
                    <h4>30</h4>
                    <p>Hari</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>0</h4>
                    <p>Jam</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>0</h4>
                    <p>Menit</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>0</h4>
                    <p>Detik</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DealsSection
import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from "../../assets/header.png"

const Banner = () => {
  return (
    <div className='section__container header__container'>
        <div className='header__content'>
            <h4 className='uppercase'>Diskon hingga 30%!</h4>
            <h1>Barang furnitur</h1>
            <p>Menemukan furnitur yang sempurna tidak perlu sulit. Di <b>Noble</b>, kami menghadirkan koleksi furnitur berkualitas tinggi yang dirancang untuk memberikan kenyamanan, fungsionalitas, dan estetika pada setiap ruang di rumah Anda. 
              Setiap potongan kami dibuat dengan perhatian terhadap detail, menggunakan bahan terbaik, dan dengan desain yang mengutamakan keindahan serta kepraktisan.</p>
            <button className='btn'><Link to='/shop'>Lihat sekarang</Link></button>
        </div>
        <div className='header__image'>
          <img src={bannerImg} alt=" gambar banner" />
        </div>
    </div>
  )
}

export default Banner
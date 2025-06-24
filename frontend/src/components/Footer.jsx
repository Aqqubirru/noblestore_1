import React from 'react'
import instaImg1 from "../assets/instagram-1.jpg"
import instaImg2 from "../assets/instagram-2.jpg"
import instaImg3 from "../assets/instagram-3.jpg"
import instaImg4 from "../assets/instagram-4.jpg"
import instaImg5 from "../assets/instagram-5.jpg"
import instaImg6 from "../assets/instagram-6.jpg"

const Footer = () => {
  return (
    <>
        <footer className='section__container footer__container'>
            <div className='footer__col'>
                <h4>Info kontak</h4>
                <p>
                    <span><i className="ri-map-pin-line"></i></span>
                    Jl. Hj. Ronaldo No.7. Kota Bandung. Indonesia
                </p>
                <p>
                    <span><i className="ri-mail-line"></i></span>
                    ronaldomessi@supportnoble.com
                </p>
                <p>
                    <span><i className="ri-instagram-line"></i></span>
                    @Cristiano
                </p>
                <p>
                    <span><i className="ri-whatsapp-line"></i></span>
                    (+62) 1234567890
                </p>
            </div>
            <div className='footer__col'>
                <h4>Perusahaan</h4>
                <a href="/">Home</a>
                <a href="/">Tentang Kami</a>
                <a href="/">Kerja Dengan Kami</a>
                <a href="/">Blog Kami</a>
                <a href="/">Terms & Conditions</a>
            </div>
            <div className='footer__col'>
                <h4>Link Penting</h4>
                <a href="/">Help</a>
                <a href="/">Lacak Pesanan Anda</a>
                <a href="/">Peralatan Rumah</a>
                <a href="/">Alat Elektronik</a>
            </div>
            <div className='footer_col'>
                <h4>Instagram</h4>
                <div className='instagram__grid'>
                    <img src={instaImg1} alt="" />
                    <img src={instaImg2} alt="" />
                    <img src={instaImg3} alt="" />
                    <img src={instaImg4} alt="" />
                    <img src={instaImg5} alt="" />
                    <img src={instaImg6} alt="" />
                </div>

            </div>
        </footer>
        <div className='footer__bar'>
            © 2024 Noble Store by DDA. All rights reserved.
        </div>
    </>
  )
}

export default Footer
import React from 'react'

const PromoBanner = () => {
  return (
    <section className='section__container banner__container'>
        <div className='banner__card'>
            <span><i className="ri-truck-line"></i></span>
            <h4>Gratis Ongkir</h4>
            <p>Memberikan kenyamanan dan kemampuan untuk berbelanja dari mana saja, kapan saja.</p>
        </div>
        <div className='banner__card'>
            <span><i className="ri-wallet-3-line"></i></span>
            <h4>Jaminan uang kembali 100%</h4>
            <p>Noble Store memiliki sistem ulasan di mana pelanggan dapat membagikan Feedback.</p>
        </div>
        <div className='banner__card'>
            <span><i className="ri-customer-service-2-line"></i></span>
            <h4>Customer Service</h4>
            <p>menyediakan layanan dukungan pelanggan untuk membantu pelanggan dengan pertanyaan dan masalah.</p>
        </div>
    </section>
  )
}

export default PromoBanner
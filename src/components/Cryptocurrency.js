import React from 'react';
import './Cryptocurrency.css'
const Cryptocurrency = () => {
    return (
        <div className='container text-white first' >
            <h2 className='display-3'>What Is Cryptocurrency?</h2>
            <p className='lead'>A cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend. Many cryptocurrencies are decentralized networks based on blockchain technology—a distributed ledger enforced by a disparate network of computers. A defining feature of cryptocurrencies is that they are generally not issued by any central authority, rendering them theoretically immune to government interference or manipulation.</p>
            <img src="https://www.analyticsinsight.net/wp-content/uploads/2021/05/AdobeStock_288803828-1-scaled.jpeg" className='image1 w-50 d-block rounded mx-auto' alt="img1" />
            <br />
            
            <h2 className='display-3'>Should you Invest?</h2>
            <div className='row'>
                <p className='lead col-md-12 col-sm-12 col-lg-6'>Owning some cryptocurrency can increase your portfolio's diversification since cryptocurrencies such as Bitcoin have historically shown almost no price correlation with the U.S. stock market. If you believe that cryptocurrency usage will become increasingly widespread over time, then it probably makes sense for you to buy some crypto directly as part of a diversified portfolio. For every cryptocurrency that you invest in, be sure to have an investment thesis as to why that currency will stand the test of time.</p>
                <img src="http://binvested.com.au/wp-content/uploads/Should-I-invest-in-cryptocurrency.jpg" className='col-md-8 col-sm-8 col-lg-6 rounded mx-auto d-block image2' alt="img2" />
            </div>
        </div>
    );
}

export default Cryptocurrency;

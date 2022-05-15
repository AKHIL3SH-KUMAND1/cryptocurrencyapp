import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
const Footer = () => {
    return (
        <div className='body'>
            <footer className='footer mt-auto p-3 border-top'>
                <div className='container row justify-content-between'>
                    <div className='col-sm-12 col-md-3 col-12'>
                        <h4>Call Us</h4>
                        <p className='lead'>Phno:999900909</p>
                        <p className='lead'>Phno:889988998</p>
                    </div>
                    <div className='col-sm-12 col-md-3 col-12'>
                        <h4>Mail Us</h4>
                        <p className='lead'>crypto@gmail.com</p>
                        <p className='lead'>headceo@gmail.com</p>
                    </div>
                    <div className='col-sm-12 col-md-3 col-12'>
                        <h4>Sponsors</h4>
                        <p className='lead'>Soft Bank</p>
                        <p className='lead'>American Express</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;

import React from 'react';
import './Topbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBitcoin, faEthereum } from '@fortawesome/free-brands-svg-icons';
import {  faGlasses, faList } from '@fortawesome/free-solid-svg-icons';
import { Routes, Route } from 'react-router-dom';
import Listofcryp from './Listofcryp';
import Cryptocurrency from './Cryptocurrency';
import Owned from './Owned';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
const Topbar = () => {
    return (
        <div>
            <div className="Topbar">
                <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark" className='top'>
                    <Container>
                        <Navbar.Brand href="/">CryptoCurrency <FontAwesomeIcon icon={faBitcoin}/>  </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="/" className='me-3'>Crypto <FontAwesomeIcon icon={faEthereum} size="1x"/>   </Nav.Link>
                                <Nav.Link href="list" className='me-3'> <FontAwesomeIcon icon={faList} size="1x"/>  List  </Nav.Link>
                                <Nav.Link href="owned">Watchlist <FontAwesomeIcon icon={faGlasses} size="1x"/> </Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/" element={<Cryptocurrency />} />
                    <Route path="/list" element={<Listofcryp />} />
                    <Route path="/owned" element={<Owned />} />
                </Routes>
            </div>
        </div>
    );
}

export default Topbar;

import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Listofcryp.css'

const Listofcryp = () => {
    //setting initial states
    const [search, setSearch] = useState("");
    const [crypt, setCrypt] = useState([]);
    const [active, setActive] = useState(false);

    useEffect(() => {
        getCryptoData()
    }, [])
    //getting data from crypto API
    const getCryptoData = async () => {
        let response = await axios.get(`https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=INR`)
        setCrypt(response.data.coins)
    }
    //filtering all the coin name to lower case
    const filteredCrypt = crypt.filter(val => val.name.toLowerCase().includes(search.toLowerCase()))

    const addUserById = async (Obj) => {
        let response = await axios.post('http://localhost:4000/cryptos', Obj)
        console.log(response)

        if (response.status === 201) {
            setTimeout(()=>{
              setActive(false)
            },2000)
            setActive(true)
        }
    }
    return (
        <div className='container first text-white'>
            <div className={`response ${active?" show":" hidden"}`}>
                <p>hello</p>
            </div>
            <h3 className='display-3 text-center mb-4'>List Of Cryptocurrencies</h3>
            <div className='d-flex mb-5'>
                <input type="text" placeholder='Search' className='text-center form-control me-2' onChange={(change) => { setSearch(change.target.value) }} />
                <FontAwesomeIcon icon={faSearch} size='2x' />
            </div>
            <div className='table-responsive'>
                <table className='table-striped mx-auto'>
                    <thead >
                        <tr className='bold'>
                            <td>Rank</td>
                            <td>Name</td>
                            <td>Symbol</td>
                            <td>Market Cap</td>
                            <td>Price</td>
                            <td>Available Supply</td>
                            <td>Volume</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredCrypt.map((crypto, index) => <tr key={index}>
                                <td className='rank'>{crypto.rank}</td>
                                <td className='logo'>
                                    <a href={crypto.websiteUrl}>
                                        <img src={crypto.icon} alt="logo1" width="30px" />
                                    </a>
                                    <p>{crypto.name}</p>
                                </td>
                                <td>{crypto.symbol}</td>
                                <td className='p-1'>${crypto.marketCap.toFixed(0)}</td>
                                <td>${crypto.price.toFixed(2)}</td>
                                <td>{crypto.availableSupply.toFixed(2)}</td>
                                <td>{crypto.volume}</td>
                                <td>
                                    <button className="btn btn-success ms-3" onClick={() => addUserById(crypto)}>Add</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Listofcryp;

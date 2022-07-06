import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
const Owned = () => {
    const [cryptos, setCryptos] = useState([])

    useEffect(() => {
        getCryptos()
    }, []);

    const getCryptos = async () => {
        let response = await axios.get("http://localhost:4000/cryptos")
        setCryptos(response.data)
        console.log(cryptos)
    }
    const deleteById = async(id) =>{
        await axios.delete(`http://localhost:4000/cryptos/${id}`)
        getCryptos()
        
    }

    return (
        <div className='container text-white'>
            <div className='row row-cols-1 row-cols-sm-1 row-cols-md-1  m-3 flex justify-content-evenly'>
                {
                    cryptos.map((Obj, index) => <div key={index} className='card bg-dark p-3 col-sm-12 col-md-12npm col-lg-5 m-3'>
                        <img src={Obj.icon} alt='tp' width="50px" />
                        <div className='card-body'>
                            <ul className='lead'>
                                <li>Name : {Obj.name}</li>
                                <li>Symbol : {Obj.symbol}</li>
                                <li>Rank : {Obj.rank}</li>
                                <li>Price : ${Obj.price}</li>
                                <li>Volume : {Obj.volume}</li>
                                <li>MarketCap : ${Obj.marketCap}</li>
                                <li>Price Change (1hr) : {Obj.priceChange1h}</li>
                                <li>Price Change (1 day) : {Obj.priceChange1d}</li>
                                <li>Price Change (1 week) : {Obj.priceChange1w}</li>
                            </ul>
                            <button className='btn btn-danger mx-auto d-block ' onClick={()=>deleteById(Obj.id)}>Delete</button>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
}

export default Owned;

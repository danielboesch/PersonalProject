import {useState, useEffect} from 'react'
import axios from 'axios'
import {Component, connect} from 'react-redux'
import Calendar from './Calendar'
import {useSelector, useDispatch} from 'react-redux'

const Utah = (props) => {
    const [utahProducts, setUtahProducts] = useState([])
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const {user} = useSelector((store) => store.auth)


    useEffect(() => {
        axios.get('/api/products')
        .then((res) => {
            setUtahProducts(res.data)
        })
        .catch(err => console.log(err))
    }, [])

       const handleAddToCart = (product_id) => {
        axios.post(`/api/cart/${product_id}`, {startDate, endDate})
        .then(() => console.log('sent to cart'))
        .catch((err) => console.log(err))
       }
       
    return(
        <div>
            <div className="mainImgBox">
                    <h1 className='utahText'>Explore Utah</h1>
                <div className="mainImg"></div>
            </div>
              <section className='utahSection1'>
              {user && <Calendar startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>}

              </section>
              <section  className='allMappedVans'>

             
            {utahProducts.map((product) => {
                console.log(product.location_id)
                if(product.location_id === 1){
                 return (
                     <div key={product.product_id}>
                            <div className='mappedUtahVans'>
                            <div className='mappedImageBox'>
                                <img className='pics' src={product.product_img}/>
                            </div>

                            <div className='mappedUtahInfo'>
                                <h4 className="mappedDesc">{product.product_description}</h4>
                                <h4 className="mappedTitle">{product.product_name}</h4>
                                <h4 className="mappedCapacity">Sleeps <b>{product.capacity}</b></h4>
                                <div className='priceRatingBox'>
                                    <h4 className="mappedPrice"><b>${product.product_price}</b> per day</h4>
                                    <h4 className="mappedRating">{product.rating}★</h4>
                                </div>
                            </div>
                            {user && <Calendar startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>}
                            {user && <button className="reserveBtn" onClick={() => handleAddToCart(product.product_id)}>Reserve</button>}
                            
                            </div>
                        </div>
                        )
                    }
            })}
             </section>
            
        </div>
    )
}

const mapStateToProps = (store) => store.auth

export default connect(mapStateToProps)(Utah)
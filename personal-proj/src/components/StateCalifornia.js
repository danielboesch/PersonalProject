import {useState, useEffect} from 'react'
import axios from 'axios'
import Calendar from './Calendar'
import {Component, connect} from 'react-redux'
import {useSelector, useDispatch} from 'react-redux'





const Cali = (props) => {
    const [caliProducts, setCaliProducts] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const {user} = useSelector((store) => store.auth)

    
    useEffect(() => {
        axios.get('/api/products')
        .then((res) => {
            setCaliProducts(res.data)
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
            <h5 className='linkHomeText'>Home</h5>
            <h5 className='learnMoreText'>Learn More</h5>
<div className="cartDiv" >
<img className='cartBtn' alt='cart button' src="https://png.pngtree.com/png-vector/20190927/ourlarge/pngtree-shopping-cart-icon-png-image_1736148.jpg"></img>
</div>
            <div className="mainImgBox">
                    <h1 className='caliText'>California</h1>
                    {/* <h1 className='caliText2'>California</h1> */}
                <div className="mainCaliImg"></div>
            </div>
              <section className='caliSection1'>
              <ul class='dashCheckList'>
                    <li>✓ 100% free roadside assistance</li>
                    <li>✓ Real people here to help 24/7</li>
                    <li>✓ Get it delivered</li>
                    <li>✓ More reviews. More 5-star ratings</li>
                </ul>
              </section>

              <section  className='allMappedVans'>

             
            {caliProducts.map((product) => {
                console.log(product.location_id)
                if(product.location_id === 2){
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

















        // <div>
        //     <h1>California Page</h1>
        //     {caliProducts.map((product) => {
        //         console.log(Calendar.state)
        //         if(product.location_id === 2){

        //             return (
        //                <div className='caliVanBox' key={product.product_id}>
        //                    <h4>{product.product_name}</h4>
        //                    <img className='pics' src={product.product_img}/>
        //                    <br/>
        //                    {user && <Calendar startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>}
        //                    <br/>
        //                    {user && <button onClick={() => handleAddToCart(product.product_id)}>Reserve</button>}
        //                </div>
        //                    ) 
        //                }
        //     })}
        // </div>
    )
}
const mapStateToProps = (store) => store.auth
export default connect(mapStateToProps)(Cali)


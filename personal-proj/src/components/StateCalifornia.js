import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Calendar from './Calendar'
import {Component, connect} from 'react-redux'
import {useSelector, useDispatch} from 'react-redux'
import Footer from './Footer'
import Scroll from './ScrollLocations'






const Cali = (props) => {
    const [caliProducts, setCaliProducts] = useState([]);
    const [caliExtras, setCaliExtras] = useState([]);
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
    useEffect(() => {
        axios.get('/api/extras')
        .then((res) => {
            setCaliExtras(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const handleAddToCart = (product_id) => {
        window.scrollTo(1700, 1700)
        axios.post(`/api/cart/${product_id}`, {startDate, endDate})
        .then(() => console.log('sent to cart'))
        .catch((err) => console.log(err))
    }


    return(


        <div>
            <Scroll />
            <Link to='/' className='linkHomeTextCali'><b>Home</b></Link>
            {/* <h5 className='linkHomeTextCali'>Home</h5> */}
            <Link to='/utah' className='linkUtah'><b>Utah</b></Link>
            {/* <h5 className='linkUtah'>Utah</h5> */}
            <div className="cartDiv" >
                <Link to='/cart'>
                        <img className='cartBtnUtah' alt='cart button' src="https://png.pngtree.com/png-vector/20190927/ourlarge/pngtree-shopping-cart-icon-png-image_1736148.jpg"></img>
                </Link>
            </div>
            <div className="mainImgBox">
                    <h1 className='caliText'>California</h1>
                    <h2 className='caliSubText'>Experience the magic of the outdoors</h2>
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
              <div className='fillerSection'></div>


              <section  className='allMappedVans'>

             
            {caliProducts.map((product) => {
                console.log(product.location_id)
                if(product.location_id === 2){
                 return (
                     <div key={product.product_id}>
                            {!user && <div className='mappedUtahVans'>
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
                                    <div className='pleaseLoginBox'>
                                        <h4 className='pleaseLogin'>Please log in to reserve this</h4>
                                    </div>
                                </div>
                            </div>
                            {user && <Calendar startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>}
                            {user && <button className="reserveBtn" onClick={() => handleAddToCart(product.product_id)}>Reserve</button>}
                            
                            </div>}

                            {user && <div className='mappedUtahVansLoggedIn'>
                            <div className='mappedImageBox3'>
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
                            
                            </div>}
                        </div>
                        )
                    }
            })}
             </section>
             <section className='allMappedNonVans'>
                 <div className='moreOptionsBox'>
                    <h1 className='moreOptions'>EXTRAS</h1>

                 </div>

             {caliProducts.map((product) => {
                console.log(product.location_id)
                if(product.product_type === 'extra'){
                 return (
                     <div key={product.product_id} className='extraStuff'>
                            {!user && <div className='mappedUtahNonVans'>
                            <div className='mappedImageBox5'>
                                <img className='pics' src={product.product_img}/>
                            </div>

                            <div className='mappedUtahInfo2'>
                                <h4 className="mappedDesc3">{product.product_description}</h4>
                                <h4 className="mappedTitle3">{product.product_name}</h4>
                                <div className='priceRatingBox'>
                                    <h4 className="mappedPrice3"><b>${product.extra_products_price}</b></h4>
                                </div>
                            </div>
                            <div className='pleaseLoginBox2'>
                                        <h4 className='pleaseLogin'>Please log in to reserve this</h4>
                                    </div>
                            
                            </div>}
                           {user && <div className='mappedUtahNonVans2'>
                            <div className='mappedImageBox'>
                                <img className='pics' src={product.product_img}/>
                            </div>

                            <div className='mappedUtahInfo2'>
                                <h4 className="mappedDesc3">{product.product_description}</h4>
                                <h4 className="mappedTitle3">{product.product_name}</h4>
                                <div className='priceRatingBox'>
                                    <h4 className="mappedPrice3"><b>${product.extra_products_price}</b></h4>
                                </div>
                            </div>
                            {user && <Calendar startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>}

                            {user && <button className="reserveBtn2" onClick={() => handleAddToCart(product.product_id)}>Reserve</button>}
                            
                            
                            </div>}
                        </div>
                        )
                    }
            })}

        
                 
             </section>
            <Footer />
            
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


import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Component, connect} from 'react-redux'
import Calendar from './Calendar'
import {useSelector, useDispatch} from 'react-redux'
import Footer from './Footer'
import Scroll from './ScrollLocations'
import {setCart} from '../redux/cartReducer'


const Utah = (props) => {
    const [utahProducts, setUtahProducts] = useState([])
    const [utahExtras, setUtahExtras] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const {user} = useSelector((store) => store.auth)
    const {cart} = useSelector((store) => store.cartReducer)
    const dispatch = useDispatch()





    useEffect(() => {
        axios.get('/api/products')
        .then((res) => {
            setUtahProducts(res.data)
        })
        .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        axios.get('/api/extras')
        .then((res) => {
            setUtahExtras(res.data)
        })
        .catch(err => console.log(err))
    }, [])

       const handleAddToCart = (product_id) => {
           const product = cart.find((product) => product.product_id === product_id)
           window.scrollTo(1700, 1700)
           if(!product){
               axios.post(`/api/cart/${product_id}`, {startDate, endDate})
               .then((res) => {
                   dispatch(setCart(res.data))
               })
               .catch((err) => console.log(err))
           }else{
               axios.put(`/api/cart/${product_id}`, {quantity: product.quantity + 1})
               .then((res) => {
                   dispatch(setCart(res.data))
               })
               .catch(err => console.log(err))
           }
       }
       const handleExtraAddToCart = (product_id) => {
        axios.post(`/api/cart/${product_id}`)
        .then(() => console.log('sent to cart'))
        .catch((err) => console.log(err))
       }
       
    return(
        <div>
            <Scroll />
            <Link to='/' className='linkHomeTextUtah'><b>Home</b></Link>
            {/* <h5 className='linkHomeTextUtah'>Home</h5> */}
            <Link to='/california' className='linkCali'><b>California</b></Link>
            {/* <h5 className='linkCali'>California</h5> */}
        <div className="cartDivUtah" >
            <Link to='/cart'>
                    <img className='cartBtnUtah' alt='cart button' src="https://png.pngtree.com/png-vector/20190927/ourlarge/pngtree-shopping-cart-icon-png-image_1736148.jpg"></img>
            </Link>
        </div>
            <div className="mainImgBox">

                    <h1 className='utahText'>Utah</h1>
                    <h2 className='utahSubText'>Experience the beauty of Utah</h2>

                    {/* <h1 className='utahText2'>Utah</h1> */}
                <div className="mainImg"></div>
            </div>
              <section className='utahSection1'>
              <ul class='dashCheckList'>
                    <li>✓ 100% free roadside assistance</li>
                    <li>✓ Real people here to help 24/7</li>
                    <li>✓ Get it delivered</li>
                    <li>✓ More reviews. More 5-star ratings</li>
                </ul>
              </section>
              <div className='fillerSection'></div>

              <section  className='allMappedVans'>

             
            {utahProducts.map((product) => {
                console.log(product.location_id)
                if(product.location_id === 1){
                 return (

                     <div key={product.product_id} >


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

             {utahProducts.map((product) => {
                console.log(product.location_id)
                if(product.product_type === 'extra'){
                 return (
                     <div key={product.product_id}>
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
    )
}

export default Utah

// const mapStateToProps = (store) => store.auth

// export default connect(mapStateToProps)(Utah)
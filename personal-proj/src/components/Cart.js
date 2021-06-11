import {useState} from 'react'
import {Link} from 'react-router-dom'
import {useEffect} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {setCart} from '../redux/cartReducer'
import Footer from './Footer'
import {connect} from 'react-redux';



const Cart = (props) => {
    const {cart} = useSelector((store) => store.cartReducer)
    const dispatch = useDispatch()
    const [showBox, setShowBox] = useState(true)
  

    
    
    const toggleBox = () => {
        // alert(showBox)
        setShowBox(!showBox)
      }
    const togglePay = () => {
        alert('Thank you for your purchase.')
        // setShowBox(!showBox)
      }

    useEffect(() => {
        axios.get('/api/cart')
        .then((res) => {
            console.log(res.data)
            dispatch(setCart(res.data))
        }).catch(err => {
            console.log(err)
        })
    }, [dispatch])

    const handleDeleteFromCart = (product_id) => {
        axios.delete(`/api/cart/${product_id}`)
        .then((res) => {
            dispatch(setCart(res.data))
        })
        .catch(err => console.log(err))
    }

    const handleChangeQty = (product_id, quantity) => {
        if(quantity === 0){
            handleDeleteFromCart(product_id)
        }else{
        axios.put(`/api/cart/${product_id}`, {quantity})
        .then((res) => {
            dispatch(setCart(res.data))
        })
        .catch(err => console.log(err))
    }
    }
    



    return(
        <div className='backgroundColor'>
        <div className='backgroundColor2'></div>

        <div>
            <Link to='/' className='linkHomeTextCart'><b>Home</b></Link>
            <Link to='/utah' className='linkUtahTextCart'><b>Utah</b></Link>
            <Link to='/california' className='linkCaliTextCart'><b>California</b></Link>
            {/* <h5 className='learnMoreText'>Learn More</h5> */}

            <h1 className='oneMore'>One more step...</h1>

            <div className='testtest2'>

            <div className='testtest'>

            {cart.slice(0).reverse().map((product) => { 
                let startmonth = '';
                let startday = '';
                let startyear = '';
                let endMonth = '';
                let endDay = '';
                let endYear = '';
            

                        if(product.date_start2.includes("-01-")){
                            startmonth = 'January'
                        }
                        if(product.date_start2.includes("-02-")){
                            startmonth = 'February'
                        }
                        if(product.date_start2.includes("-03-")){
                            startmonth = 'March'
                        }
                        if(product.date_start2.includes("-04-")){
                            startmonth = 'April'
                        }
                        if(product.date_start2.includes("-05-")){
                            startmonth = 'May'
                        }
                        if(product.date_start2.includes("-06-")){
                            startmonth = 'June'
                        }
                        if(product.date_start2.includes("-07-")){
                            startmonth = 'July'
                        }
                        if(product.date_start2.includes("-08-")){
                            startmonth = 'August'
                        }
                        if(product.date_start2.includes("-09-")){
                            startmonth = 'September'
                        }
                        if(product.date_start2.includes("-10-")){
                            startmonth = 'October'
                        }
                        if(product.date_start2.includes("-11-")){
                            startmonth = 'November'
                        }
                        if(product.date_start2.includes("-11-")){
                            startmonth = 'December'
                        }

                        if(product.date_start2.includes("-01T")){
                            startday = '1'
                        }
                        if(product.date_start2.includes("-02T")){
                            startday = '2'
                        }
                        if(product.date_start2.includes("-03T")){
                            startday = '3'
                        }
                        if(product.date_start2.includes("-04T")){
                            startday = '4'
                        }
                        if(product.date_start2.includes("-05T")){
                            startday = '5'
                        }
                        if(product.date_start2.includes("-06T")){
                            startday = '6'
                        }
                        if(product.date_start2.includes("-07T")){
                            startday = '7'
                        }
                        if(product.date_start2.includes("-08T")){
                            startday = '8'
                        }
                        if(product.date_start2.includes("-09T")){
                            startday = '9'
                        }
                        if(product.date_start2.includes("-10T")){
                            startday = '10'
                        }
                        if(product.date_start2.includes("-11T")){
                            startday = '11'
                        }
                        if(product.date_start2.includes("-12T")){
                            startday = '12'
                        }
                        if(product.date_start2.includes("-13T")){
                            startday = '13'
                        }
                        if(product.date_start2.includes("-14T")){
                            startday = '14'
                        }
                        if(product.date_start2.includes("-15T")){
                            startday = '15'
                        }
                        if(product.date_start2.includes("-16T")){
                            startday = '16'
                        }
                        if(product.date_start2.includes("-17T")){
                            startday = '17'
                        }
                        if(product.date_start2.includes("-18T")){
                            startday = '18'
                        }
                        if(product.date_start2.includes("-19T")){
                            startday = '19'
                        }
                        if(product.date_start2.includes("-20T")){
                            startday = '20'
                        }
                        if(product.date_start2.includes("-21T")){
                            startday = '21'
                        }
                        if(product.date_start2.includes("-22T")){
                            startday = '22'
                        }
                        if(product.date_start2.includes("-23T")){
                            startday = '23'
                        }
                        if(product.date_start2.includes("-24T")){
                            startday = '24'
                        }
                        if(product.date_start2.includes("-25T")){
                            startday = '25'
                        }
                        if(product.date_start2.includes("-26T")){
                            startday = '26'
                        }
                        if(product.date_start2.includes("-27T")){
                            startday = '27'
                        }
                        if(product.date_start2.includes("-28T")){
                            startday = '28'
                        }
                        if(product.date_start2.includes("-29T")){
                            startday = '29'
                        }
                        if(product.date_start2.includes("-30T")){
                            startday = '30'
                        }
                        if(product.date_start2.includes("-31T")){
                            startday = '31'
                        }
                    

                        if(product.date_start2.includes("2021-")){
                            startyear = '2021'
                        }
                    
                        if(product.date_start2.includes("2022-")){
                            startyear = '2022'
                        }
                    
                        if(product.date_start2.includes("2023-")){
                            startyear = '2023'
                        }
                    
                        if(product.date_start2.includes("2024-")){
                            startyear = '2024'
                        }
                    
                        if(product.date_start2.includes("2025-")){
                            startyear = '2025'
                        }
                        if(product.date_start2.includes("2026-")){
                            startyear = '2026'
                        }
                    
                        if(product.date_start2.includes("2027-")){
                            startyear = '2027'
                        }
                        if(product.date_start2.includes("2028-")){
                            startyear = '2028'
                        }
                        if(product.date_start2.includes("2029-")){
                            startyear = '2029'
                        }
                        if(product.date_start2.includes("2030-")){
                            startyear = '2030'
                        }

                        if(product.date_end.includes("-01-")){
                            endMonth = 'January'
                        }
                        if(product.date_end.includes("-02-")){
                            endMonth = 'February'
                        }
                        if(product.date_end.includes("-03-")){
                            endMonth = 'March'
                        }
                        if(product.date_end.includes("-04-")){
                            endMonth = 'April'
                        }
                        if(product.date_end.includes("-05-")){
                            endMonth = 'May'
                        }
                        if(product.date_end.includes("-06-")){
                            endMonth = 'June'
                        }
                        if(product.date_end.includes("-07-")){
                            endMonth = 'July'
                        }
                        if(product.date_end.includes("-08-")){
                            endMonth = 'August'
                        }
                        if(product.date_end.includes("-09-")){
                            endMonth = 'September'
                        }
                        if(product.date_end.includes("-10-")){
                            endMonth = 'October'
                        }
                        if(product.date_end.includes("-11-")){
                            endMonth = 'November'
                        }
                        if(product.date_end.includes("-11-")){
                            endMonth = 'December'
                        }

                        if(product.date_end.includes("-01T")){
                            endDay = '1'
                        }
                        if(product.date_end.includes("-02T")){
                            endDay = '2'
                        }
                        if(product.date_end.includes("-03T")){
                            endDay = '3'
                        }
                        if(product.date_end.includes("-04T")){
                            endDay = '4'
                        }
                        if(product.date_end.includes("-05T")){
                            endDay = '5'
                        }
                        if(product.date_end.includes("-06T")){
                            endDay = '6'
                        }
                        if(product.date_end.includes("-07T")){
                            endDay = '7'
                        }
                        if(product.date_end.includes("-08T")){
                            endDay = '8'
                        }
                        if(product.date_end.includes("-09T")){
                            endDay = '9'
                        }
                        if(product.date_end.includes("-10T")){
                            endDay = '10'
                        }
                        if(product.date_end.includes("-11T")){
                            endDay = '11'
                        }
                        if(product.date_end.includes("-12T")){
                            endDay = '12'
                        }
                        if(product.date_end.includes("-13T")){
                            endDay = '13'
                        }
                        if(product.date_end.includes("-14T")){
                            endDay = '14'
                        }
                        if(product.date_end.includes("-15T")){
                            endDay = '15'
                        }
                        if(product.date_end.includes("-16T")){
                            endDay = '16'
                        }
                        if(product.date_end.includes("-17T")){
                            endDay = '17'
                        }
                        if(product.date_end.includes("-18T")){
                            endDay = '18'
                        }
                        if(product.date_end.includes("-19T")){
                            endDay = '19'
                        }
                        if(product.date_end.includes("-20T")){
                            endDay = '20'
                        }
                        if(product.date_end.includes("-21T")){
                            endDay = '21'
                        }
                        if(product.date_end.includes("-22T")){
                            endDay = '22'
                        }
                        if(product.date_end.includes("-23T")){
                            endDay = '23'
                        }
                        if(product.date_end.includes("-24T")){
                            endDay = '24'
                        }
                        if(product.date_end.includes("-25T")){
                            endDay = '25'
                        }
                        if(product.date_end.includes("-26T")){
                            endDay = '26'
                        }
                        if(product.date_end.includes("-27T")){
                            endDay = '27'
                        }
                        if(product.date_end.includes("-28T")){
                            endDay = '28'
                        }
                        if(product.date_end.includes("-29T")){
                            endDay = '29'
                        }
                        if(product.date_end.includes("-30T")){
                            endDay = '30'
                        }
                        if(product.date_end.includes("-31T")){
                            endDay = '31'
                        }
                    

                        if(product.date_end.includes("2021-")){
                            endYear = '2021'
                        }
                    
                        if(product.date_end.includes("2022-")){
                            endYear = '2022'
                        }
                    
                        if(product.date_end.includes("2023-")){
                            endYear = '2023'
                        }
                    
                        if(product.date_end.includes("2024-")){
                            endYear = '2024'
                        }
                    
                        if(product.date_end.includes("2025-")){
                            endYear = '2025'
                        }
                        if(product.date_end.includes("2026-")){
                            endYear = '2026'
                        }
                    
                        if(product.date_end.includes("2027-")){
                            endYear = '2027'
                        }
                        if(product.date_end.includes("2028-")){
                            endYear = '2028'
                        }
                        if(product.date_end.includes("2029-")){
                            endYear = '2029'
                        }
                        if(product.date_end.includes("2030-")){
                            endYear = '2030'
                        }
                    
                        
                console.log(product)
        
                return(
                    <div>
                        <div className='startBookingAndPayment'>

                            <div className='happyCamperBox'>
                                <div className='happyCamperStuff'>
                                    <img className='checkoutLogo' src='https://d1o5877uy6tsnd.cloudfront.net/reserve-production/images/icons/shield-a4c1a09ebef7f7f5096eb5600ef5c5c3.svg'></img>
                                    <h3 className='checkoutTextCamper'>Happy camper guarantee</h3>
                                </div>
                                <h4 className='checkoutTextStars'>Our customer reviews have us seeing stars.</h4>
                            </div>
                            <div className={`checkoutInfoBox ${showBox ? "showTest" : ""}`}>
                                <h3 className='checkoutInfoNameStart'>Start Your Booking</h3>
                                <div className='checkoutInfoNameBox'>
                                    <h3 className='checkoutInfoNameText'>Name</h3>
                                    <input className='checkoutInfoFirstName' placeholder='First'></input>
                                    <input className='checkoutInfoLastName' placeholder='Last'></input>
                                </div>
                                <div className='checkoutInfoEmailAndPhone'>
                                    <div className='checkoutInfoEmailBox'>
                                    <h3 className='checkoutInfoEmailText'>Email</h3>
                                    <input className='checkoutInfoEmail' placeholder='Email'></input>
                                    </div>
                                    <div className='checkoutInfoPhoneBox'>
                                    <h3 className='checkoutInfoPhoneText'>Phone</h3>
                                    <input className='checkoutInfoPhone' required placeholder='(XXX) XXX-XXXX'></input>
                                    </div>
                                </div>

                                <div className='checkoutInfoLegal'>
                                    <div className='checkAndLegal'>
                                        <input type="checkbox" required className='checkBox'></input>
                                        <h3 className='textCertify'>I certify that I am at least 25 years old at the time of rental and I have a valid drivers license.</h3>
                                    </div>
                                    <p className='textByClicking'>By clicking "Agree & Continue", you are agreeing to the Terms of Service, Van Rental & Optional Insurance Terms, Privacy Policy, and to receive booking-related texts. Standard messaging rates may apply.</p>
                                </div>

                                <button className='agreeContinue' onClick={toggleBox}>Agree & Continue</button>
                                    </div>

                
                                <div className={`checkoutPayBox ${showBox ? "" : "show2"}`}>
                                    <h3  className='checkoutInfoNameStart'>Checkout</h3>
                                        <div className='totalInfoBox'>
                                            <div className='daysAndPrice'>
                                                <h3 className='paymentTotalDays'>Rental Days: <b className='daysNum'>{(endDay - startday)}</b></h3>
                                                <div className='lineAboveTitle2'></div>

                                                <h3 className='paymentPerDay'><b className='daysNum'>${product.product_price}</b>/Day</h3>
                                            </div>
                                            <h3 className='paymentTotalPreTax'>Rental Price: <b className='daysNum'>${((endDay - startday) * product.product_price) * product.quantity}</b></h3>
                                            {/* <h3>Extras: ${product.extra_products_price}</h3> */}
                                            <h3 className='paymentTax'>Tax: <b className='daysNum'>${((((endDay - startday) * product.product_price) * product.quantity)) * 0.05 }</b></h3>
                                            <div className='lineAboveTitle'></div>
                                            <h3 className='paymentTotal'>Total: <b className='daysNum'>${(((((endDay - startday) * product.product_price) * product.quantity)) * 0.05 ) + (((endDay - startday) * product.product_price) * product.quantity)}</b></h3>
                                            <p className='textByClicking2'>By continuing, I agree to the <b>Terms of Service.</b> I also understand that only verified and approved drivers are authorized to operate the vehicle.</p>
                                    </div>
                                    <button className='agreeContinue2' onClick={togglePay}>Book it!</button>
                                </div>
                        </div>
                    <div>
                    <div className='checkoutOrderInfo'>
                        <div className='checkoutColor'> </div>
                        <div className='checkoutUserInfo'></div>

                 
                        <div key={product.product_cart_id}  className='checkoutAllVanInfo'>
                            <div className='checkoutOrderImgBox'>
                                <img className="checkoutOrderImg" src = {product.product_img}/>
                            </div>
                            <div className='checkoutVanInfo'>
                            <h4 className='mappedTitle2'>{product.product_name}</h4>
                            <h5 className="mappedDesc2">{product.product_description}</h5>
                            {/* <h5 className="mappedCapacity2">Sleeps {product.capacity}</h5> */}
                            <button className='checkoutDeleteBtn' onClick={() => handleDeleteFromCart(product.product_id)}><b>DELETE</b></button>
                            <div className='qtyBox'>
                                <h5 className='qtyText'>Quantity: <b>{product.quantity}</b></h5>
                                <div className='qtyBtnsBox'>
                                    <button className = 'minusBtn' onClick={() => handleChangeQty(product.product_id, product.quantity - 1)}>-</button>
                                    <button className = 'plusBtn' onClick={() => handleChangeQty(product.product_id, product.quantity + 1)}>+</button>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='checkoutDates'>
                            <h5 className='checkoutDatesStart'>{startmonth} {startday}, {startyear}</h5>
                            <h5 className='checkoutDatesArrow'> ➤ </h5>
                            <h5 className='checkoutDatesEnd'>{endMonth} {endDay}, {endYear}</h5>
                        </div>

                    
                    </div>
                    </div>
                    </div>
                )
            })}
            {/* map 118 */}
        </div>
        {/* 117 */}
        </div>
        {/* 115 */}
        </div>
        {/* 62 */}
        </div> 
        // 59
    )
}

export default Cart

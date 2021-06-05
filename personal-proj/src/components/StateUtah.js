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
              <section className='utahSection1'></section>
            {utahProducts.map((product) => {
                console.log(product.location_id)
                if(product.location_id === 1){
                 return (
                     <div key={product.product_id}>
                            <div className='mappedUtahVans'>
                            <h4>{product.product_name}</h4>
                            <h4>${product.product_price}/day</h4>
                            <h4>{product.product_description}</h4>
                            <h4>{product.rating}⭐</h4>
                            <div></div>
                            <img className='pics' src={product.product_img}/>
                            {user && <Calendar startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>}
                            {user && <button onClick={() => handleAddToCart(product.product_id)}>Reserve</button>}
                            
                            </div>
                        </div>
                        )
                    }
            })}
            
        </div>
    )
}

const mapStateToProps = (store) => store.auth

export default connect(mapStateToProps)(Utah)
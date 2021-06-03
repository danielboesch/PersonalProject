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


        // if(startDate && endDate != null){
        //     axios.post(`/api/cart/${product_id}`, {startDate, endDate})
        //     .then(() => console.log('sent to cart'))
        //     .catch((err) => console.log(err))
        // } else if(startDate && endDate === null){
        //     alert("You need to add dates.")
        // }

    }



    return(
        <div>
            <h1>California Page</h1>
            {caliProducts.map((product) => {
                console.log(Calendar.state)
                if(product.location_id === 2){

                    return (
                       <div className='caliVanBox' key={product.product_id}>
                           <h4>{product.product_name}</h4>
                           <img className='pics' src={product.product_img}/>
                           <br/>
                           {user && <Calendar startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>}
                           <br/>
                           {user && <button onClick={() => handleAddToCart(product.product_id)}>Reserve</button>}
                       </div>
                           ) 
                       }
            })}
        </div>
    )
}
const mapStateToProps = (store) => store.auth
export default connect(mapStateToProps)(Cali)


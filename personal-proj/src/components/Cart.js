import {useEffect} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {setCart} from '../redux/cartReducer'

const Cart = (props) => {
    const {cart} = useSelector((store) => store.cartReducer)
    const dispatch = useDispatch()

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
        axios.put(`/api/cart/${product_id}`, {quantity})
        .then((res) => {
            dispatch(setCart(res.data))
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>Cart Page</h1>
            {cart.map((product) => {
                // console.log(product)
                return(
                    <div key={product.product_cart_id}>
                        <h4>{product.product_name}</h4>
                        <h5>Qty: {product.quantity}</h5>
                        <h5>{product.date_start2} TO {product.date_end}</h5>
                        <button onClick={() => handleDeleteFromCart(product.product_id)}>X</button>
                        <button onClick={() => handleChangeQty(product.product_id, product.quantity - 1)}>-</button>
                        <button onClick={() => handleChangeQty(product.product_id, product.quantity + 1)}>+</button>
                        </div>
                )
            })}
        </div>
    )
}

export default Cart
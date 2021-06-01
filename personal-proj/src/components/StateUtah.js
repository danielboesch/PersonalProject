import {useState, useEffect} from 'react'
import axios from 'axios'
import {Component, connect} from 'react-redux'

const Utah = (props) => {
    const [utahProducts, setUtahProducts] = useState([])

    useEffect(() => {
        axios.get('/api/products')
        .then((res) => {
            setUtahProducts(res.data)
        })
        .catch(err => console.log(err))
    }, [])
    return(
        <div>
            <h1>Utah Page</h1>
            {utahProducts.map((product) => {
                console.log(product.location_id)
                if(product.location_id === 1){
                 return (
                    <div key={product.product_id}>
                        <h4>{product.product_name}</h4>
                        <img className='pics' src={product.product_img}/>
                        {props.user && <button> Add to Cart</button>}
                        
                    </div>
                        )
                    }
            })}
            
        </div>
    )
}

const mapStateToProps = (store) => store.auth

export default connect(mapStateToProps)(Utah)

import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { ProductConsumer } from "./context"
import PropTypes from "prop-types"
import Title from "./Title"

function Ecomm() {
    const { product } = ProductConsumer()

    return (
        <ProductWrapper className="row">
            <div className="text-center p-4 ">
                <Title name="Our" title="Products" />
            </div>
            {
                product.map(item => {
                    return <SingleProduct key={item.id} {...item} />
                })
            }
        </ProductWrapper>

    )
}


const SingleProduct = props => {
    const { handleDetail, addToCart, openModal } = ProductConsumer()
    const { id, title, img, price, inCart } = props
    return (

        <ProductWrapper className="col-9 col-sm-6 mx-auto col-md-4 col-lg-3 py-2 ">

            <div className="card overflow-hidden">
                <div className="imgContainer p-5" onClick={() => handleDetail(id)}>

                    <Link to="/details">
                        <img src={img} className="card-img-top" alt={title} />
                    </Link>
                    <button className="cart-btn" disabled={inCart ? true : false}
                        onClick={() => { addToCart(id); openModal(id) }}>
                        {
                            inCart ? (<p className="disabled text-capitalize roboto">In cart</p>) : (<i className="fas fa-cart-plus text-white"></i>)
                        }
                    </button>
                </div>


                <div className="card-footer d-flex justify-content-between align-items-center">
                    <p className="align-self-center mb-0">
                        {title}
                    </p>
                    <h4 className=" mb-0 text-info">
                        $ {price}
                    </h4>
                </div>
            </div>


        </ProductWrapper >

    )
}



SingleProduct.propTypes = {

    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inCart: PropTypes.bool.isRequired
}







const ProductWrapper = styled.div`
    
    margin:0 auto;
    .card{
      
        transition:all 1s linear;
    }
.imgContainer{
    position:relative;
        transition:all 1s linear;
    .cart-btn{
        padding:0.2rem 0.5rem; 
        position:absolute;
        right:0;
        transform:translateX(100%);
        bottom:0;
        transition:all 0.3s linear;
        display:flex;
        justify-content:center;
        align-items:center;

        p{
           font-family:var(--roboto);
         
        }

        h4{
           font-style: italic;
         
        }
    }

    &:hover .cart-btn{
        border:none;
        background:#7E2BF3;
        
        border-radius:2px;
        color:#fff;
         transform:translateX(0%);
        
    }

    &:hover .card-img-top{
        transform:scale(1.2);
    }

    .card-img-top{
        transition:all 0.3s linear;
    }
}
.card-footer{
    
}



`

export default Ecomm
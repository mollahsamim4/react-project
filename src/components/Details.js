
import { Link } from "react-router-dom"
import styled from "styled-components"
import { ProductConsumer } from "./context"

function Details() {

    const { detailProducts, addToCart, openModal } = ProductConsumer();


    const { id, title, img, price, company, info, inCart } = detailProducts
    return (

        < DetailsWrapper className="row p-3" >
            <div className="col-10  col-md-10 col-lg-8 mx-auto">
                <h1 className="text-center">{title}</h1>
                <div className="row mt-5 ">
                    <div className="col-md-6 d-flex justify-content-center align-self-start">
                        <img src={img} alt={title} className="img-fluid" />

                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1>Model: {title}</h1>
                        <h3 className="font-italic">Made By : <br />{company}</h3>
                        <h4 className="roboto text-info ">Price : {price}</h4>

                        <div className="someInfoAboutProduct">
                            <p className="text-capitalize roboto"><strong>Some info about Product :</strong></p>
                            <div className="product_info">
                                <p className="roboto text-muted">{info}</p>
                            </div>
                        </div>
                        <div className="buttonContainer">
                            <button className="back_to_home btn btn-outline-primary bg-gradient btn-lg roboto">
                                <Link to="/ecomm" className=" text-decoration-none">
                                    Back to Product
                                </Link>
                            </button>
                            <button onClick={() => { addToCart(id); openModal(id) }} className="add_to_cart btn btn-outline-warning rounded-1 btn-lg roboto" disabled={inCart ? true : false}>
                                {
                                    inCart ? " In cart" : "Add to cart"
                                }

                            </button>




                        </div>
                    </div>
                </div>
            </div>
        </DetailsWrapper >

    )
}


const DetailsWrapper = styled.div`
    .buttonContainer{
        display:flex;
        align-items:center;
        gap:1rem;
         transition:all 1s linear;
            @media(max-width:567px){
                flex-direction:column;
            }
        button.back_to_home{
       
        //     outline:2px solid #fff;
        //     outline-offset:-5px;
        //     transition:all 1s linear;
            &:hover a{
             color:#fff;
                
                
        //     }
        }

        button.add_to_cart{
            
            &:hover a{
                color:#fff;
            }
        }
    }
`



export default Details
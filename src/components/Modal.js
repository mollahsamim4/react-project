import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductConsumer } from "./context"

function Modal() {
    const { modalProduct, closeModal, isModalOpen } = ProductConsumer();

    if (isModalOpen) {
        const { img, title, price } = modalProduct
        return (
            < ModalWrapper >

                <div className="customModal">
                    <h4 className="text-center monteserrat">Item added to cart</h4>
                    <img src={img} className="img-fluid" alt={title} />
                    <h2>{title}</h2>
                    <h4 className="text-muted">Price :{price}</h4>
                    <button className="custom_btn go_to_home " onClick={() => closeModal()}>
                        <Link to="/ecomm" >
                            Continue Shopping
                        </Link>
                    </button>
                    <button className="custom_btn go_to_cart" onClick={() => closeModal()}>
                        <Link to="/cart" className="">
                            Go to cart
                        </Link>
                    </button>
                </div>
            </ModalWrapper >
        )

    }
    return <></>
}

const ModalWrapper = styled.div`
position:fixed;
top:0;
background:rgba(0,0,0,0.2);
width:100%;
bottom:0;
display:flex;
justify-content:center;
align-items:center;
transition:all 0.5s ease-in;

.customModal{
    background:#fff;
    padding:1rem;
    min-width:350px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:.5rem;
    border-radius:4px;
    img{
        height:230px;
    }

    button.custom_btn{
        background:none;
        
        
        font-weight:600;
        a{
            text-decoration:none;
        }
    }

    button.go_to_home{
        box-shadow:0 0 0 1px #85DAFF;
        font-size:1.3rem;
        transition:all 0.5s ease;
        &:hover{
            background:#85DAFF;
            a{
                color:#fff;
            }
        }
        a{
            color:#30DAFF;
        }
    }
      button.go_to_cart{
        box-shadow:0 0 0 1px #F3AA5D;
        font-size:1.3rem;
        transition:all 0.5s ease;
        &:hover{
            background:#F3AA5D;
            a{
                color:#fff;
            }
        }
        a{
            color:#F3AA5D;
        }
    }
}

`


export default Modal
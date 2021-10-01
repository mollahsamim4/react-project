import React, { useCallback, useContext, useEffect, useState } from "react"
import { tourData } from "../tourdata/tourdata"
import { phoneProducts, detailProduct } from "../phone_product"

const ProductContext = React.createContext()


const ProductProvider = (props) => {

    const [phoneProduct, setPhoneProduct] = useState([])
    const [detailProducts, setDetailProducts] = useState(detailProduct)
    const [cart, setCart] = useState([])

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalProduct, setModalProduct] = useState()
    const [cartSubTotal, setCartSubTotal] = useState(0)
    const [cartTax, setCartTex] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)


    useEffect(() => {

        setProducts()

    }, [])



    const setProducts = e => {

        let tempProducts = [];

        phoneProducts.forEach(item => {
            const singleItem = { ...item }
            tempProducts = [...tempProducts, singleItem]

        })



        setPhoneProduct(tempProducts)


    }

    const getItem = id => phoneProduct.find(item => item.id === id)

    const handleDetail = id => {
        const product = getItem(id);
        let newProduct = { ...detailProducts, ...product }

        setDetailProducts(newProduct)
        // const searchProduct = phoneProduct.filter(item => item.id == id)
        // const modifyDetails = { ...searchProduct }
        // console.log(modifyDetails)
    }

    const addToCart = id => {
        console.log("calling add to cart")
        const tempProducts = [...phoneProduct]
        const index = tempProducts.indexOf(getItem(id))
        const product = tempProducts[index]
        product.inCart = true
        product.count = 1;

        const price = product.price
        product.total = price

        let newDetailProduct = { ...detailProducts, ...product }

        setDetailProducts(newDetailProduct)

        setPhoneProduct(tempProducts)

        setCart((pre) => {
            return [...pre, product]
        })



    }

    const openModal = id => {
        const product = getItem(id)
        setModalProduct(product)
        setIsModalOpen(true)

    }
    const closeModal = e => {
        setIsModalOpen(false)
    }

    const removeItem = id => {
        let tempProduct = [...phoneProduct];
        let index = tempProduct.indexOf(getItem(id))
        const product = tempProduct[index];
        product.inCart = false;
        product.total = 0;
        product.count = 0;
        setPhoneProduct(tempProduct)

        const cartProduct = cart.filter(item => item.id !== id);
        setCart(cartProduct)





    }

    const cartCountDecrease = id => {
        const tempCart = [...cart]
        const index = tempCart.indexOf(tempCart.find(item => item.id === id))
        const newCart = tempCart[index]

        newCart.count = newCart.count - 1
        if (newCart.count === 0) {
            const newTempCart = tempCart.filter(item => item.id !== id)
            // const index = tempCart.indexOf(tempCart.find(item => item.id == id))
            // const newCart = tempCart[index]
            setCart(newTempCart)
        }
        else {


            newCart.total = newCart.count * newCart.price;
            setCart(tempCart)
        }




    }
    const cartCountIncrease = id => {

        const tempCart = [...cart]
        const index = tempCart.indexOf(tempCart.find(item => item.id === id))
        const newCart = tempCart[index]

        newCart.count = newCart.count + 1
        newCart.total = newCart.count * newCart.price;
        setCart(tempCart)

    }


    const clearCart = e => {
        setCart([]);
        setProducts()
    }

    const setSubtotal = useCallback(() => {
        const cartProduct = [...cart];
        const subTotal = cartProduct.reduce((total, item) => {
            total = total + item.total
            return total;
        }, 0)
        setCartSubTotal(subTotal)
        const tax = 15;
        setCartTex(tax + "%")
        const totalWithTaxt = (subTotal + (100 / tax)).toFixed(2);
        setCartTotal(totalWithTaxt)

    }, [cart])

    useEffect(() => {
        setSubtotal()

    }, [setSubtotal])



    return (
        <ProductContext.Provider value={{ tourData: tourData, handleDetail: handleDetail, addToCart: addToCart, product: phoneProduct, detailProducts: detailProducts, openModal: openModal, closeModal: closeModal, modalProduct: modalProduct, cart: cart, removeItem: removeItem, cartCountDecrease: cartCountDecrease, cartCountIncrease: cartCountIncrease, cartSubTotal, cartTax, cartTotal, isModalOpen, clearCart: clearCart }}>
            {props.children}
        </ProductContext.Provider>
    )
}



const ProductConsumer = e => {
    return useContext(ProductContext)
}

export { ProductProvider, ProductConsumer }
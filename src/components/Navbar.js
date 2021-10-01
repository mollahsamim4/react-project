
import { Route, Switch, Link } from "react-router-dom"
import logo from "../logo/logo.png"
import About from "./About"
import Ecomm from "./Ecomm"
import Home from "./Home"
import Todo from "./Todo"
import Tour from "./Tour"
import ErrorPage from "./ErrorPage"
import styled from "styled-components"
import Details from "./Details"
import Cart from "./Cart"
import { ButtonContainer } from "./button"
import { ProductConsumer } from "./context"

function Navbar() {
    const { cart } = ProductConsumer()
    return (
        <>
            <Nav className="topNav">
                <img src={logo} alt="logo" />
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/tours">Tours</Link>
                    </li>
                    <li>
                        <Link to="/todo">Todo</Link>
                    </li>
                    <li>
                        <Link to="/ecomm">Ecomm</Link>
                    </li>
                    <li>
                        <ButtonContainer>
                            <Link to="/cart">My cart {cart && cart.length > 0 ? cart.length : null}</Link>
                        </ButtonContainer>
                    </li>

                </ul>

            </Nav>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/tours" component={Tour} />
                <Route path="/todo" component={Todo} />
                <Route path="/ecomm" component={Ecomm} />
                <Route path="/cart" component={Cart} />
                <Route path="/details" component={Details} />
                <Route component={ErrorPage} />
            </Switch>

        </>
    )
}

const Nav = styled.nav`
background:#542578;

justify-content:space-evenly;
transition:background 0.3s ease-in-out;

&:hover{
    background:#544578
}
ul{
   
    padding:0.3rem;

}


`


export default Navbar
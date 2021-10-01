import { Link } from "react-router-dom"

import ErrorImage from "../asset/404.png"


function ErrorPage(props) {
    const { pathname } = props.location;

    const searchWord = pathname.split("/")[1]
    console.log(props)

    return (
        <div className="custom_container flex-column">
            <img src={ErrorImage} alt="404" className="Error_image" />
            <h1 className="text-warning roboto monteserrat bolder">Your Search URL <span className="text-primary text-uppercase">{searchWord}</span> Not found</h1>
            <Link to="/" className="custom_btn text-decoration-none btn-lg">Go to Home</Link>

        </div>
    )
}

export default ErrorPage
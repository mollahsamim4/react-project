import { useRef, useState } from "react"
import styled from "styled-components";
import { ProductConsumer } from "./context"



function Tour() {



    const [showInfo, setShowInfo] = useState(false)

    const showHideRef = useRef()

    const handleInfo = e => {

        if (showHideRef.current.tagName === e.target.tagName) {
            setShowInfo(!showInfo)
        }




    }


    const { tourData, handleName } = ProductConsumer()

    return <TourContainer className="tour_container p-4 gap-3">

        {
            tourData.map(all => {
                return <TourdataList key={all.id} showHideRef={showHideRef} product={all} handleName={handleName} handleInfo={handleInfo} showInfo={showInfo} />
            })
        }

    </TourContainer>


}
const TourdataList = ({ product, handleName, handleInfo, showHideRef, showInfo }) => {

    const { city, img, info, name } = product

    return (
        <div className="tour" >
            <div className="img">
                <img src={img} alt={name} />
            </div>
            <div className="information">
                <h2>{city}</h2>
                <h5>{name}</h5>
                <div className="inform_button">
                    <span>Info</span>
                    <button className="tour_btn" onClick={(e) => handleInfo(e)} ref={showHideRef}><i className="fas fa-caret-down    " ></i></button>

                </div>
                {showInfo && <p className="info">{info}</p>}
            </div>
        </div>
    )
}


const TourContainer = styled.div`

`




export default Tour
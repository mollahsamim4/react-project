import { useEffect } from "react"


function ModalText({ modalContent, setIfModalOpen }) {
    useEffect(() => {
        setTimeout(() => {
            setIfModalOpen(false)
        }, 3000)
    }, [setIfModalOpen])
    return (
        <div className="modalText d-inline-flex align-items-center justify-content-lg-center mx-auto">
            <p className="text-center p-2">{modalContent}</p>


        </div>
    )
}


export default ModalText


function Title({ name, title }) {
    return (
        <>
            <div className="text-center">
                <h1 className="text-dark font-italic ">{name} <strong>{title}</strong></h1>
            </div>

        </>
    )
}


export default Title
import imgLoanding from "../../assets/loading.gif"
function AnimationLoanding() {
    return (
        <>
            <div className="d-flex w-100 h-100 justify-content-center align-items-center fw-bold">
                <h2>Londing</h2>
                <img src={imgLoanding} width={'10%'} alt="" />
            </div>
        </>
    )
}

export default AnimationLoanding


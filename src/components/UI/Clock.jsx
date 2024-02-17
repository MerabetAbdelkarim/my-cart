import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { ImSad } from "react-icons/im";

function Clock() {
    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()
    const [over, setOver] = useState(false)

    let interval ;
    const countDown =()=>{
        const destination = new Date('jul 17, 2024')
        interval = setInterval(()=>{
            const now = new Date().getTime()
            const different = destination - now

            const days = Math.floor(different / (1000 * 60 * 60 * 24));
            const hours = Math.floor((different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((different % (1000 * 60)) / 1000);

            if (different < 0) {
                clearInterval(interval)
                setOver(true);
                setDays(0)
                setHours(0)
                setMinutes(0)
                setSeconds(0)
            }else{
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        })
    }

    useEffect( ()=>{
        countDown()
    },[] )
    return (
        <>
            
            <Row className="p-3 align-items-center">
                <Col xs={2} lg={2}>
                    <div className="d-inline">
                        <h3>{days}</h3>
                        <h6>Days</h6>
                    </div>
                </Col>
                <Col xs={1} lg={1}>
                    <h4 className="">:</h4>
                </Col>
                <Col xs={2} lg={2}>
                    <div className="d-inline">
                        <h3>{hours}</h3>
                        <h6>Hours</h6>
                    </div>
                </Col>
                <Col xs={1} lg={1}>
                    <h4 className="">:</h4>
                </Col>
                <Col xs={2} lg={2}>
                    <div className="d-inline">
                        <h3>{minutes}</h3>
                        <h6>Minutes</h6>
                    </div>
                </Col>
                <Col xs={1} lg={1}>
                    <h4 className="">:</h4>
                </Col>
                <Col xs={3} lg={3}>
                    <div className="d-inline">
                        <h3>{seconds}</h3>
                        <h6>Seconds</h6>
                    </div>
                </Col>
            </Row>
            {over && <h5 style={{color:'#D04848'}}>Offer is over <ImSad /></h5>}
        </>
    )
}

export default Clock
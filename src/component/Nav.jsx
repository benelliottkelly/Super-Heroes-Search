import { useState } from "react";
import { Link } from "react-router-dom"

// Bootstrap Components
import Modal from 'react-bootstrap/Modal'
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



export default function Nav() {
  const [show, setShow] = useState(false)
  // src={logoIcon}
  return (
    <>
      <header>

        <Link to="/" ></Link>
        <div>
          <p>Turn page </p>
          <button className='nav-toggle' onClick={() => setShow(true)}>

          </button>
        </div>
      </header>

      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <nav onClick={() => setShow(false)}>
            <Container className="wrapper">
              <Row>
                <Col md={12}><Link className="homelink" to="/">Home</Link></Col>
                <Col md={6}><Link className="indexlink" to="/heroes">Heroes Index</Link></Col>
                <Col md={6}><Link className="singlelink" to="/battle">Battle</Link></Col>


              </Row>
            </Container>

          </nav>
        </Modal.Header>
      </Modal>
    </>
  )
}
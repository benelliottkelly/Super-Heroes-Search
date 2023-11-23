import { useState } from "react";
import { Link } from "react-router-dom"

// Bootstrap Components
import Modal from 'react-bootstrap/Modal'

export default function Nav() {
  const [show, setShow] = useState(false)
  // src={logoIcon}
  return (
    <>
      <header className='p-2 p-md-3 p-lg-4'>
        <Link to="/">Home</Link>
        <button className='nav-toggle' onClick={() => setShow(true)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <nav onClick={() => setShow(false)}>
            <Link to="/">Home</Link>
            <Link to="/heroes">Heroes Index</Link>
            <Link to="/heroes/:id">Hero Single</Link>
          </nav>
        </Modal.Header>
      </Modal>
    </>
  )
}
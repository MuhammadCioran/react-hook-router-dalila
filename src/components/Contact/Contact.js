import React from 'react'
import { ImTwitter,ImFacebook2,ImYoutube } from "react-icons/im";
import { IconContext } from "react-icons";
import { Row, Col, Container, Navbar} from 'react-bootstrap';
import './Contact.css'
const Contact = () => {
    return (
        <Container className="container">    
        <Row className="contact">
          {/* col 1 */}
            <Col>
            <h4> CONTACT US</h4>
            <ul className="list-unstyled">
                <li> GO My Code GAFSA-TUNISIA</li>
                <li>Main street</li>
                <li> +216-92999999</li>
            </ul>
            </Col>
          {/* col 2 */}
            <Col>
            <h4> SOCIAL MEDIA </h4>
            <IconContext.Provider value={{color: "#aab8c2",marginTop:"10px",size:"1.6rem"}}>
                <Navbar className="media">
                <Navbar.Brand href="https://twitter.com/login?lang=fr"><ImTwitter/></Navbar.Brand>
                <Navbar.Brand href="https://www.youtube.com/"><ImYoutube/></Navbar.Brand>
                <Navbar.Brand href="https://www.facebook.com/"><ImFacebook2/></Navbar.Brand>
                </Navbar>
                </IconContext.Provider>
            </Col>
        </Row>
        </Container>
    )
}

export default Contact
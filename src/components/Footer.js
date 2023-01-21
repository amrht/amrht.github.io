import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center" style={{marginTop:"150px"}}>
          
          <Col className="text-center" style={{marginTop:"70px"}}>
          <div className="social-icon">
                <a onClick={(e) => {e.preventDefault();window.location.href='https://www.linkedin.com/in/arham-hayat-0a8819248/';}}><img src={navIcon1} alt="" /></a>
                <a onClick={(e) => {e.preventDefault();window.location.href='https://github.com/amrht';}}><img src={navIcon2} alt="" /></a>
                <a onClick={(e) => {e.preventDefault();window.location.href='https://www.instagram.com/a.hyatt_/';}}><img src={navIcon3} alt="" /></a>
              </div>
            <p>Thank you for attention</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

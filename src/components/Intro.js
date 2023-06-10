import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";

const Intro = () => {
  const scrollToSection = () => {
    scroll.scrollTo(1000); // Ganti dengan nilai offset atau ID elemen target yang diinginkan
  };
  return (
    <div className="intro">
      <div>
        <Link to="section 1" smooth={true} duration={500}>
          Tautan ke Bagian 1
        </Link>
      </div>
      <Container
        className="text-white text-center d-flex justify-content-center
          align-items-center"
      >
        <Row>
          <Col>
            <div className="title">NONTON FREE GA</div>
            <div className="title">GA PAKE TICKET</div>
            <div className="IntroButton mt-4 text-center">
              <Button onClick={scrollToSection}>List Semua Film</Button>
              <div id="section 1"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;

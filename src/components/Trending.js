import { Card, Container, Row, Col, Image } from "react-bootstrap";
import demonslayerImage from "../assets/images/trending/demonslayer.jpeg";
import anotherImage from "../assets/images/trending/another.jpeg";
import aotImage from "../assets/images/trending/aot.jpeg";
import awiskerImage from "../assets/images/trending/awisker.jpeg";
import darlingImage from "../assets/images/trending/darling.jpeg";
import hunterImage from "../assets/images/trending/hunter.jpeg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image
                src={demonslayerImage}
                alt="DemonSlayer Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className=" text-center">
                    Kimetsu No Yaiba
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={anotherImage}
                alt="Another Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className=" text-center">
                    Kimetsu No Yaiba
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={aotImage}
                alt="Attack On Titan Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className=" text-center">
                    Attack On Titan
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={awiskerImage}
                alt="DemonSlayer Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className=" text-center">
                    Kimetsu No Yaiba
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={darlingImage}
                alt="DemonSlayer Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className=" text-center">
                    Kimetsu No Yaiba
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={hunterImage}
                alt="DemonSlayer Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className=" text-center">
                    Hunter X Hunter
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;

import { Card, Container, Row, Col, Image } from "react-bootstrap";
import avengerImage from "../assets/images/superhero/avenger.jpeg";
import blackwidowImage from "../assets/images/superhero/blackwidow.jpeg";
import captainamerikaImage from "../assets/images/superhero/captainamerika.jpeg";
import hulkImage from "../assets/images/superhero/hulk.jpeg";
import ironmanImage from "../assets/images/superhero/ironman.jpeg";
import thorImage from "../assets/images/superhero/thor.jpeg";

const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">SUPERHERO MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image
                src={avengerImage}
                alt="Avenger Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className=" text-center">Avenger</Card.Title>
                  <Card.Text className="text-left">
                    Synopsis : After the devastating events of Avengers:
                    Infinity War (2018), the universe is in ruins due to the
                    efforts of the Mad Titan, Thanos. With the help of remaining
                    allies, the Avengers must assemble once more in order to
                    undo Thanos's actions and undo the chaos to the universe, no
                    matter what consequences may be in store, a nd no matter who
                    they face...
                  </Card.Text>
                  <Card.Text className="text-left">
                    Diunggah April 1, 2021 12:39 am | Durasi 3 jam 1 menit
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={blackwidowImage}
                alt="Another Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
                  <Card.Title className=" text-center">Black Widow</Card.Title>
                  <Card.Text className="text-left">
                    Synopsis Dalam film thriller mata-mata Marvel Studios yang
                    penuh aksi "Black Widow," Natasha Romanoff alias Black Widow
                    menghadapi bagian-bagian gelap dari buku besarnya ketika
                    konspirasi berbahaya yang memiliki hubungan dengan masa
                    lalunya muncul. Natasha harus berurusan dengan sejarahnya
                    sebagai mata-mata.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Diunggah September 1, 2021 9:36 am | Durasi 2 jam 14 menit
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={captainamerikaImage}
                alt="Attack On Titan Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className=" text-center">
                    Captain America
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
                src={hulkImage}
                alt="DemonSlayer Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className=" text-center">Hulk</Card.Title>
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
                src={ironmanImage}
                alt="DemonSlayer Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className=" text-center">Iron Man</Card.Title>
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
                src={thorImage}
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

export default Superhero;

import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.css";
const About = () => {
  return (
    <>
      <h1 className="header">About The Band</h1>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src="/AndyJ.png" />
              <Card.Body>
                <Card.Title>Andy Johnson</Card.Title>
                <Card.Text>
                  As an accomplished lead guitar player, Andy Johnson performs
                  with his originals-focused band Thinger on top of being the
                  lead guitarist for Dr. Whateva. He is an avid fan of the
                  Grateful Dead, Phish, The Allman Brothers, and a multitude of
                  other influences that carry over into his voracious attack on
                  guitar. He is also a huge fan of all things related to the
                  University of Alabama.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="/AlexR.png" />
              <Card.Body>
                <Card.Title>Alex Reynolds</Card.Title>
                <Card.Text>
                  Alex is the newest member of Dr. Whateva and brings with him a
                  youthful exuberance and an enthusiasm for playing music. When
                  not drumming for Dr. Whateva, you might find Alex playing
                  guitar or drums with The Mishaps.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="/MattMichael.jpeg" />
              <Card.Body>
                <Card.Title>Matt Michael</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Photo Credit: Bud Gambrell</Card.Subtitle>
                <Card.Text>
                  Matt is a talented multi-instrumentalist who plays bass and
                  sings in Dr. Whateva. Matt has a forthcoming record
                  <em>Second Coming</em>, which showcases his musicianship and
                  songwriting ability. When not playing music, you can find Matt
                  at the South Huntsville Motor Speedway watching the races, or
                  spending time with his family.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="/clayodell.PNG" />
              <Card.Body>
                <Card.Title>Clay O'Dell</Card.Title>
                <Card.Text>
                  Clay is predominantly a rhythm guitarist/vocalist for Dr.
                  Whateva. On top of Dr. Whateva, O'Dell plays with the cover
                  band Sturgill's Turtles, and his originals project The
                  Grassring. Some of his influences include Jerry Garcia, Bob
                  Weir, Derek Trucks, and Blake Mills.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default About;

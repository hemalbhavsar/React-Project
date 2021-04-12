import { Container , Image , Carousel , Row , Col } from 'react-bootstrap';
import {Helmet} from "react-helmet";

function Home() {
  return (
    <div>
        <Helmet>
            <title>Home Page</title>
        </Helmet>
        <Carousel>
          <Carousel.Item>
          <Image src="images/banner1.jpg" className="w-100" fluid />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <br/>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <Image src="images/banner2.jpg" className="w-100" fluid />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <section>
            <Container>
              <Row>
                <Col lg={4} md={12}>
                  <div className="home-img">
                      <Image src="images/home-img.jpg" className="w-100" fluid />
                  </div>
                </Col>
                <Col lg={8} md={12}>
                  <div className="home-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at mattis sem. Quisque dui arcu, maximus quis elit nec, elementum gravida eros. Cras facilisis, elit eget tempus finibus, elit dolor faucibus sapien, nec convallis orci lorem elementum mauris. Sed congue pharetra mauris, id tincidunt lacus ullamcorper quis. Donec cursus nisi sed neque porttitor blandit. Maecenas ac felis vel sapien facilisis pharetra non vel diam.</p>
                    <p>Sed congue pharetra mauris, id tincidunt lacus ullamcorper quis. Donec cursus nisi sed neque porttitor blandit. Maecenas ac felis vel sapien facilisis pharetra non vel diam. Donec cursus nisi sed neque porttitor blandit. Maecenas ac felis vel sapien facilisis pharetra non vel diam.</p>
                  </div>
                </Col>
              </Row>
            </Container>
        </section>
    </div>
  );
}

export default Home;

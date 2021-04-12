import { Container , Row , Col } from 'react-bootstrap';

function Footer() {
    return(
        <div>
            <div className="footer">
                <Container>
                    <Row>
                        <Col md={12}>
                            <p>Copyright @ 2021 | All Rights Reserved</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Footer;
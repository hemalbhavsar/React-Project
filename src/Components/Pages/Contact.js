import { Container , Image , Row , Col , Form , Button } from 'react-bootstrap';
import {Helmet} from "react-helmet";
import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fname: '' , lname: '', Phone: '', Email: '', Message: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    alert('First Name : ' + this.state.fname + '\nLast Name : ' + this.state.lname + '\nEmail Address : ' + this.state.Email + '\nPhone Number : ' + this.state.Phone + '\nMessage : ' + this.state.Message );
    event.preventDefault();
  }

  render() {
    return (
    <div>
        <Helmet>
            <title>Contact Us</title>
        </Helmet>
        <div class="inner-banner">
            <Image class="w-100" src="images/inner-banner.jpg" />
        </div>
        <section>
            <Container>
              <h2 class="text-center">Contact Us</h2>
              <hr/>
              <br/>
                <Row>
                  <Col md={4}>
                      <div class="address">
                          <h5>Contact Info</h5>
                          <p><i class="fa fa-location-arrow"></i>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit, sed do</p>
                          <p><i class="fa fa-envelope"></i>dummy@gmail.com</p>
                          <p><i class="fa fa-phone"></i>202-555-0165&nbsp;&nbsp;/&nbsp;&nbsp;202-555-0166</p>
                      </div>
                  </Col>
                  <Col md={{ span: 6, offset: 2 }}>
                    <Form onSubmit={this.handleSubmit}>
                      <Row>
                        <Col md={6}>
                            <Form.Group controlId="formBasicFname">
                              <Form.Control type="text" placeholder="First Name" value={this.state.fname} onChange={this.handleChange} name="fname" />
                              <span>Entered Name: {this.state.fname}</span>
                              </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="formBasicLname">
                            <Form.Control type="text" placeholder="Last Name" value={this.state.lname} onChange={this.handleChange} name="lname" />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email Address" value={this.state.Email} onChange={this.handleChange} name="Email" />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="formBasicPhone">
                            <Form.Control type="number" placeholder="Phone Number" value={this.state.Phone} onChange={this.handleChange} name="Phone" />
                          </Form.Group>
                        </Col>
                        <Col md={12}>
                          <Form.Group controlId="MessageTextarea">
                            <Form.Control as="textarea" rows={3} placeholder="Message" value={this.state.Message} onChange={this.handleChange} name="Message" />
                          </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Button variant="outline-primary" type="submit">
                              Submit
                            </Button>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>
            </Container>
        </section>
    </div>
  );
}
}
export default Contact;

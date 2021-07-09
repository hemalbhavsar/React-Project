import { Container, Image, Row, Col, Form, Button } from 'react-bootstrap';
import { Helmet } from "react-helmet";
import React from 'react';
import ReactFormInputValidation from "react-form-input-validation";

class ValidationForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      fields: {
        fname: "",
        lname: "",
        message: "",
        email: "",
        phone_number: ""
      },
      errors: {}
    };
    this.form = new ReactFormInputValidation(this);
    this.form.useRules({
      fname: "required",
      lname: "required",
      message: "required",
      email: "required|email",
      phone_number: "required|numeric|digits_between:10,12",
    });
    this.form.onformsubmit = (fields) => {
      // Do you ajax calls here.
    }
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
            <hr />
            <br />
            <Row>
              <Col md={4}>
                <div class="address">
                  <h5>Contact Info</h5>
                  <p><i class="fa fa-location-arrow"></i>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit, sed do</p>
                  <p><i class="fa fa-envelope"></i>dummy@gmail.com</p>
                  <p><i class="fa fa-phone"></i>202-555-0165&nbsp;&nbsp;/&nbsp;&nbsp;202-555-0166</p>
                </div>
              </Col>
              <Col md={{ span: 7, offset: 1 }}>
                <Form onSubmit={this.handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="formBasicFname">
                        <Form.Control type="text" placeholder="First Name" data-attribute-name="first name" value={this.state.fields.fname} onChange={this.form.handleChangeEvent} name="fname" onBlur={this.form.handleBlurEvent} />
                        <span className="error">
                          {this.state.errors.fname ? this.state.errors.fname : " "}
                        </span>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formBasicLname">
                        <Form.Control type="text" placeholder="Last Name" data-attribute-name="last name" value={this.state.fields.lname} onChange={this.form.handleChangeEvent} name="lname" onBlur={this.form.handleBlurEvent} />
                        <span className="error">
                          {this.state.errors.lname ? this.state.errors.lname : " "}
                        </span>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email Address" name="email" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.email} />
                        <span className="error">
                          {this.state.errors.email ? this.state.errors.email : ""}
                        </span>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formBasicPhone">
                        <Form.Control type="tel" placeholder="Phone Number" name="phone_number" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.phone_number} />
                        <span className="error">
                          {this.state.errors.phone_number ? this.state.errors.phone_number : ""}
                        </span>
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group controlId="MessageTextarea">
                        <Form.Control as="textarea" rows={3} placeholder="Message" name="message" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.message} />
                        <span className="error">
                          {this.state.errors.message ? this.state.errors.message : ""}
                        </span>
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Button variant="outline-primary" type="submit" className="float-right">
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
export default ValidationForm;

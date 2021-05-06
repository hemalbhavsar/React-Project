import React from 'react'
import { Container, Image } from 'react-bootstrap';
import { Helmet } from "react-helmet";

const List = ({ lists }) => {
  return (
    <div>
      <Helmet>
        <title>Team</title>
      </Helmet>
      <div class="inner-banner">
        <Image class="w-100" src="images/inner-banner.jpg" />
      </div>
      <section>
        <Container>
          {lists.map((contact) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{contact.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                <p class="card-text">{contact.company.catchPhrase}</p>
              </div>
            </div>
          ))}
        </Container>
      </section>
    </div>
  )
};

export default List
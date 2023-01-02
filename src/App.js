/* eslint-disable */

import { useState } from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import logo from "./logo.svg";
import "./App.css";
import "./test.css";
import data from "./data.js";

function App() {
  let [shoes] = useState(data);

  console.log(shoes);

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Container>
        <Row>
          {shoes.map(function (a, i) {
            return (
              <Col md={4}>
                <img src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`} />
                <h4>{shoes[i].title}</h4>
                <p>{shoes[i].price.toLocaleString()}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;

import React from "react";
import { ListGroup, Container, Row, Col, Button } from "react-bootstrap";

const ViewStudent = () => {
  return (
    <Container className="body">
      <ListGroup className="col-lg-6 col-md-8 col-sm-10 mx-auto">
        <ListGroup.Item variant="dark" className="table-header">
          View Student Complete Data
        </ListGroup.Item>
        <ListGroup.Item variant="light" className="table-sub-header">
          <Row>
            <Col>
              <label>Student ID</label>
            </Col>
            <Col>12345789211686</Col>
          </Row>
          <Row>
            <Col>
              <label>Student Name</label>
            </Col>
            <Col>---- sample text data ----</Col>
          </Row>
          <Row>
            <Col>
              <label>Father Name</label>
            </Col>
            <Col>---- sample text data ----</Col>
          </Row>
          <Row>
            <Col>
              <label>Phone</label>
            </Col>
            <Col>---- sample text data ----</Col>
          </Row>
          <Row>
            <Col>
              <label>Address</label>
            </Col>
            <Col>---- sample text data ----</Col>
          </Row>
          <Row>
            <Col>
              <label>Age</label>
            </Col>
            <Col>---- sample text data ----</Col>
          </Row>
          <Row>
            <Col className="my-2 text-center">
              <Button variant="success" size="md" className="mx-2">
                Edit
              </Button>
              <Button variant="danger" size="md" className="mx-2">
                Delete
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default ViewStudent;

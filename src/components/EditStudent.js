import React from "react";
import { ListGroup, Container, Row, Col, Button } from "react-bootstrap";

const EditStudent = () => {
  return (
    <Container className="body">
      <ListGroup className="col-lg-6 col-md-8 col-sm-10 mx-auto">
        <ListGroup.Item variant="dark" className="table-header">
          Edit Student
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
            <Col>
              <input type="text" className="input-100 my-1" />
            </Col>
          </Row>
          <Row>
            <Col>
              <label>Father Name</label>
            </Col>
            <Col>
              <input type="text" className="input-100 my-1" />
            </Col>
          </Row>
          <Row>
            <Col>
              <label>Phone</label>
            </Col>
            <Col>
              <input type="text" className="input-100 my-1" />
            </Col>
          </Row>
          <Row>
            <Col>
              <label>Address</label>
            </Col>
            <Col>
              <input type="text" className="input-100 my-1" />
            </Col>
          </Row>
          <Row>
            <Col>
              <label>Age</label>
            </Col>
            <Col>
              <input type="text" className="input-100 my-1" />
            </Col>
          </Row>
          <Row>
            <Col className="my-2 text-center">
              <Button variant="success" size="md">
                Save Changes
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default EditStudent;

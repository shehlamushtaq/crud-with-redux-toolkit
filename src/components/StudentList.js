import React from "react";
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import SingleRowStudent from "./SingleRowStudent";

const StudentList = () => {
  return (
    <Container className="body">
      <ListGroup>
        <ListGroup.Item variant="dark" className="table-header">
          Student List
        </ListGroup.Item>
        <ListGroup.Item variant="info" className="table-sub-header">
          <Row>
            <Col>Student ID</Col>
            <Col>Student Name</Col>
            <Col>Father Name</Col>
            <Col>Phone</Col>
            <Col>Actions</Col>
          </Row>
        </ListGroup.Item>
        <SingleRowStudent />
        <SingleRowStudent />
        <SingleRowStudent />
      </ListGroup>
    </Container>
  );
};

export default StudentList;

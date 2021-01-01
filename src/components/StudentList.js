import React from "react";
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SingleRowStudent from "./SingleRowStudent";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
const StudentList = () => {
  const students1 = useSelector((state) => state.students);
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
        {students1.map((item) => (
          <SingleRowStudent
            id={item.id}
            name={item.name}
            fname={item.fname}
            phone={item.phone}
          />
        ))}
      </ListGroup>
    </Container>
  );
};

export default StudentList;

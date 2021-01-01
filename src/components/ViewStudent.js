import React from "react";
import { ListGroup, Container, Row, Col, Button } from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteStudent } from "../store/StudentSlice";

const ViewStudent = () => {
  const { id } = useParams();
  const history = useHistory();

  const student = useSelector(
    (state) => state.students.filter((item) => item.id === id)[0]
  );

  const dispatch = useDispatch();

  const DelStud = () => {
    dispatch(deleteStudent(id));
    history.push("/");
  };

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
            <Col>{student.id}</Col>
          </Row>
          <Row>
            <Col>
              <label>Student Name</label>
            </Col>
            <Col>{student.name}</Col>
          </Row>
          <Row>
            <Col>
              <label>Father Name</label>
            </Col>
            <Col>{student.fname}</Col>
          </Row>
          <Row>
            <Col>
              <label>Phone</label>
            </Col>
            <Col>{student.phone}</Col>
          </Row>
          <Row>
            <Col>
              <label>Address</label>
            </Col>
            <Col>{student.adres}</Col>
          </Row>
          <Row>
            <Col>
              <label>Age</label>
            </Col>
            <Col>{student.age}</Col>
          </Row>
          <Row>
            <Col className="my-2 text-center">
              <Button
                as={Link}
                to={"/editStudent/" + id}
                variant="success"
                size="md"
                className="mx-2"
              >
                Edit
              </Button>
              <Button
                variant="danger"
                size="md"
                className="mx-2"
                onClick={DelStud}
              >
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

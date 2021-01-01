import React from "react";

import { ListGroup, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteStudent } from "../store/StudentSlice";

const SingleRowStudent = ({ id, name, fname, phone }) => {
  const state = useSelector((state) => state.students);
  const dispatch = useDispatch();

  const DelStudent = () => {
    dispatch(deleteStudent(id));
  };

  return (
    <ListGroup.Item variant="light">
      <Row>
        <Col>{id}</Col>
        <Col>{name}</Col>
        <Col>{fname}</Col>
        <Col>{phone}</Col>
        <Col>
          <Button
            as={Link}
            to={"/editStudent/" + id}
            variant="success"
            size="xs"
            className="mx-1 my-0"
          >
            Edit
          </Button>
          <Button
            variant="danger"
            size="xs"
            className="mx-1 my-0"
            onClick={DelStudent}
          >
            Delete
          </Button>
          <Button
            as={Link}
            to={"/viewStudent/" + id}
            variant="primary"
            size="xs"
            className="mx-1 my-0"
          >
            View
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default SingleRowStudent;

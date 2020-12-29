import React from "react";

import { ListGroup, Row, Col, Button } from "react-bootstrap";

const SingleRowStudent = () => {
  return (
    <ListGroup.Item variant="light">
      <Row>
        <Col>123456</Col>
        <Col>Asim Iqtidar</Col>
        <Col>Iqtidar Ahmed</Col>
        <Col>0333-2326032</Col>
        <Col>
          <Button variant="success" size="xs" className="mx-1 my-0">
            Edit
          </Button>
          <Button variant="danger" size="xs" className="mx-1 my-0">
            Delete
          </Button>
          <Button variant="primary" size="xs" className="mx-1 my-0">
            View
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default SingleRowStudent;

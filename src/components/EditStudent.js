import React, { useState } from "react";
import { ListGroup, Container, Row, Col, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editStudent } from "../store/StudentSlice";

const EditStudent = () => {
  const { id } = useParams();
  const history = useHistory();

  const student = useSelector(
    (state) => state.students.filter((item) => item.id === id)[0]
  );

  const dispatch = useDispatch();

  const [name, setName] = useState(student.name);
  const [fname, setFname] = useState(student.fname);
  const [phone, setPhone] = useState(student.phone);
  const [adres, setAdres] = useState(student.adres);
  const [age, setAge] = useState(student.age);

  const EditStud = () => {
    const obj = {
      id,
      name,
      fname,
      phone,
      adres,
      age,
    };

    dispatch(editStudent(obj));

    history.push("/");
  };

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
            <Col>{student.id}</Col>
          </Row>
          <Row>
            <Col>
              <label>Student Name</label>
            </Col>
            <Col>
              <input
                type="text"
                className="input-100 my-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <label>Father Name</label>
            </Col>
            <Col>
              <input
                type="text"
                className="input-100 my-1"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <label>Phone</label>
            </Col>
            <Col>
              <input
                type="text"
                className="input-100 my-1"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <label>Address</label>
            </Col>
            <Col>
              <input
                type="text"
                className="input-100 my-1"
                value={adres}
                onChange={(e) => setAdres(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <label>Age</label>
            </Col>
            <Col>
              <input
                type="text"
                className="input-100 my-1"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col className="my-2 text-center">
              <Button variant="success" size="md" onClick={EditStud}>
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

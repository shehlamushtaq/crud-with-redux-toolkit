import React, { useState } from "react";
import { ListGroup, Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addStudent } from "../store/StudentSlice";
import {useHistory} from "react-router-dom";

const CreateNewStudent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [fname, setFName] = useState("");
  const [phone, setPhone] = useState(0);
  const [adres, setAdres] = useState("");
  const [age, setAge] = useState(0);

  const addStd = () => {
    const newobj = {
      id: uuidv4(),
      name,
      fname,
      phone,
      adres,
      age,
    };
    dispatch(addStudent(newobj));
    setName("");
    setFName("");
    setPhone("");
    setAdres("");
    setAge("");
    history.push("/");
  };

  return (
    <Container className="body">
      <ListGroup className="col-lg-6 col-md-8 col-sm-10 mx-auto">
        <ListGroup.Item variant="dark" className="table-header">
          Create New Student
        </ListGroup.Item>
        <ListGroup.Item variant="light" className="table-sub-header">
          <Row>
            <Col>
              <label>Student Name</label>
            </Col>
            <Col>
              <input
                type="text"
                className="input-100 my-1"
                onChange={(e) => setName(e.target.value)}
                value={name}
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
                onChange={(e) => setFName(e.target.value)}
                value={fname}
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
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
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
                onChange={(e) => setAdres(e.target.value)}
                value={adres}
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
                onChange={(e) => setAge(e.target.value)}
                value={age}
              />
            </Col>
          </Row>
          <Row>
            <Col className="my-2 text-center">
              <Button variant="success" size="md" onClick={addStd}>
                Save Student Data
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default CreateNewStudent;

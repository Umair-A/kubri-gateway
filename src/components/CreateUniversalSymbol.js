import React from "react";
import { Button, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function CreateUniversalSymbol() {
  return (
    <Container fluid>
      <div className="form-group inline-form">
        <Form>
          <Row>
            <Col>
              <Form.Label>Universal Symbol:</Form.Label>
              <Form.Control placeholder="Universal Symbol" />
            </Col>
            <Col>
              <Form.Label>Category</Form.Label>
              <Form.Control placeholder="Category" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Security</Form.Label>
              <Form.Control placeholder="Security" />
            </Col>
            <Col>
              <Form.Label>ISIN</Form.Label>
              <Form.Control placeholder="ISIN" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Base</Form.Label>
              <Form.Control placeholder="Base" />
            </Col>
            <Col>
              <Form.Label>Sessions</Form.Label>
              <Form.Control placeholder="Sessions" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Quote</Form.Label>
              <Form.Control placeholder="Quote" />
            </Col>
            <Col>
              <Form.Label>Digits</Form.Label>
              <Form.Control placeholder="Digits" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Description</Form.Label>
              <Form.Control placeholder="Description" />
            </Col>
            <Col>
              <Form.Label>Enable</Form.Label>
              <Form.Control placeholder="Enable" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Exposure Multiplyer</Form.Label>
              <Form.Control placeholder="Exposure Multiplyer" />
            </Col>
            <Col>
              <Form.Label>ISIN</Form.Label>
              <Form.Control placeholder="ISIN" />
            </Col>
          </Row>
          <Row style={{ "margin-top": "5px" }}>
            <Col>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Button variant="primary" type="submit">
                Cancel
              </Button>
              <Button variant="secondary" type="submit">
                Reset
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
}

export default CreateUniversalSymbol;

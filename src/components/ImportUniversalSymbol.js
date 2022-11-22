import React from "react";
import { Button, Container, Form } from "react-bootstrap";

function ImportUniversalSymbol() {
  return (
    <>
      <Container>
        <Form>
          <Form.Control type="file" />
          <center>
            <Button
              style={{ "margin-top": "55px" }}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </center>
        </Form>
      </Container>
    </>
  );
}

export default ImportUniversalSymbol;

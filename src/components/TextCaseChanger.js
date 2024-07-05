import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { saveAs } from "file-saver";

const TextCaseChanger = () => {
  const [text, setText] = useState("");

  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  const handleTitleCase = () => {
    const titleCaseText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(titleCaseText);
  };

  const handleCapitalizedCase = () => {
    const capitalizedCaseText = text.replace(/\b\w/g, (char) =>
      char.toUpperCase()
    );
    setText(capitalizedCaseText);
  };

  const handleSentenceCase = () => {
    const sentenceCaseText = text
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s*\w)/g, (char) => char.toUpperCase());
    setText(sentenceCaseText);
  };

  const handleAlternatingCase = () => {
    const alternatingCaseText = text
      .split("")
      .map((char, index) =>
        index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
      )
      .join("");
    setText(alternatingCaseText);
  };

  const handleInverseCase = () => {
    const inverseCaseText = text
      .split("")
      .map((char) =>
        char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
      )
      .join("");
    setText(inverseCaseText);
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = () => {
    setText("");
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  const handleDownload = () => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "text.txt");
  };

  return (
    <Container className="mt-4">
      <h2>Text Case Changer</h2>
      <Form.Group className="mb-3">
        <Form.Label>Enter text</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={text}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Row className="mb-3">
        <Col>
          <Button
            variant="primary"
            onClick={handleUpperCase}
            className="mb-2 w-100"
          >
            UPPERCASE
          </Button>
        </Col>
        <Col>
          <Button
            variant="secondary"
            onClick={handleLowerCase}
            className="mb-2 w-100"
          >
            lowercase
          </Button>
        </Col>
        <Col>
          <Button
            variant="success"
            onClick={handleTitleCase}
            className="mb-2 w-100"
          >
            Title Case
          </Button>
        </Col>
        <Col>
          <Button
            variant="warning"
            onClick={handleCapitalizedCase}
            className="mb-2 w-100"
          >
            Capitalized Case
          </Button>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Button
            variant="info"
            onClick={handleSentenceCase}
            className="mb-2 w-100"
          >
            Sentence case
          </Button>
        </Col>
        <Col>
          <Button
            variant="danger"
            onClick={handleAlternatingCase}
            className="mb-2 w-100"
          >
            aLtErNaTiNg cAsE
          </Button>
        </Col>
        <Col>
          <Button
            variant="dark"
            onClick={handleInverseCase}
            className="mb-2 w-100"
          >
            iNVERSE cASE
          </Button>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Button
            variant="outline-secondary"
            onClick={handleCopyToClipboard}
            className="mb-2 w-100"
          >
            Copy
          </Button>
        </Col>
        <Col>
          <Button
            variant="outline-secondary"
            onClick={handleDownload}
            className="mb-2 w-100"
          >
            Download
          </Button>
        </Col>
        <Col>
          <Button
            variant="outline-secondary"
            onClick={handleClear}
            className="mb-2 w-100"
          >
            Clear
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TextCaseChanger;

import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useState } from "react";
import { isEmpty } from "lodash";
import api from "../api/api";
import Close from "../assets/images/close.svg";

const Question = ({ onClickNewQuestion }) => {
  const [question, setQuestion] = useState("");
  const [publication, setPublication] = useState("");
  const [questionErr, setQuestionErr] = useState("");
  const [publicationErr, setPublicationErr] = useState("");

  const onChangeQuestion = (value) => {
    setQuestion(value);
    if (questionErr) {
      setQuestionErr("");
    }
  };

  const onChangePublication = (value) => {
    setPublication(value);
    if (publicationErr) {
      setPublicationErr("");
    }
  };

  const onClickSubmit = () => {
    if (!isEmpty(question) && !isEmpty(publication)) {
      const data = { question: question, description: publication, userId: 1 };
      api.createQuestion(data).then((response) => {
        if (response.status === 200) {
          onClickNewQuestion();
        }
      });
    } else {
      if (isEmpty(question)) {
        setQuestionErr("Required!");
      }
      if (isEmpty(publication)) {
        setPublicationErr("Required!");
      }
    }
  };

  return (
    <div className="pt-5">
      <div className="d-flex justify-content-between align-items-center">
        <div className="align-bottom title">Haz una pregunta</div>
        <Button
          className="d-none d-md-block close-btn"
          onClick={onClickNewQuestion}
        >
          CANCELAR
        </Button>
        <img
          className="d-xs-block d-md-none"
          src={Close}
          alt="close"
          onClick={onClickNewQuestion}
        />
      </div>
      <Form className="pt-5">
        <FormGroup>
          <Label for="question">Título de publicación</Label>
          <Input
            onChange={(e) => onChangeQuestion(e.target.value)}
            type="text"
            name="question"
            id="question"
            placeholder="Escribe tu título aquí"
          />
          <span className="text-danger">{questionErr}</span>
        </FormGroup>
        <FormGroup>
          <Label for="publication">Publicación</Label>
          <Input
            onChange={(e) => onChangePublication(e.target.value)}
            type="textarea"
            name="publication"
            id="publication"
            placeholder="Escribe tu publicación aquí"
          />
          <span className="text-danger">{publicationErr}</span>
        </FormGroup>
        <FormGroup>
          <Button
            onClick={onClickSubmit}
            className="create-question-btn submit-btn"
          >
            PUBLICAR
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default Question;

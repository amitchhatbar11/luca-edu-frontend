const { Button } = require("reactstrap");

const Main = ({ onClickNewQuestion }) => {
  return (
    <div className="pt-5">
      <div className="d-flex justify-content-between align-items-center">
        <div className="align-bottom title">Comunidad Luca</div>
        <Button
          className="create-question-btn d-none d-md-block"
          onClick={onClickNewQuestion}
        >
          NUEVA PREGUNTA
        </Button>
      </div>
      <div className="pt-4">
        <span className="question-spans current-question-type">POPULARES</span>
        <span className="question-spans">NUEVOS</span>
        <span className="question-spans">SEGUIDOS</span>
      </div>
    </div>
  );
};

export default Main;

import "./index.scss";
import Home from "./assets/images/home.svg";
import Video from "./assets/images/video.svg";
import Quiz from "./assets/images/quizz.svg";
import StudyPlan from "./assets/images/study-plan.svg";
import Community from "./assets/images/community.svg";
import Help from "./assets/images/help.svg";
import LucaLogo from "./assets/images/logo.svg";
import Header from "./components/Header";
import Main from "./components/Main";
import QuestionSection from "./components/QuestionSection";
import Bell from "./assets/images/bell.svg";
import UserIcon from "./assets/images/user-icon-blue.svg";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import Question from "./components/Question";
import FloatingBtn from "./assets/images/floating-btn.svg";
import { Fab, makeStyles } from "@material-ui/core";
import BottomNavigation from "./components/BottomNavigation";

const App = () => {
  const [questionFormFlag, setQuestionFormFlag] = useState(false);

  const onClickNewQuestion = () => {
    setQuestionFormFlag(!questionFormFlag);
  };

  const useStyles = makeStyles((theme) => ({
    fab: {
      position: "fixed",
      bottom: theme.spacing(7),
      right: theme.spacing(2),
    },
  }));

  const classes = useStyles();
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <div className="d-flex  justify-content-between">
              <div className="py-3">
                <img src={LucaLogo} />
              </div>
              <div className="d-flex d-xs-block d-md-none">
                <img className="px-3" src={Bell} />
                <img className="pl-3" src={UserIcon} />
              </div>
            </div>
            <nav className="navbar navbar-light bg-white pt-5 d-none d-md-block">
              <ul className="navbar-nav">
                <li className="nav-item d-flex py-2">
                  <img src={Home} />
                  <div className="nav-link cursor-pointer ml-3">Inicio</div>
                </li>
                <li className="nav-item d-flex py-2">
                  <img src={Video} />
                  <div className="nav-link cursor-pointer ml-3">Mis cursos</div>
                </li>
                <li className="nav-item d-flex py-2">
                  <img src={Quiz} />
                  <div className="nav-link cursor-pointer ml-3">Quizzes</div>
                </li>
                <li className="nav-item d-flex py-2">
                  <img src={StudyPlan} />
                  <div className="nav-link cursor-pointer ml-3">
                    Mi plan de estudios
                  </div>
                </li>
                <li className="nav-item d-flex community-nav py-2">
                  <img src={Community} />
                  <div className="nav-link cursor-pointer ml-3 active">
                    Comunidad
                  </div>
                </li>
                <li className="nav-item d-flex py-2">
                  <img src={Help} />
                  <div className="nav-link cursor-pointer ml-3" href="#">
                    Centro de ayuda
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-sm-9 main">
            <div className="d-none d-md-block">
              <Header />
            </div>
            <div className="question-section">
              {!questionFormFlag ? (
                <div>
                  <Main onClickNewQuestion={onClickNewQuestion} />
                  <QuestionSection />
                </div>
              ) : (
                <div>
                  <Question onClickNewQuestion={onClickNewQuestion} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {!questionFormFlag && (
        <div className="d-xs-block d-md-none">
          <Fab className={classes.fab} onClick={onClickNewQuestion}>
            <img src={FloatingBtn} />
          </Fab>
        </div>
      )}
      <div className="d-xs-block d-md-none">
        <BottomNavigation />
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;

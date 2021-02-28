import CommentIcon from "../assets/images/comment.svg";
import BlueUserIcon from "../assets/images/user-icon-blue.svg";
import Like from "../assets/images/like.svg";
import Dislike from "../assets/images/dislike.svg";
import Share from "../assets/images/share.svg";
import Star from "../assets/images/bookmark.svg";
import { useEffect, useState } from "react";
import api from "../api/api";

const QuestionSection = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    api.getQuestions().then((response) => {
      setQuestions(response && response.data);
    });
  }, []);

  return (
    <div className="pt-2">
      {questions.map((item) => {
        return (
          <div key={item.id}>
            <div className="d-flex">
              <div className="col-md-2">
                <img
                  className="pl-0 img-fluid pt-3 user-icon"
                  src={BlueUserIcon}
                />
              </div>
              <div className="col-md-9 pt-3 pl-0 question-and-descr">
                <div>{item.question}</div>
                <div className="question-descr">{item.description}</div>
              </div>
              <div className="pt-3 d-none d-md-block">
                <img src={CommentIcon} /> 0
              </div>
            </div>
            <div className="pt-3 d-flex">
              <div className="col-md-2 d-none d-md-block"></div>
              <div className="col-md-2 like-dislike-div">
                <img className="pr-2" src={Like} />
                <img className="pl-2" src={Dislike} />
              </div>
              <div className="col-md-6 user-name">
                <span>{`${item.user.firstName} ${item.user.lastName}`}</span>
              </div>
              <div className="col-md-2 row justify-content-end share-bookmark align-items-center">
                <img className="pr-2 d-none d-md-block" src={Share} />
                <img className="d-xs-block d-md-none" src={CommentIcon} />
                <span className="d-xs-block d-md-none pr-2">&nbsp; 0</span>
                <img className="pl-2" src={Star} />
              </div>
            </div>
            <hr class="question-section-divider"></hr>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionSection;

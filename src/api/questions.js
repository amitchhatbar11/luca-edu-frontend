import * as network from "./network";

const getQuestions = () => {
  return network.get(`question`);
};

const createQuestion = (body = {}) => {
  return network.post(`question`, body);
};

export default {
  getQuestions,
  createQuestion,
};

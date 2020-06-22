import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { CurrentQuestionContext } from "../../context/CurrentQuestionContext";

export default () => {
  const [question, setQuestion] = useContext(CurrentQuestionContext);

  const handleTitleChange = (e: any) => {
    setQuestion({ ...question, question: e.target.value });
  };

  const handleAnswerChange = (e: any) => {
    setQuestion({ ...question, answer: e.target.value });
  };

  return (
    <div className="QuestionFormContainer">
      <div>
        <TextField
          variant="outlined"
          value={question.question}
          label="Title"
          fullWidth
          onChange={handleTitleChange}
        />
        <br />
        <br />
        <TextField
          variant="outlined"
          value={question.answer}
          label="Answer"
          fullWidth
          onChange={handleAnswerChange}
        />
      </div>
    </div>
  );
};

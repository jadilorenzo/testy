import React, { useContext } from "react";
import {
  TextField,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { CurrentQuestionContext } from "../../context/CurrentQuestionContext";
import { Question } from "../../types";

export default () => {
  const [question, setQuestion] = useContext(CurrentQuestionContext);

  const handleTitleChange = (e: any) => {
    e.persist();
    setQuestion((q: Question) => ({
      ...q,
      question: e.target.value
    }));
  };

  const handleOptionChange = (e: any, num: number) => {
    let options = question.options;
    options[num] = e.target.value;
    e.persist();
    setQuestion((q: Question) => ({ ...q, options }));
  };

  const handleAnswerChange = (e: any) => {
    e.persist();
    setQuestion((q: Question) => ({
      ...q,
      answer: e.target.value.filter((x: string) => x !== "").join(", ")
    }));
  };

  return (
    <div className="QuestionFormContainer">
      <div>
        <TextField
          variant="outlined"
          value={question.question}
          label="Question"
          fullWidth
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <Checkbox disabled />
        <TextField
          className="OptionTextField"
          value={question.options[0]}
          onChange={(e: any) => handleOptionChange(e, 0)}
        />
      </div>
      <div>
        <Checkbox disabled />
        <TextField
          className="OptionTextField"
          value={question.options[1]}
          onChange={(e: any) => handleOptionChange(e, 1)}
        />
      </div>
      <div>
        <Checkbox disabled />
        <TextField
          className="OptionTextField"
          value={question.options[2]}
          onChange={(e: any) => handleOptionChange(e, 2)}
        />
      </div>
      <div>
        <Checkbox disabled />
        <TextField
          className="OptionTextField"
          value={question.options[3]}
          onChange={(e: any) => handleOptionChange(e, 3)}
        />
      </div>
      <FormControl variant="standard" fullWidth>
        <div className="FormGroup">
          <InputLabel id="select">Answer</InputLabel>
          <Select
            onChange={handleAnswerChange}
            className="Select"
            labelId="select"
            multiple
            value={question.answer.split(", ")}
          >
            {question.options.map((option: string) => (
              <MenuItem value={option}>{option}</MenuItem>
            ))}
            {question.options.length === 0 && (
              <MenuItem disabled>No Options</MenuItem>
            )}
          </Select>
        </div>
      </FormControl>
    </div>
  );
};

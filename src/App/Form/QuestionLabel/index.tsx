import * as React from "react";
import "./index.scss";

import { InputLabel } from "@material-ui/core";

interface Props {
  questionNumber: number;
}

function QuestionLabel({ questionNumber }: Props) {
  const questions = ["Enter your email", "Enter"];

  return (
    <InputLabel shrink className="question-label">
      <span className="question-num-indicator">
        {questionNumber}/3 {">"}
      </span>
      {questions[questionNumber - 1]}
    </InputLabel>
  );
}

export default QuestionLabel;

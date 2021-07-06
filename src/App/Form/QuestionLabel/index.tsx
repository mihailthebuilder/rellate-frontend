import * as React from "react";
import { ReactElement } from "react";

import { InputLabel, FormHelperText } from "@material-ui/core";

type Props = {
  questionNumber: number;
};

function QuestionLabel({ questionNumber }: Props): ReactElement {
  const questions = [
    "Enter your email",
    "Add the names of the LinkedIn influencers you wish to follow",
    "Select the frequency of the newsletter",
  ];

  return (
    <InputLabel shrink className="question-label">
      <span className="question-num-indicator">
        {questionNumber}/3 {">"}
      </span>
      {questions[questionNumber - 1]}
      {questionNumber === 2 && (
        <FormHelperText>
          You can leave the input field empty if you accidentally added too
          many.
        </FormHelperText>
      )}
    </InputLabel>
  );
}
export default QuestionLabel;

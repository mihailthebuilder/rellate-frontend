import * as React from "react";
import { ReactElement } from "react";

import { FormHelperText } from "@material-ui/core";

import { Layout, QNIndicator } from "./style";

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
    <Layout shrink>
      <QNIndicator>
        {questionNumber}/3 {">"}
      </QNIndicator>
      {questions[questionNumber - 1]}
      {questionNumber === 2 && (
        <FormHelperText>
          You can leave the input field empty if you accidentally added too
          many.
        </FormHelperText>
      )}
    </Layout>
  );
}
export default QuestionLabel;

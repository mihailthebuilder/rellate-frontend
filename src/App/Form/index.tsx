import * as React from "react";
import { FC, useState } from "react";
import { FormControl, Input, Button, FormHelperText } from "@material-ui/core";

import QuestionLabel from "./QuestionLabel";

import "./index.scss";
import { preventEnterSubmission, isValidEmail } from "../../resources/helpers";

const Form: FC = () => {
  const [email, setEmail] = useState("");
  const [questionWithError, setQuestionWithError] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);

  return (
    <section id="form" className="form">
      <h2>Set up your newsletter in less than a minute</h2>
      <form>
        <FormControl className="form-control">
          <QuestionLabel questionNumber={questionNumber} />
          <Input
            onChange={(event) => setEmail(event.target.value)}
            required
            placeholder="name@example.com"
            onKeyDown={(event) => preventEnterSubmission(event)}
          />
          {questionWithError === 1 && (
            <FormHelperText className="error-message" error>
              Please enter a valid email address.
            </FormHelperText>
          )}
        </FormControl>
        {questionNumber > 1 && (
          <Button
            type="button"
            onClick={() => setQuestionNumber((prev) => prev - 1)}
          >
            Back
          </Button>
        )}
        {email !== "" && questionNumber < 3 && (
          <Button
            type="button"
            onClick={() => {
              if (questionNumber === 1 && !isValidEmail(email)) {
                setQuestionWithError(1);
              } else {
                setQuestionNumber((prev) => prev + 1);
                setQuestionWithError(0);
              }
            }}
          >
            Next
          </Button>
        )}
      </form>
    </section>
  );
};

export default Form;

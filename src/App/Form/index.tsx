import * as React from "react";
import { FC, useState } from "react";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";

import "./index.scss";
import preventEnterSubmission from "../../resources/helpers";

const Form: FC = () => {
  const [email, setEmail] = useState("");
  const [questionNumber, setQuestionNumber] = useState(1);

  return (
    <section id="form" className="form">
      <h2>Set up your newsletter in less than a minute</h2>
      <form>
        <FormControl className="form-control">
          <InputLabel shrink className="input-label">
            1/3 - Enter your email
          </InputLabel>
          <Input
            onChange={(event) => setEmail(event.target.value)}
            required
            placeholder="name@example.com"
            onKeyDown={(event) => preventEnterSubmission(event)}
          />
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
            onClick={() => setQuestionNumber((prev) => prev + 1)}
          >
            Next
          </Button>
        )}
      </form>
    </section>
  );
};

export default Form;

import * as React from "react";
import { ReactElement, useState } from "react";
import {
  FormControl,
  Input,
  Button,
  FormHelperText,
  InputLabel,
} from "@material-ui/core";

import "./index.scss";
import { preventEnterSubmission, isValidEmail } from "../../resources/helpers";

function Form(): ReactElement {
  const [email, setEmail] = useState("");
  const [influencers, setInfluencers] = useState(["Rocky Balboa"]);

  const changeInfluencerName: (influencerNum: number, newName: string) => void =
    (influencerNum, newName) =>
      setInfluencers((prev) => {
        const newInfluencers = prev.slice();
        newInfluencers[influencerNum] = newName;
        return newInfluencers;
      });

  const [questionWithError, setQuestionWithError] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const questions = [
    "Enter your email",
    "Add the names of the LinkedIn influencers you wish to follow",
    "Select the frequency of the newsletter",
  ];

  return (
    <section id="form" className="form">
      <h2>Set up your newsletter in less than a minute</h2>
      <form>
        <FormControl className="form-control">
          <InputLabel shrink className="question-label">
            <span className="question-num-indicator">
              {questionNumber}/3 {">"}
            </span>
            {questions[questionNumber - 1]}
          </InputLabel>
          {questionNumber === 1 ? (
            <Input
              onChange={(event) => setEmail(event.target.value)}
              required
              placeholder="name@example.com"
              onKeyDown={(event) => preventEnterSubmission(event)}
            />
          ) : (
            questionNumber === 2 && (
              <div>
                {influencers.map((influencer) => (
                  <Input
                    placeholder={influencer}
                    onChange={(event) =>
                      changeInfluencerName(
                        influencers.length - 1,
                        event.target.value
                      )
                    }
                  />
                ))}
              </div>
            )
          )}

          {questionWithError === 1 && (
            <FormHelperText className="error-message" error>
              Please enter a valid email address.
            </FormHelperText>
          )}
        </FormControl>
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
        {questionNumber > 1 && (
          <Button
            type="button"
            onClick={() => setQuestionNumber((prev) => prev - 1)}
          >
            Back
          </Button>
        )}
      </form>
    </section>
  );
}

export default Form;

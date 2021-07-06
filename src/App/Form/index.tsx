import * as React from "react";
import { ReactElement, useState } from "react";
import { Button } from "@material-ui/core";

import "./index.scss";

import QuestionLabel from "./QuestionLabel";
import { IStyled, EMessage, QContainer } from "./style";
import { preventEnterSubmission, isValidEmail } from "../../resources/helpers";

function Form(): ReactElement {
  const [email, setEmail] = useState("");
  const [influencers, setInfluencers] = useState([""]);

  const changeInfluencerName: (influencerNum: number, newName: string) => void =
    (influencerNum, newName) =>
      setInfluencers((prev) => {
        const newInfluencers = prev.slice();
        newInfluencers[influencerNum] = newName;
        return newInfluencers;
      });

  const [questionWithError, setQuestionWithError] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);

  return (
    <section id="form" className="form">
      <h2>Set up your newsletter in less than a minute</h2>
      <form>
        <QContainer>
          <QuestionLabel questionNumber={questionNumber} />
          {questionNumber === 1 ? (
            <IStyled
              onChange={(event) => setEmail(event.target.value)}
              required
              placeholder="name@example.com"
              onKeyDown={(event) => preventEnterSubmission(event)}
            />
          ) : (
            questionNumber === 2 && (
              <div className="influencer-answer-container">
                {influencers.map((influencer) => (
                  <IStyled
                    placeholder="Rocky Balboa"
                    value={influencer}
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
            <EMessage error>Please enter a valid email address.</EMessage>
          )}
        </QContainer>
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

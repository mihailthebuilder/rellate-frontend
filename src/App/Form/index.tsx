import * as React from "react";
import { FC, useState } from "react";
import { FormControl, InputLabel, Input } from "@material-ui/core";

import "./index.scss";

const Form: FC = () => {
  const [email, setEmail] = useState("");

  return (
    <section id="form" className="form">
      <h2>Set up your newsletter in less than a minute</h2>
      <span>{email}</span>
      <form>
        <FormControl className="form-control">
          <InputLabel shrink className="input-label">
            1/3 - Enter your email
          </InputLabel>
          <Input
            onChange={(event) => setEmail(event.target.value)}
            required
            placeholder="name@example.com"
          />
        </FormControl>
      </form>
    </section>
  );
};

export default Form;

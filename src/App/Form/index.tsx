import * as React from "react";
import { FormControl, InputLabel, Input } from "@material-ui/core";

import "./index.scss";

const Form: React.FC = () => (
  <section id="form" className="form">
    <h2>Set up your newsletter in less than a minute</h2>
    <form>
      <FormControl className="form-control">
        <InputLabel shrink className="input-label">
          1/3 - Enter your email
        </InputLabel>
        <Input required placeholder="name@example.com" />
      </FormControl>
    </form>
  </section>
);

export default Form;

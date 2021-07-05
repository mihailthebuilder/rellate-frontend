import * as React from "react";
import { TextField, InputLabel } from "@material-ui/core";

import "./index.scss";

const Form: React.FC = () => (
  <section id="form" className="form">
    <h2>Set up your newsletter in less than a minute</h2>
    <form>
      <InputLabel htmlFor="emailInput">1/3 - Enter your email</InputLabel>
      <TextField id="emailInput" required placeholder="name@example.com" />
    </form>
  </section>
);

export default Form;

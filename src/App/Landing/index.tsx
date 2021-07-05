import * as React from "react";
import { ReactElement } from "react";

import { Button } from "@material-ui/core";

import demoImage from "./product_demo.jpg";
import "./index.scss";

function Landing(): ReactElement {
  return (
    <section className="landing">
      <h1>
        Tired of doomscrolling just to read posts from your favourite LinkedIn
        personalities?{" "}
        <span className="italic">
          Enter <span className="underline">rellate</span>.
        </span>
      </h1>

      <Button className="get-started-button" variant="outlined" href="#form">
        Get started
      </Button>

      <div className="pitch-secondary">
        <p>
          You managed to find people that post amazing content on LinkedIn. But
          now you have to spend a ton of time scrolling through your feed in
          order to get to their posts! Why? Because they’re drowned in the sea
          of likes from the hundreds (if not thousands) of others in your
          network.
        </p>
        <p>
          That’s where we come in. <span className="italic">rellate</span> sends
          you all the posts from your chosen LinkedIn influencers as a
          newsletter.
        </p>
      </div>
      <img src={demoImage} alt="product demo" />
    </section>
  );
}

export default Landing;

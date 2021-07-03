import * as React from "react";
import demoImage from "./product_demo.jpg";
import "./index.scss";

const Landing: React.FC = () => (
  <section className="landing">
    <div>
      <h1>
        Tired of doomscrolling just to read posts from your favourite LinkedIn
        personalities? Enter <span className="italic">rellate</span>.
      </h1>
      <a href="#form">Get started</a>
    </div>

    <div className="pitch">
      <p>
        You managed to find people that post amazing content on LinkedIn. But
        now you have to spend a ton of time scrolling through your feed in order
        to get to their posts! Why? Because they’re drowned in the sea of likes
        from the hundreds (if not thousands) of others in your network.
      </p>
      <p>
        That’s where we come in. <span className="italic">rellate</span> sends
        you all the posts from your chosen LinkedIn influencers as a newsletter.
      </p>
    </div>
    <img src={demoImage} alt="product demo" />
  </section>
);

export default Landing;

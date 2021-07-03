import * as React from "react";

const Landing: React.FC = () => (
  <section className="landing">
    <h1>
      Tired of doomscrolling just to read posts from your favourite LinkedIn
      personalities? Enter <span className="italic">rellate</span>.
    </h1>
    <a href="#form">Get started</a>
    <div>
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
  </section>
);

export default Landing;

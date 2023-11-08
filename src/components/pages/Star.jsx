import Star1 from "../images/Star.png";

function Star() {
  return (
    <div className="star-parent">
      <div className="star-main">
        <h1>Star</h1>
        <p>
          Star Membership Package: Price: 30€/month
          <br />
          <br />
          If you are a true basketball aficionado, the Star Membership Package
          is the ultimate choice. You will receive everything from the Rookie
          and Starter packages, and a whole lot more:
          <br />
          <br />
          <li>
            Advanced Stats: Unlock advanced statistical insights for in-depth
            analysis.
          </li>
          <li>
            Full Games + Live Feeds: Experience full game broadcasts and live
            feeds.
          </li>
          <li>
            Special Member Deals & Discounts: Exclusive deals and promotions, save on tickets to live basketball events and
            games.
          </li>
          <br />
          Join the elite ranks of basketball enthusiasts with our Star
          Membership.
        </p>
      </div>
      <img className="star-img" src={Star1} alt="Star Membership Trophy" />
    </div>
  );
}

export default Star;

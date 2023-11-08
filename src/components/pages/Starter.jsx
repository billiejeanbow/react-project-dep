import Starter1 from "../images/Starter.png"

function Starter() {
  return (
    <div className="starter-parent">
    <div className="starter-main">
      <h1>Starter</h1>
      <p>
        Starter Membership Package: Price: 20€/month 
        <br />
        <br />
        The Starter Membership
        Package is perfect for basketball enthusiasts who are ready to take
        their passion to the next level.  You will enjoy
        all the benefits from the Rookie package and more:
        <br />
        <br />
        <li>
          Advanced Stats: Dive deeper into player and team statistics for
          in-depth analysis.
        </li>
        <li>Game Recaps: Stay updated with game recaps and highlights.</li>
        <li>
          Live Photos: Enjoy live photos from your favorite games, capturing the
          best moments.
        </li>
        <br />
        Elevate your basketball experience with our Starter Membership.
      </p>
    </div>
    <img className="starter-img" src={Starter1} alt="Starter Member Trophy" />
    </div>
  );
}

export default Starter;

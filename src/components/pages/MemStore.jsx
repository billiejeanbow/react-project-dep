import { useContext } from "react";
import { Link } from "react-router-dom";
import { tiers } from "../MemTiers";
import { MemStoreContext } from "../MemStoreContext";

function Shop() {
  const { state, selectMembership } = useContext(MemStoreContext);
  console.log(state);

  const handleSelectMembership = (tier) => {
    selectMembership(tier);
    history.push(`/${tier}`);
  };

  return (
    <div className="mem-main">
      <h1>Choose Your Membership Tier</h1>
      {tiers.map((tier) => (
        <div className="mem-info" key={tier.id}>
          <h3>{tier.name}</h3>
          <p>Price: {tier.price}€</p>
          <ul>
            {tier.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
          <button onClick={() => handleSelectMembership(tier.id)}>
            <Link className="select-bttn" to={`/${tier.name}`}>
              Select
            </Link>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Shop;

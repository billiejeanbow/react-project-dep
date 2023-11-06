import { useContext } from "react";
import { MemStoreContext } from "./MemStoreContext";


function Shop() {
  const { state, selectMembership } = useContext(MemStoreContext);

  const handleSelectMembership = (tier) => {
    selectMembership(tier);
  };

  return (
    <div>
      <h2>Choose Your Membership Tier</h2>
      {state.tiers.map((tier) => (
        <div key={tier.id}>
          <h3>{tier.name}</h3>
          <p>Price: ${tier.price}</p>
          <ul>
            {tier.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
          <button onClick={() => handleSelectMembership(tier.id)}>Select</button>
        </div>
      ))}
    </div>
  );
}

export default Shop;

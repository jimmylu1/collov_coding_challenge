import React from "react";
import TrackingCard from "./Card";
import AddCardButton from "./AddCardButton";

const List = ({ title, cards }) => {
  return (
    <div style={styles.container}>
      <h3>{title}</h3>
      {cards.map((card) => (
        <TrackingCard key={card.id} text={card.name} />
      ))}
      {title === "Applied" ? <AddCardButton /> : null}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    width: 300,
    padding: 8,
    marginRight: 8,
  },
};

export default List;

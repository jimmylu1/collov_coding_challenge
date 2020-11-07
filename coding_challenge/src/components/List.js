import React from "react";
import TrackingCard from "./Card";

const List = ({ title }) => {
  return (
    <div style={styles.container}>
      <h3>{title}</h3>
      <TrackingCard />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "grey",
    borderRadius: 3,
    width: 300,
    padding: 8,
  },
};

export default List;

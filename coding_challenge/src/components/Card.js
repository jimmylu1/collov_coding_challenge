import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const TrackingCard = ({ text }) => {
  return (
    <Card style={styles.cardContainer}>
      <CardContent>
        <Typography gutterBottom>{text}</Typography>
      </CardContent>
    </Card>
  );
};

const styles = {
  cardContainer: {
    marginBotttom: 8,
    padding: 8,
    marginTop: 8,
  },
};

export default TrackingCard;

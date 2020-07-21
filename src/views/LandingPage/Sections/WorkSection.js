import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import Card from "../../../components/Card/Card.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Rachael Gladwin</h2>
          <h4 className={classes.description}>
            Send me an email if you want more information.
          </h4>
        </GridItem>
      </GridContainer>
      <Card plain>
        <CardFooter className={classes.justifyCenter}>
          <Button
            color="info"
            size="md"
            href="mailto:rachael.gladwin@me.com"
            rel="noopener noreferrer"
          >
            Message Me!
              </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

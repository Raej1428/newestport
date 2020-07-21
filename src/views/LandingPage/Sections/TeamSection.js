import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "../../../assets/images/favoriteheadshotsmall.png";
import team2 from "../../../assets/images/burgs.png";
import team3 from "../../../assets/images/RGyall.png";
import team4 from "../../../assets/images/DUFIT.png";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is some of my work</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <Card plain>
              <GridItem xs={12} sm={12} md={12} lg={12} className={classes.itemGrid}>
                <img src={team4} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                DU Fitness
                <br />
                <small className={classes.smallTitle}>Project created for personal fitness as a final project. Designed with React, Redux, Firestore, and Others.</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  This project was a group effort. Material UI is intense but fun to configure. This was launched on Heroku but the size limits were too expensive to maintain.
                  Feel free to check out the repo, clone it, cd fitness-material-kit and npm install the dependencies to see the magic. Check to make sure all dependencies match the package.json file versions.
                   <a href="https://github.com/raej1428/project3">Github Repo.</a>
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <Card plain>
              <GridItem xs={12} sm={12} md={12} lg={12} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Virtual Burger Vending Machine
                <br />
                <small className={classes.smallTitle}>Created when the pandemic hit as the safest way to eat at a burger joint... VIRTUALLY!</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Technologies used: MySQL, HEROKU CLI, HTML, CSS, BOOTSTRAP, API, NPM Express, Node.js. <a href="https://onlineburgermenu.herokuapp.com/">Safely Consume Burger</a>
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <Card plain>
              <GridItem xs={12} sm={12} md={12} lg={12} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Full Portfolio
                <br />
                <small className={classes.smallTitle}>Link to my full portfolio of work to see progression.</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                 Full body of work for you to enjoy. I spent many months building this and growing. 
                 Debugging makes you better, more patient person. Never give up. <a href="https://raej1428.github.io/NewPort/">I Love the Style OKAY!</a>
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {/* <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <Card plain>
              <GridItem xs={12} sm={12} md={12} lg={12} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h2 className={classes.cardTitle}>
                Rachael Gladwin
                <br />
                <small className={classes.smallTitle}>Developer</small>
              </h2>
              <CardBody>
                <p className={classes.description}>
                  If you see anything of interest please send me an <a href="mailto:rachael.gladwin@me.com">email</a> , or contact me on LinkedIn below.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.linkedin.com/in/rachaelgladwin-13"
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

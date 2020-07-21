import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";

import styles from "../../assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Rachael Gladwin"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Developer. Leader. Discoverer.</h1>
              <h4>
                I am a full-stack developer with a certification from the University of Denver. Skills in HTML, CSS, and JavaScript, focusing on my strengths in developing ideas/ processes, creativity, troubleshooting, and collaboration. Successfully implemented new technology for a small organization, which increased organizational growth opportunities and higher employee retention. 
                Passionate about approaching programming challenges from different angles and collaborating with others to create meaningful applications.
                Positioned to provide unique perspectives on how end-users interact with websites and software platforms by leveraging a background in digital learning, human services, and business operations.
              </h4>
              <br />
              <Button
                color="info"
                size="md"
                href="https://www.linkedin.com/in/rachaelgladwin-13"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import ChangeHistory from "@material-ui/icons/ChangeHistory";
import NaturePeople from "@material-ui/icons/NaturePeople";
import ArtTrackOutlinedIcon from '@material-ui/icons/ArtTrackOutlined';
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk technologies.</h2>
          <h4 className={classes.title}>Tools and Programming Technologies:</h4>
          <h5 className={classes.description}>
             HTML | CSS | XML | JAVASCRIPT | jQuery | GIT | C / C++ | PYTHON | ADOBE CREATIVE CLOUD |ACCESS | SQL | Firebase | Django | FLASK | REST / API | JIRA | SharePoint | Microsoft Office | Workday | SAP Litmos | Articulate 360 | Captivate | Terminal | MAC OS | Swift | Docker | GitHub | JIRA | AWS / EC2 / EC3 | Ansible | Puppet | BASH | SQL | Confluence | Node JS |
          </h5>
          <h4 className={classes.title}>Areas of Interest: </h4>
          <h5 className={classes.description}>K8s | Julia | Ruby | Groovy | Ballerina | Gradle | Jenkins | Artifactory | Kanban | Jacoco | Splunk | SSH | Cucumber | Blackduck | Junit | React | Immutability | ELK | Rancher | Engagement | BitBucket | JFrog | RedHat | DockerFile | Docker Containers | Consul | Packer 4 | Hashicorp Vault | Twistlock | Anchore | Cucumber/ Gherkin | Eclipse |</h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Discoverer"
              description="My strength is in making ideas come to life and thinking through roadblocks. I am beyond creative which aplifies my ability to evolve a innovative solution."
              icon={ChangeHistory}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Developer"
              description="Well versed in JavaScript and prefer React. Familiar with many languages and comfortable moving up and down the stack."
              icon={ArtTrackOutlinedIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Leader"
              description="Leadership is a broad category where someone has to spend time learning and growing. I look forward to constantly growing as a person and as an indirect leader."
              icon={NaturePeople}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

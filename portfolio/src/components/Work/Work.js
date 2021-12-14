import { useState } from "react";

import { workProjectData, workAccomplishmentData } from "./workData.js";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import NorthEastIcon from "@mui/icons-material/NorthEast";

import * as Scroll from "react-scroll";

const useStyles = makeStyles((theme) =>
  createStyles({
    workContainer: {
      padding: "0 0 25% 0",
    },
    workTitle: {
      fontWeight: 700,
      marginBottom: "5px",
    },
    workProject: {
      marginBottom: "8%",
    },
    workHeader: {
      background: `${theme.palette.divider}`,
    },
    workDetail: {
      textAlign: "center",
      background: `${theme.palette.divider}`,
    },
    workImage: {
      width: "50%",
      marginBottom: "2%",
      [theme.breakpoints.down("tablet")]: {
        width: "75%",
      },
      [theme.breakpoints.down("mobile")]: {
        width: "90%",
      },
    },
    workDesc: {
      marginBottom: "1%",
    },
  })
);

const Work = (props) => {
  const classes = useStyles(props.theme);
  const [expanded, setExpanded] = useState(false);
  const Element = Scroll.Element;

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className={classes.workContainer}>
      <Element name="work" />
      <Typography variant="h4" component="h2" className={classes.workTitle}>
        Work
      </Typography>

      <Box className={classes.workProject}>
        <Typography>Projects</Typography>
        {workProjectData.map(
          ({ title, image, description, codeLink, siteLink }) => (
            <Accordion
              key={title}
              expanded={expanded === `panel${title}`}
              onChange={handleChange(`panel${title}`)}
            >
              <AccordionSummary
                expandIcon={<CloseIcon color="secondary" fontSize="large" />}
                className={classes.workHeader}
                aria-label={`${title} panel`}
              >
                <Typography>{title}</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.workDetail}>
                <img
                  src={image}
                  alt="image of work"
                  className={classes.workImage}
                />
                <Typography className={classes.workDesc}>
                  {description}
                </Typography>
                <Button
                  endIcon={<NorthEastIcon />}
                  href={codeLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </Button>
                <Button
                  endIcon={<NorthEastIcon />}
                  href={siteLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Site
                </Button>
              </AccordionDetails>
            </Accordion>
          )
        )}
      </Box>

      <Box>
        <Typography>Accomplishments</Typography>
        {workAccomplishmentData.map(
          ({ title, image, description, codeLink, siteLink }) => (
            <Accordion
              key={title}
              expanded={expanded === `panel${title}`}
              onChange={handleChange(`panel${title}`)}
            >
              <AccordionSummary
                expandIcon={<CloseIcon color="secondary" fontSize="large" />}
                className={classes.workHeader}
                aria-label={`${title} panel`}
              >
                <Typography>{title}</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.workDetail}>
                {image && (
                  <img
                    src={image}
                    alt="image of work"
                    className={classes.workImage}
                  />
                )}
                <Typography className={classes.workDesc}>
                  {description}
                </Typography>
                {codeLink && (
                  <Button
                    endIcon={<NorthEastIcon />}
                    href={codeLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </Button>
                )}
                {siteLink && (
                  <Button
                    endIcon={<NorthEastIcon />}
                    href={siteLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Site
                  </Button>
                )}
              </AccordionDetails>
            </Accordion>
          )
        )}
      </Box>
    </section>
  );
};

export default Work;

import { useState } from "react";

import { aboutTabsData, aboutContentData } from "./aboutData";

import { createStyles, Tab, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { TabPanel, TabContext, TabList } from "@mui/lab";

const useStyles = makeStyles((theme) =>
  createStyles({
    aboutContainer: {
      padding: "5% 0",
    },
    aboutTitle: {
      fontWeight: 700,
      marginBottom: "5px",
    },
    aboutMission: {
      fontWeight: 300,
      fontSize: "1.8rem",
    },
    aboutTab: {
      fontSize: "1rem",
      textTransform: "capitalize",
    },
  })
);

const About = (props) => {
  const classes = useStyles(props.theme);

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className={classes.aboutContainer}>
      <Box>
        <Typography variant="h4" component="h2" className={classes.aboutTitle}>
          A bit about me
        </Typography>
        <Typography component="span" className={classes.aboutMission}>
          I’m on a mission to make an unforgettable impact on the lives of
          others and help those around me.
        </Typography>
      </Box>

      <Box>
        <TabContext value={value}>
          <TabList value={value} onChange={handleChange} centered>
            {aboutTabsData.map(({ id, tabName }) => (
              <Tab
                key={id}
                label={tabName}
                className={classes.aboutTab}
                value={`${id}`}
              />
            ))}
          </TabList>

          {aboutContentData.map(({ id, description }) => (
            <TabPanel key={id} value={`${id}`}>
              {description}
            </TabPanel>
          ))}
        </TabContext>
      </Box>
    </section>
  );
};

export default About;

import { useState } from "react";

import { aboutTabsData, aboutContentData } from "./aboutData";

import { createStyles, Tab, Tabs, Typography, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { TabPanel, TabContext } from "@mui/lab";

const useStyles = makeStyles((theme) =>
  createStyles({
    aboutContainer: {
      padding: "0 0 25% 0",
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
    aboutContentSpacing: {
      margin: "2% 0",
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
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
          >
            {aboutTabsData.map(({ id, tabName }) => (
              <Tab
                key={id}
                label={tabName}
                className={classes.aboutTab}
                value={`${id}`}
              />
            ))}
          </Tabs>

          {aboutContentData.map(({ id, description }) => (
            <TabPanel key={id} value={`${id}`}>
              {description.map(({ id, content }) => (
                <Box key={id}>
                  <Typography className={classes.aboutContentSpacing}>
                    {content}
                  </Typography>
                  {id !== description.length && <Divider />}
                </Box>
              ))}
            </TabPanel>
          ))}
        </TabContext>
      </Box>
    </section>
  );
};

export default About;

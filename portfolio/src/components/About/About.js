import { useState } from "react";

import { aboutTabsData, aboutContentData } from "./aboutData";
import { Tab, Tabs, Typography, Divider } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { TabPanel, TabContext } from "@mui/lab";

import * as Scroll from "react-scroll";

const useStyles = makeStyles((theme) =>
  createStyles({
    aboutContainer: {
      padding: "0 0 25% 0",
    },
    aboutTitle: {
      fontWeight: 700,
      marginBottom: "5px",
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
  const Element = Scroll.Element;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className={classes.aboutContainer}>
      <Element name="about" />
      <Box>
        <Typography variant="h4" component="h2" className={classes.aboutTitle}>
          A bit about me
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
            aria-label="Tabs where selection follows focus"
            selectionFollowsFocus
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

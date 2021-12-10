import { storyData } from "./storyData";

import { Typography } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { Box } from "@mui/system";

import * as Scroll from "react-scroll";

const useStyles = makeStyles((theme) =>
  createStyles({
    storyContainer: {
      padding: "0 0 25% 0",
    },
    storyTitle: {
      fontWeight: 700,
      marginBottom: "5px",
    },
    storyCard: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "3% 0",
      [theme.breakpoints.down("tablet")]: {
        flexDirection: "column",
        margin: "5% 0",
      },
    },
    storyText: {
      width: "50%",
      marginRight: "3%",
      [theme.breakpoints.down("tablet")]: {
        width: "100%",
        margin: "0 0 3% 0",
      },
    },
  })
);

const Story = (props) => {
  const classes = useStyles(props.theme);
  const Element = Scroll.Element;

  return (
    <section className={classes.storyContainer}>
      <Element name="story" />
      <Typography variant="h4" component="h2" className={classes.storyTitle}>
        My Story
      </Typography>

      {storyData.map(({ id, text1, text2, image }) => (
        <Box key={id} className={classes.storyCard}>
          <Box className={classes.storyText}>
            <Typography>{text1}</Typography>
            <br />
            <Typography>{text2}</Typography>
          </Box>
          <img src={image} alt="image of my story" />
        </Box>
      ))}
    </section>
  );
};

export default Story;

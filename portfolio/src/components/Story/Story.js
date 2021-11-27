import { storyData } from "./storyData";

import { createStyles, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) =>
  createStyles({
    storyContainer: {
      padding: "5% 0",
    },
    storyTitle: {
      fontWeight: 700,
      marginBottom: "5px",
    },
    storyCard: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "2% 0",
    },
    storyText: {
      width: "35%",
      marginRight: "5%",
    },
  })
);

const Story = (props) => {
  const classes = useStyles(props.theme);

  return (
    <section className={classes.storyContainer}>
      <Typography variant="h4" component="h2" className={classes.storyTitle}>
        My Story
      </Typography>

      {storyData.map(({ id, text1, text2, image }) => (
        <Box key={id} className={classes.storyCard}>
          <Box className={classes.storyText}>
            <Typography>{text1}</Typography>
            <br />
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

import { createStyles, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) =>
  createStyles({
    storyContainer: {
      border: "1px solid blue",
      padding: "5% 0",
    },
  })
);

const Story = (props) => {
  const classes = useStyles(props.theme);

  return (
    <div className={classes.storyContainer}>
      <p>testing</p>
    </div>
  );
};

export default Story;

import { createStyles, Typography, IconButton, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import NorthIcon from "@mui/icons-material/North";

import * as Scroll from "react-scroll";

const useStyles = makeStyles((theme) =>
  createStyles({
    topContainer: {
      position: "fixed",
      right: "25px",
      bottom: "35px",
      borderRadius: 50,

      background: `${theme.palette.background.default}`,
    },
    topCircle: {
      border: `1px solid ${theme.palette.secondary.main}`,
    },
  })
);

const BackToTop = (props) => {
  const classes = useStyles(props.theme);
  const scroll = Scroll.animateScroll;
  return (
    <Box className={classes.topContainer}>
      <Tooltip title="Back To Top" className={classes.topCircle}>
        <IconButton onClick={() => scroll.scrollToTop()}>
          <NorthIcon color="secondary" fontSize="large" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default BackToTop;

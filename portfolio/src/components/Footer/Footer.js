import { createStyles, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) =>
  createStyles({
    footerText: {
      padding: "5% 0 3% 0",
      textAlign: "center",
    },
  })
);

const Footer = (props) => {
  const classes = useStyles(props.theme);
  return (
    <Box className={classes.footerText}>
      <Typography>Designed and Created by Erik Rodriguez</Typography>
    </Box>
  );
};

export default Footer;

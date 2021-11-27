import { createStyles, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    footerText: {
      padding: "5% 0 3% 0",
    },
  })
);

const Footer = (props) => {
  const classes = useStyles(props.theme);
  return (
    <footer className={classes.footerText}>
      <Typography>Designed and Created by Erik Rodriguez</Typography>
    </footer>
  );
};

export default Footer;

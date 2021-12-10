import { greetingData } from "./greetingData";

import { Typography, Icon, Stack, Button } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { Box } from "@mui/system";

import Portrait from "../../img/portrait-myself.JPG";

const useStyles = makeStyles((theme) =>
  createStyles({
    greetingContainer: {
      padding: "15% 0",
      [theme.breakpoints.down("tablet")]: {
        padding: "20% 0",
      },
    },
    greetingMain: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("mobile")]: {
        flexDirection: "column",
      },
    },
    greetingText: {
      margin: "2%",
      maxWidth: "250px",
      [theme.breakpoints.down("mobile")]: {
        maxWidth: "550px",
      },
    },
    greetingTitle: {
      fontWeight: 700,
      marginBottom: "5px",
    },
    greetingImg: {
      width: "250px",
      height: "245px",
    },
    greetingContact: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "5%",
    },
    greetingLinks: {
      display: "flex",
      flexDirection: "column",
      textTransform: "capitalize",
      margin: "0 2.5%",
      [theme.breakpoints.down("mobile")]: {
        margin: "0",
      },
    },
    greetingCircle: {
      width: "50px",
      height: "50px",
      border: `1px solid ${theme.palette.secondary.main}`,
      borderRadius: 50,
      marginBottom: "15px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

const Greeting = (props) => {
  const classes = useStyles(props.theme);

  return (
    <section className={classes.greetingContainer}>
      <Box className={classes.greetingMain}>
        <Box className={classes.greetingText}>
          <Typography
            variant="h4"
            component="h2"
            className={classes.greetingTitle}
          >
            Hello,
          </Typography>
          <Typography>I’m Erik Rodriguez.</Typography>
          <Typography>A Software Engineer from Hemet, CA.</Typography>
          <Typography>
            I’m on a mission to make an unforgettable impact on the lives of
            others and help those around me.
          </Typography>
        </Box>

        <img
          src={Portrait}
          alt="Photo of Myself"
          className={classes.greetingImg}
        />
      </Box>

      <Stack className={classes.greetingContact}>
        {greetingData.map(({ id, icon, title, link }) => (
          <Button
            key={id}
            className={classes.greetingLinks}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <Box className={classes.greetingCircle}>{icon}</Box>
            <Typography>{title}</Typography>
          </Button>
        ))}
      </Stack>
    </section>
  );
};

export default Greeting;

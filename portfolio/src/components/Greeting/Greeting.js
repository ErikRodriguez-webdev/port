import { greetingData } from "./greetingData";

import { createStyles, Typography, Icon, Stack, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

import Portrait from "../../img/portrait-myself.JPG";

const useStyles = makeStyles((theme) =>
  createStyles({
    greetingContainer: {
      padding: "5% 0",
    },
    greetingMain: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    greetingText: {
      marginRight: "5%",
    },
    greetingTitle: {
      fontWeight: 700,
      marginBottom: "3%",
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
      margin: "0 1.5%",
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

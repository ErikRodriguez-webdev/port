import { navData } from "./navData";

import { Divider, Stack, Button } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

import * as Scroll from "react-scroll";

const useStyles = makeStyles((theme) =>
  createStyles({
    navContainer: {
      position: "fixed",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      zIndex: 5,
    },
    navBtnStack: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      background: `${theme.palette.background.default}`,
    },
    navBtn: {
      margin: theme.spacing(1),
      textTransform: "capitalize",
    },
  })
);

const Nav = (props) => {
  const classes = useStyles(props.theme);
  const scroller = Scroll.scroller;

  return (
    <header className={classes.navContainer}>
      <Stack
        className={classes.navBtnStack}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {navData.map(({ id, text, elementName }) => (
          <Button
            className={classes.navBtn}
            key={id}
            onClick={() =>
              scroller.scrollTo(elementName, { smooth: true, offset: -50 })
            }
          >
            {text}
          </Button>
        ))}
      </Stack>
    </header>
  );
};

export default Nav;

import { navData } from "./navData";

import { Divider, Stack, Button, createStyles } from "@mui/material";
import { makeStyles } from "@mui/styles";

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

  return (
    <header className={classes.navContainer}>
      <Stack
        className={classes.navBtnStack}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {navData.map((item) => (
          <Button className={classes.navBtn} key={item.id}>
            {item.text}
          </Button>
        ))}
      </Stack>
    </header>
  );
};

export default Nav;

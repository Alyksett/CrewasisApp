import React, {useState} from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import {Link} from "react-router-dom";
import DrawerComp from "./DrawerComp";


const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    fontSize: "20px",
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "yellow",
      // borderBottom: "1px solid white",
    },
  },
}));

const NavBar = ({user}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          AI PLATFORM
        </Typography>
          {isMobile ? (
            <DrawerComp />
          ) : (
            <div className={classes.navlinks}>
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/weekly_insights" className={classes.link}>
                Weekly Insights
              </Link>
              <Link to="/settings" className={classes.link}>
                Settings
              </Link>
              <Link to="/billings" className={classes.link}>
                Billings
              </Link>
              <Link to="/get_started" className={classes.link}>
                Get Started
              </Link>
              <Link to="/login" className={classes.link}>
                Login
              </Link>
              {/* {user
              ? <em>{user} logged in</em>
              : <Link to="/login" className={classes.link}>Login</Link>
            } */}
            </div>
        )}
      </Toolbar>
    </AppBar>
      
    </div>    
  )
}

export default NavBar;

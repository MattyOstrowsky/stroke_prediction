import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import { Paper, Toolbar } from "@material-ui/core";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    flex: 1,
    marginLeft: 0,
  },
}));

export default function HamburgerMenu() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <Toolbar variant="dense">
        <Typography className={classes.menuButton} alignItems="flex-start">
          <IconButton
            component={Link}
            to="/"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <EmojiFoodBeverageIcon style={{ fontSize: 45 }} />
          </IconButton>
        </Typography>
        <IconButton
          className={classes.menuButton2}
          edge="start"
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>
                      <Button component={Link} to="/about">
                        About
                      </Button>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Button component={Link} to="/projects">
                        projects
                      </Button>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Button component={Link} to="/Contact">
                        Contact
                      </Button>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Button component={Link} to="/strokemodel">
                        Stroke prediction
                      </Button>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Toolbar>
    </div>
  );
}

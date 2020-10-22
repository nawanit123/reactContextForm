import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles/NavbarStyles';
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkMode, toggleTheme } = this.context;
    const { classes } = this.props;
    return (
      <LanguageContext.Consumer>
        {(value) => (
          <div className={classes.root}>
            <AppBar
              position="static"
              color={isDarkMode ? 'default' : 'primary'}
            >
              <Toolbar>
                <IconButton
                  aria-label="logo"
                  className={classes.MenuButton}
                  color="inherit"
                >
                  <span>🏳{value.language}</span>
                </IconButton>
                <Typography
                  variant="h6"
                  className={classes.title}
                  color="inherit"
                >
                  App Title
                </Typography>
                <Switch onChange={toggleTheme} />
                <div className={classes.grow} />
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search..."
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                </div>
              </Toolbar>
            </AppBar>
          </div>
        )}
      </LanguageContext.Consumer>
    );
  }
}

export default withStyles(styles)(Navbar);

import React, { Component } from 'react';
import { Avatar } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/formStyles';
import { LanguageContext } from './contexts/LanguageContext';

const words = {
  english: {
    signIn: 'Sign In',
    email: 'Email Address',
    password: 'Password',
    remember: 'Remember Me',
  },
  french: {
    signIn: 'Se Connecter',
    email: 'Adresse Électronique',
    password: 'Mot de Passe',
    remember: 'Souviens-toi De Moi',
  },
  spanish: {
    signIn: 'Registrarse',
    email: 'Correo Electrónico',
    password: 'Contraseña',
    remember: 'Recuérdame',
  },
};

class Form extends Component {
  static contextType = LanguageContext;
  render() {
    const { language, setLang } = this.context;
    const { classes } = this.props;
    const { signIn, email, password, remember } = words[language];
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.Avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">{signIn}</Typography>
          <Select value={language} onChange={setLang}>
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="french">French</MenuItem>
            <MenuItem value="spanish">Spanish</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">{email}</InputLabel>
              <Input id="email" name="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">{password}</InputLabel>
              <Input id="password" name="password" autoFocus />
            </FormControl>
            <FormControlLabel
              label={remember}
              control={
                <Checkbox
                  // value=""
                  // checked={}
                  // onChange={}
                  color="primary"
                />
              }
            />
            <Button
              variant="contained"
              color="primary"
              type="Submit"
              fullWidth
              className={classes.submit}
            >
              {signIn}
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Form);

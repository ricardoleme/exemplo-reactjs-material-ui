import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Copyright from "../../components/Copyright";
/* Material-Ui Imports  */
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

/*
Fonte do código:
https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/sign-in/SignIn.js
*/

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Login() {
  const classes = useStyles(); //estilos do Material-UI
  const history = useHistory(); //redirecionar a página
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrarUsuario, setLembrarUsuario] = useState(false);
  const [botaoDesabilitado, setBotaoDesabilitado] = useState(true);
  const [helperText, setHelperText] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (email.trim() && senha.trim()) {
      setBotaoDesabilitado(false);
    } else {
      setBotaoDesabilitado(true);
    }
  }, [email, senha]);

  // Nota: O array [] deps vazio significa
  // que este useEffect será executado uma vez
  // semelhante ao componentDidMount()
  useEffect(() => {    
      document.title = 'Exemplo React - Área Reservada';     
    if (localStorage.getItem("usuario")) {
      setLembrarUsuario(true);
      setEmail(localStorage.getItem("usuario"));
    }
  }, []);

  useEffect(() => {
    if (lembrarUsuario) {
      localStorage.setItem("usuario", email);
    } else {
      localStorage.removeItem("usuario");
    }
  }, [lembrarUsuario, email]);

  const alteraLembrar = e => {
    setLembrarUsuario(!lembrarUsuario);
  };
  const validaLogin = e => {
    e.preventDefault();
    if (email === "alguem@email.com" && senha === "123senha") {
      setError(false);
      setHelperText("Login OK! Aguarde...");
      history.push("/dashboard");
    } else {
      setError(true);
      setHelperText("O usuário ou a senha informados são inválidos!");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Área Reservada
        </Typography>
        <form className={classes.form} noValidate onSubmit={validaLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Endereço de Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={e => setEmail(e.target.value)}
            error={error}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            error={error}
            helperText={helperText}
          />
          <FormControlLabel
            control={
              <Switch
                checked={lembrarUsuario}
                onChange={alteraLembrar}
                name="lembrar"
              />
            }
            label="Lembrar o usuário"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={botaoDesabilitado}
            className={classes.submit}
          >
            <LockOutlinedIcon /> Acessar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Esqueceu a senha?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Ainda não tem uma conta?"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

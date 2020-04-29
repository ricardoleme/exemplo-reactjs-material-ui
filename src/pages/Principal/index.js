import React, {useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Copyright from '../../components/Copyright';
/* ícones */
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import Github from '@material-ui/icons/GitHub';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";


const useStyles = makeStyles((theme) => ({  
  icon: {
    marginRight: theme.spacing(2),
  },  
  fundoInicial: {
    position: 'relative',    
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://picsum.photos/800)', /* imagem randômica */
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }
}));

export default function Album() {
  const classes = useStyles();

  useEffect(() => {
    document.title = 'Exemplo React - Página Inicial';
   }, []);
  


  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <AssignmentInd className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Projeto Exemplo ReactJs & Material-ui
          </Typography>
        </Toolbar>
      </AppBar>
      <main>                
        <Paper className={classes.fundoInicial} >
          <Container>
          <Typography component="div" style={{ backgroundColor: 'rgba(29, 113, 216, 0.5)', height: '60vh' }}>
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              Projeto Exemplo
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              Seja bem vindo ao projeto exemplo!
            </Typography>                        
              <Grid container spacing={3} justify="center" style={{ marginTop: '5rem'}}>
                <Grid item>                
                  <Button variant="contained" color="primary" href="/login" startIcon={<LockOutlinedIcon/>}>
                    Login
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="secondary" href="https://github.com/ricardoleme/exemplo-reactjs-material-ui" startIcon={<Github />}>
                    Código Fonte
                  </Button>
                </Grid>
              </Grid>            
            </Typography>
            </Container>
          </Paper>        
      </main>    
     <Copyright /> 
    </React.Fragment>
  );
}
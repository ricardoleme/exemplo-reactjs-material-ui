import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import TrendingDown from "@material-ui/icons/TrendingDown"
import TrendingUp from "@material-ui/icons/TrendingUp"

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function CardMoeda(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imagemMoeda}
          title={props.nomeMoeda}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.nomeMoeda}
          </Typography>
          <Typography component="p">
           {props.cotacaoMoeda}&nbsp;
          {props.variacaoMoeda >0 ?          
          <Chip
              avatar={<TrendingUp/>}
              label={props.variacaoMoeda+"%"}
              clickable
              color="primary"/>              
              :
              <Chip             
              avatar={<TrendingDown/>}
              label={props.variacaoMoeda+"%"}
              clickable
              color="secondary"/>
          }
         </Typography>   
         
        </CardContent>
      </CardActionArea>
      <CardActions>
      
        <Button size="small" color="primary" variant="outlined" href="https://docs.awesomeapi.com.br/" target="_blank">
          Powered by AwesomeAPI
        </Button>
      </CardActions>
    </Card>
  );
}

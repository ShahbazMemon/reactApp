import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Routers from './router'
import ReadMore  from './Read_more'
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Routes from './router'
import { connect } from 'react-redux'

const useStyles = makeStyles({
  root: {
    maxWidth: 900,
    margin : 100,

  },
});
 
function ImgMediaCard() {
  const classes = useStyles();
  
    const history = useHistory();
  
    const handleRoute = () =>{ 
    this.props.history.push('/boooking_form');
    }


  return (
      
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0-6trtumnsc_iLfZd5PwD08d_gYu8h8-caA2HqZnNQLZOMf9LSWP4JpuzWZC6zwRxcA5TA2XumfLT-w&usqp=CAU"
          title="Contemplative Reptile"
        />
        
        <CardContent class="card_content">
          <Typography gutterBottom variant="h5" component="h2">
            Hotel Mehran
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          In the commercial center of south-central Karachi, The 5-star Pearl Continental Hotel 
          </Typography>
        </CardContent>
        <ReadMore />
      </CardActionArea>
      <CardActions>
        <Routes/>
        <Button size="small" color="primary">
          price
        </Button>
      </CardActions>
    </Card>
  );
}



export default ImgMediaCard;

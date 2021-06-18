import logo from './logo.svg';
import './App.css';
import ImgMediaCard from './hotel_cards';
import ReadMore from './Read_more';
import MyForm from './boooking_form';
import Home from './home';
import Routes from './router'
import {withRouter} from "react-router-dom";
import { connect } from 'react-redux'
import { setData } from './store/action/function'
import React from 'react'
import Booking from './booking_details'

class App extends React.Component{
  

render() {
  // console.log("data from redux.",this.props.setData('set dataaa'))
    console.log('dataa',this.props)
  return (
<div >
<div class="nav-bar">
  <h1 class='header'>Hotel Booking</h1>
  <button class='buttons'>Register</button>
    <button class='buttons'>sign in</button>
</div>

  <ImgMediaCard />
  <ImgMediaCard />
  <ImgMediaCard />  
     
    </div> 
  );
}
}

const mapStateToProps = (state) => ({
  name:  state.name,
  Email: state.Email,
  age : state.age,
  data : state.data,
});

export default connect(mapStateToProps,null)(App);


// export default App;

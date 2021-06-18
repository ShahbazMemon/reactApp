import React from 'react'
import { connect } from 'react-redux'
import './App.css';

class Booking extends React.Component{
    render(){
        
        return(
            <div class='booking_card'>
            <h1>Your Booking has  been  Confirmed {this.props.name}</h1>
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
  
  export default connect(mapStateToProps,null)(Booking);
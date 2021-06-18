import React from "react";
import ReactDOM from "react-dom";
import Button from "react";
import "./App.css";
// import {withRouter} from "react-router-dom";
import { connect } from "react-redux";
import { setData } from "./store/action/function";
import Routers from './Routers';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      contact: "",
      Email: "",
      cnic: "",
      age: null,
    };
  }
  
  mySubmitHandler = (event) => {
    event.preventDefault();
    let age = this.state.age;
    if (!Number(age)) {
      alert("Your age must be a number");
    }
  };
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };
  render() {
    // const handleRoute = () =>{ 
    //   this.props.history.push('/booking_details');
    //   }
    const { name, Email, cnic, contact, age } = this.state;
    console.log(
      "data from rdux>>>>",
      this.props.setData(name)
    );
    return (
      <form onSubmit={this.mySubmitHandler} class="booking_Form">
        <h1>
         Please Enter Your Details 
        </h1>
        <p>Enter your name:</p>
        <input type="text" name="name" onChange={this.myChangeHandler} />
        <p>Enter your Email:</p>
        <input type="text" name="Email" onChange={this.myChangeHandler} />
        <p>Enter your Cnic:</p>
        <input type="number" name="cnic" onChange={this.myChangeHandler} />
        <p>Enter your contact:</p>
        <input type="number" name="contact" onChange={this.myChangeHandler} />
        <p>Enter your age:</p>
        <input type="text" name="age" onChange={this.myChangeHandler} />
        <br />
        <br />
        <input type="submit" />
       < Routers/>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.name,
  email: state.email,
  data: state.data
});
const mapDispatchToProp = (dispatch) => ({
  setData: (name) => dispatch(setData(name)),
});
export default connect(mapStateToProps, mapDispatchToProp)(MyForm);

// // ReactDOM.render(<MyForm />, document.getElementById('root'));
// export default MyForm;

const initial_state = {
    name: "Ali ",
    Email: "ali@gmail.com",
    cnic: null,
    age: null ,
    contact : '',
    data : 'ali'
}

export default (state = initial_state,action) => {
    console.log("app-action",action)
    switch (action.type) {
        case "setdata":
            return {...state, name: action.name}
        //    return {...state,  name:action.name , Email: action.Email, cnic: action.cnic, age: action.age, contact: action.contact};
           
        default:
            return state;
    }
}

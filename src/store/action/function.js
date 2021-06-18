
const setData =(name)=>{
    return (dispatch)=>{
        dispatch({type:"setdata", name: name})
    }
}

export {
    setData
}
import React,{useState} from 'react';
import './App.css';

function ReadMore() {
  const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
      <p className="extra-content">
      offers luxurious and modern rooms with free Wi-Fi. Six dining options and an indoor pool await guests
        
      </p>
  </div>
  const linkName=readMore?' Read Less << ':'Read More >> '
  return (
    <div className="App">
      <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
      {readMore && extraContent}
    </div>
  );
}

export default ReadMore;
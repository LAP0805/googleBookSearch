import React from 'react';
import './bookDetail.css';

function BookDetail(props){


    return(
        <>
        <div className="bookDetailBox">
        <a href={props.view} target="_blank"><button type="button" className="btn btn-primary">View</button></a>
        <button type="button" className="btn btn-primary">Save</button>
        <h5>{props.title}</h5>
        <h6>{props.author}</h6>
        <br></br>
        <img src={props.image} className="bookImage"/>
        <p>{props.description}</p>
       
        </div>
        
        </>
    )

}

export default BookDetail;
import React from 'react'

export default function Contact(props) {
  return (

    <div className="col-md-4 ">
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">
                    {props.fname} {props.lname}
                </h2>
                <p className="card-text">
                    {props.email}
                </p>
                <p className="card-text">
                    {props.phone}
                </p>
            </div>
        </div>
    </div>
  );
}

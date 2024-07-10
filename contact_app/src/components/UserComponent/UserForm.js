import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Contact from './Contact';



export default function UserForm() {
    const [contacts, setContacts] = useState([]);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const AddUserDet = () => {
        setContacts([...contacts, { id: uuidv4(), fname, lname, email, phone }]);
    }

    console.log(contacts);
    
  return (
    <div class="container">
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <div className='bg-dark text-light text-center rounded py-3'>
                    <h2>Contact Form </h2>

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <div className='mt-2'>
                    <input type ="text" className="form-control form-control-md" placeholder="First Name" onChange={(e)=>setFname(e.target.value)}/>
                </div>
                <div className='mt-2'>
                    <input type ="text" className="form-control form-control-md" placeholder="Last Name" onChange={(e)=>setLname(e.target.value)}/>
                </div>
                <div className='mt-2'>
                    <input type ="text" className="form-control form-control-md" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='mt-2'>
                    <input type ="text" className="form-control form-control-md" placeholder="Phone Number" onChange={(e)=>setPhone(e.target.value)}/>
                </div>
                <div className='mt-2'>
                    <button className="btn btn-success" onClick={AddUserDet}>Submit</button>
                </div>
                
            </div>
        </div>
        <br></br>
        <br></br>
        <hr></hr>
        <hr></hr> 

        <div className="row mt-2">{
            contacts.map((element) => (
                <Contact 
                key={element.id} 
                fname={element.fname} 
                lname={element.lname} 
                email={element.email} 
                phone={element.phone} 
                />
            ))
        }
        </div>
    </div>
  );
}
//ReactHooks
    //usestate to store form data
    //useEffect to update the state variable contacts
    //useContext to access the context value
    //useReducer to manage the state of the form
    //useRef to store the form data
    //usememo to return memorized values
    //uselayout effect

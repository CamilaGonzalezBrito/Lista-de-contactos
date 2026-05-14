import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddContact = () => {

    const [contact,setContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })
    const saveContact = () => {
        fetch("https://playground.4geeks.com/contact/agendas/camila/contacts", {
            method: "POST",
            body: JSON.stringify(contact),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log( data);
                setContact({
                    name: "",
                    email: "",
                    phone: "",
                    address: ""
                });
            })
            .catch((error) => console.log(error));
    };
    return (
        <>

             <div className="container mt-5 w-75">
                <h1 className="text-center mb-4">Add a new contact</h1>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Full Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" placeholder="Full Name" 
                        value={contact.name} 
                        onChange={(e) => 
                            setContact({ 
                                ...contact,
                                name: e.target.value
                            })
                        } 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="email" 
                        placeholder="Enter email"
                        value={contact.email} 
                        onChange={(e) => 
                            setContact({ 
                                ...contact,
                                email: e.target.value
                            })
                        } 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Phone</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="phone" 
                        placeholder="Enter Phone"
                        value={contact.phone} 
                        onChange={(e) => 
                            setContact({ 
                                ...contact,
                                phone: e.target.value
                            })
                        } 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Address</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="address" 
                        placeholder="Enter address"
                        value={contact.address} 
                        onChange={(e) => 
                            setContact({ 
                                ...contact,
                                address: e.target.value
                            })
                        } 
                    />
                </div>
                <div className="d-grid gap-2" >
                    <button className="btn btn-primary" type="button" onClick={saveContact}>Save</button>
                </div>
                <div>
                    <Link to="/">
                        or get back to contacts
                    </Link>
                </div>

             </div>
            
        
        </>
        
    )
}

export default AddContact;
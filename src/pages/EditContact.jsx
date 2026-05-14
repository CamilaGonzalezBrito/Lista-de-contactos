import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";


const EditContact = () => {

	const location = useLocation();

	const oldContact = location.state.contact;

	const [contact, setContact] = useState({
		name: oldContact.name,
		email: oldContact.email,
		phone: oldContact.phone,
		address: oldContact.address
	});

    const updateContact = () => {

        fetch(
            `https://playground.4geeks.com/contact/agendas/camila/contacts/${oldContact.id}`,
            {
                method:"PUT",

                headers:{
                    "Content-Type":"application/json"
                },

                body: JSON.stringify(contact)
            }
        )
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
        })
        .catch((error)=>console.log(error));

    }
	return (
		<div className="container mt-5 w-75">

			<h1 className="text-center mb-4">
				Edit Contact
			</h1>

			<input
				className="form-control mb-3"
				value={contact.name}
				onChange={(e)=>
					setContact({
						...contact,
						name:e.target.value
					})
				}
			/>

			<input
				className="form-control mb-3"
				value={contact.email}
				onChange={(e)=>
					setContact({
						...contact,
						email:e.target.value
					})
				}
			/>
            <input
                className="form-control mb-3"
                value={contact.phone}
                placeholder="Phone"
                onChange={(e)=>
                    setContact({
                        ...contact,
                        phone:e.target.value
                    })
                }
            />

            <input
                className="form-control mb-3"
                value={contact.address}
                placeholder="Address"
                onChange={(e)=>
                    setContact({
                        ...contact,
                        address:e.target.value
                    })
                }
            />

            <div className="d-grid gap-2">
                <button
                    className="btn btn-warning"
                    onClick={updateContact}
                >
                    Update Contact
                </button>
            </div>
            <div className="text-center mt-3">
                <Link to="/">
                    Back to contacts
                </Link>
            </div>

		</div>
	)
}

export default EditContact;
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

const ContactCard = ({ contact }) => {

    const { dispatch } = useGlobalReducer();

    const deleteContact = () => {
        fetch(`https://playground.4geeks.com/contact/agendas/camila/contacts/${contact.id}`,{
            method:"DELETE"
        })
        .then(()=>{

            fetch("https://playground.4geeks.com/contact/agendas/camila/contacts")
            .then((response)=>response.json())
            .then((data)=>{

                dispatch({
                    type:"set_contacts",
                    payload:data.contacts
                })

            })

        })
        .catch((error)=>console.log(error))
    }
    

	

	return (
		<div className="card p-3 border-bottom">
			<div className="row align-items-center">

				<div className="col-2 text-center">
					<img
                        src={`https://picsum.photos/100?random=${contact.id}`}
                        className="rounded-circle"
                        width="100"
                        height="100"
                    />
				</div>

				<div className="col-8">
					<h5>{contact.name}</h5>
					<p className="mb-1">📍 {contact.address}</p>
					<p className="mb-1">📞 {contact.phone}</p>
					<p className="mb-1">✉️ {contact.email}</p>
				</div>

				<div className="col-2 d-flex justify-content-around">
					<Link
                        to="/edit-contact"
                        state={{ contact }}
                    >
                        <button className="btn btn-link text-dark">
                            ✏️
                        </button>
                    </Link>
					<button className="btn btn-link text-dark" onClick={deleteContact}>🗑️</button>
				</div>

			</div>
		</div>
	);
};

export default ContactCard;
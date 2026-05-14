import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer"
import { Link } from "react-router-dom";
import ContactCard from "../pages/ConcactCard";

const Contact = () => {

    const {store, dispatch} = useGlobalReducer();

    
    const createAgenda = () => {
        fetch("https://playground.4geeks.com/contact/agendas/camila", {
            method: "POST"
        })
        .then((response)=>response.json())
        .then((data)=>{
            console.log("Agenda:",data);
            getContacts();
        })
        .catch((error)=>console.log(error));
    }
    const getContacts = () => {
        fetch("https://playground.4geeks.com/contact/agendas/camila/contacts")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            dispatch({
                type:"set_contacts",
                payload: data.contacts
            })
        })
        .catch((error) => console.log(error));
    }
    useEffect(() => {
        createAgenda();
    }, []);

    return (
        <div>
            
            
            <p>Total contactos: {store.contacts.length}</p>
            {store.contacts.map((contact) => {
                return (
                    <ContactCard
                        key={contact.id}
                        contact={contact}
                    />
                );
            })}
        </div>
    )
}

export default Contact;
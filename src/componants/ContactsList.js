import React from 'react'
import Contactcard from './Contactcard'

const ContactsList = ({ListContacts}) => {
    return (
        <div>
            {ListContacts.map(elm=><Contactcard contact={elm}/>)}
        </div>
    )
}

export default ContactsList

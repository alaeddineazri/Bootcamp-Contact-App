import React from 'react'


const Contactcard = ({contact}) => {
    const gender = contact.gender
    return (
        <div >
           
            <img src={contact.img} alt="avatar"></img>
            <h3 >First Name: {contact.first_name} <br/>Last Name: {contact.last_name}</h3>
            <p style={{ color:'blue'}}>Email:{contact.email}<br/></p>
            <p>Gender:{gender ==="Male"?"👦":"👩"}</p>
            <hr/>
            
        </div>
    )
}

export default Contactcard

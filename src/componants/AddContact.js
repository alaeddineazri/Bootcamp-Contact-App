import {useState} from "react";
import {Button, Modal, FormControl } from 'react-bootstrap'

function AddContact({newcontact,setnewcontact,AddnewContact}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleadd = (event) =>{
        setnewcontact({...newcontact, [event.target.name] : event.target.value});
    }
    return (
        <div className="App">
            <Button className="btn" variant="outline-success" onClick={handleShow}>
                Add New Contact
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl placeholder="Avatar url" type="url" name="img"  onChange={handleadd}/>
                    <FormControl placeholder="F.Name" type="text" name="first_name"  onChange={handleadd}/>
                    <FormControl placeholder="L.name" type="text" name="last_name"onChange={handleadd}/>
                    <FormControl placeholder="Email" type="email" name="email" onChange={handleadd}/>
                    <select style={{width:"100%"}} name="gender"  onChange={handleadd}>
                        <option value="Unkowen">select gender</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() =>{handleClose() ;AddnewContact(newcontact)}} >Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
    }

export default AddContact



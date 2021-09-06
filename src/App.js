
import './App.css';
import  { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import ContactData from './componants/ContactsData';
import ContactsList from './componants/ContactsList';
import AddContact from './componants/AddContact';
import Filter from './componants/Filter';






function App() {
  const [filtres, setfiltre] = useState("")
  const [contact, setcontact] = useState(ContactData)
  const [newcontact, setnewcontact] = useState({img:"",first_name:"",last_name:"",email:"",gender:""})


  const AddnewContact =(newcontact)=>setcontact([...contact,newcontact])
  const filtration =(valeur)=>setfiltre(valeur)
  
  return (
    <div >  
      <header className="App">
        <h1 style={{color:"#28a745"}}>Contact App</h1>
        <Filter filtration={filtration} />
        <AddContact AddnewContact={AddnewContact} newcontact={newcontact} setnewcontact={setnewcontact}/>
      </header>    
      
      <header className="App-header">
      <ContactsList ListContacts={contact.filter(elm=>elm.first_name.toLowerCase().includes(filtres.toLowerCase())) } />
      


      </header>
    </div>
  );
}

export default App;

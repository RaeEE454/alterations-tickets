import { useState} from 'react';
import styles from './layout.module.css';

export default function Form() {

    const [ticketNumber, setTicketNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [alterations, setAlterations] = useState('');


    return (
      <form action="/" method="post">
        <label > <h2> New Ticket</h2></label>

        <label htmlFor="ticket"><h4>Ticket Number</h4></label>
        <input type="number"
         name="ticket"
         required
         value={ticketNumber}
         onChange={(e) => setTicketNumber(e.target.value)}
         />
   
        <label htmlFor="first"><h4>First Name</h4></label>
        <input type="text"
         name="first"
         required
         placeholder="First Name"
         value={firstName}
         onChange={(e) => setFirstName(e.target.value)} />
   
        <label htmlFor="last"><h4>Last Name</h4></label>
        <input type="text"
         name="last"
         required
         value={lastName}
         onChange={(e) => setLastName(e.target.value)} />

        <label htmlFor="alterations"><h4>Alterations To Be Completed</h4></label>
        <textarea 
         placeholder="Example: Coat: right sleeve taken in 1 inch/// pants: waist let out .5in"
         value={alterations}
         onChange={(e) => setAlterations(e.target.value)}>
         </textarea>
         <br />
        <button type="submit" className={styles.formTicket} >Create Ticket</button>
      </form>
    );
  }

 
       
      
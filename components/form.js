import { useState} from 'react';
import styles from './layout.module.css';

export default function Form() {

    const [ticket_number, setTicketNumber] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [alteration_description, setAlterationDescription] = useState('');
    const [employee, setEmployee] = useState('');

    const onSubmitTicket = async(e) => {
      e.preventDefault();//don't want this to refresh
      try {
        const response = await fetch(`http://localhost:3000/api/tickets/?ticket_number=${ticket_number}&first_name=${first_name}&last_name=${last_name}&alteration_description=${alteration_description}&employee=${employee}`);
        
        const parseResponse = await response.json();

        console.log(parseResponse);
      } catch (error) {
        console.error(err.message);
      }
    }


    return (
      <form action="/api/tickets" method="post" class="form-tickets">
        <label > <h2> New Ticket</h2></label>

        <label htmlFor="ticket"><h4>Ticket Number</h4></label>
        <input type="number"
         name="ticket_number"
         required
         value={ticket_number}
         onChange={(e) => setTicketNumber(e.target.value)}
         />
   
        <label htmlFor="first"><h4>First Name</h4></label>
        <input type="text"
         name="first_name"
         required
         value={first_name}
         onChange={(e) => setFirstName(e.target.value)} />
   
        <label htmlFor="last"><h4>Last Name</h4></label>
        <input type="text"
         name="last_name"
         required
         value={last_name}
         onChange={(e) => setLastName(e.target.value)} />

        <label htmlFor="alterations"><h4>Alterations To Be Completed</h4></label>
        <textarea 
         name="alteration_description"
         placeholder="Example: Coat: right sleeve taken in 1 inch/// pants: waist let out .5in"
         value={alteration_description}
         onChange={(e) => setAlterationDescription(e.target.value)}>
         </textarea>
    
         <label htmlFor="completed"> <h4>Alterations Completed By:</h4></label>
         
         <select 
         name="employee"
         value={employee}
         onChange={(e) => setEmployee(e.target.value)}>
          
            <option> Han Solo</option>
            <option> Princess Leia</option>
            <option> Luke Skywalker</option>
            <option> Yoda</option>


         </select>
         <br />
        <button type="submit" className={styles.formTicket}  onSubmit={onSubmitTicket}>Submit Ticket</button>
      </form>
    );
  }

 
       
      
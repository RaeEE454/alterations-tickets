"use client";
import { useState} from 'react';
import styles from './layout.module.css';
import {useRouter} from 'next/router';

export default function Form({onSuccess}) {

    const [ticket_number, setTicketNumber] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [alteration_description, setAlterationDescription] = useState('');
    const [employee, setEmployee] = useState('');
    const router = useRouter();

    const resetForm = () => {
      setTicketNumber("");
      setFirstName("");
      setLastName("");
      setAlterationDescription("");
      setEmployee("");
      onSuccess();
    }

    const onSubmitTicket = async(e) => {
      e.preventDefault();//don't want this to refresh
      try {
        // const response = await fetch(`http://localhost:3000/api/tickets/?ticket_number=${ticket_number}&first_name=${first_name}&last_name=${last_name}&alteration_description=${alteration_description}&employee=${employee}`);
        // console.log(response.status);

        const response = await fetch("http://localhost:3000/api/tickets/",
          {method: "POST",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ticket_number: ticket_number,
          first_name: first_name,
          last_name: last_name,
          alteration_description: alteration_description,
          employee: employee
          })
          })
          console.log(response.status);
        if(response.ok){
        const parseResponse = await response.json();
          console.log(parseResponse);
          console.log('Redirecting to the index page...');
          resetForm();
          // router.push('/')
          // window.location.reload();
        } else {
          console.error('API request failed');
        }
      } catch (err) {
        console.error(err.message);
      }
    };

    


    // const router = useRouter();

    // const handleSubmit = async (event) => {
    //   event.preventDefault();
      
    //   const formData = { 
    //     ticket_number: "",
    //     first_name: "",
    //     last_name: "",
    //     alteration_description: "",
    //     employee: ""
    //   }

    //   try {
    //     const response = await fetch('./pages/api/tickets', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(formData),
    //     });

    //     if (response.ok) {
    //       router.push('/components/layout');
    //     } else {
    //       console.log('API request failed');
    //     }
    //   } catch(error){
    //     console.log('Fetch request failed', error);
    //   }
    // }

    return (
      <form class="form-tickets" onSubmit={onSubmitTicket} >
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
        <button type="submit" className={styles.formTicket}>Submit Ticket</button>
      </form>
      
    );
  }

 
       
      
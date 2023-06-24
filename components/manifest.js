// import {useState} from "react";
// import styles from './layout.module.css';

// export default function Manifest(){


//     const [ticket_number, setTicketNumber] = useState('');
//     const [first_name, setFirstName] = useState('');
//     const [last_name, setLastName] = useState('');
//     const [alteration_description, setAlterationDescription] = useState('');
//     const [employee, setEmployee] = useState('');

//     const onSubmitTicket = async(e) => {
//       e.preventDefault();//don't want this to refresh
//       try {
//         const response = await fetch(`http://localhost:3000/api/tickets/?ticket_number=${ticket_number}&first_name=${first_name}&last_name=${last_name}&alteration_description=${alteration_description}&employee=${employee}`);
        
//         const parseResponse = await response.json();

//         console.log(parseResponse);
//       } catch (error) {
//         console.error(err.message);
//       }
//     };

//     function updateTicketNumber (e) {
//         this.setState({
//             ticket_number: e.target.value
        
//         })
//     };

//     function handleClick (){
//         var ticketNumbers = this.state.ticketNumbers;
//         ticketNumbers.push(this.state.ticket_number);
//         this.setState({
//             ticketNumbers: ticket_numbers
//         });
//     };

//     return (
//       <form action="/api/manifests" method="post" class="form-manifest">
//       <div class="manifest-container">
//       <div class="location-input">
//         <label > <h2> New Manifest</h2></label>

//         <label htmlFor="ticket"><h4>Sending Store: </h4></label>
//         <input type="number"
//          name="ticket_number"
//          placeholder="store number"
//          required
//          value={ticket_number}
//          onChange={(e) => setTicketNumber(e.target.value)}
//          />
   
//         <label htmlFor="first"><h4>Receiving Store:</h4></label>
//         <input type="text"
//          name="first_name"
//          placeholder="store number"
//          required
//          value={first_name}
//          onChange={(e) => setFirstName(e.target.value)} />
   
//         <label htmlFor="last"><h4>Date Sent:</h4></label>
//         <input type="date"
//          name="last_name"
//          required
//          value={last_name}
//          onChange={(e) => setLastName(e.target.value)} />
//     </div>
//     <table>
//         <thead>
//             <tr>
//                 <th>Ticket Number</th>
//                 <th>Item #</th>
//                 <th>Item Description (C, V, P)</th>
//                 <th>Customer Name</th>

//             </tr>
//         </thead>
//         <tbody>
//         </tbody>
//     </table>
//     <hr />
//     <input type="number" onChange={this.updateTicketNumber.bind(this)}/>
//     <button onClick={this.handleClick.bind(this)}> Add another row</button>

        
//          <br />
//         <button type="submit" className={styles.formTicket}  onSubmit={onSubmitTicket}>Submit </button>
    
        
        
//         </div>

//         </form>


//     )
// }
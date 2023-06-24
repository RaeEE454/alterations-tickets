import pool from "../../lib/db";

export default  async function (req, res)  {
    if(req.method === 'GET') {
        // ...
    } else if(req.method === 'POST') {
        try{
            const {ticket_number, first_name, last_name, alteration_description, employee} = req.body;
            const newTicket = await pool.query({
                text: "INSERT INTO newTickets (ticket_number, first_name, last_name, alteration_description, employee) VALUES ($1, $2, $3, $4, $5) RETURNING *",
                values: [ticket_number, first_name, last_name, alteration_description, employee],
                name: "createTicket"
            });

        res.json("Database updated succesfully");            
        } catch(err){
            console.log(err.message);
            res.json({error: err.message})
        }
    }
}

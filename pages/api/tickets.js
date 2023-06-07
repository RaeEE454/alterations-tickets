import pool from "../../lib/db";

export default  async function (req, res)  {
    if(req.method === 'GET') {
        // ...
    } else if(req.method === 'POST') {
        try{
            const {ticket_number, first_name, last_name, alteration_description} = req.body;
            const newTicket = await pool.query({
                text: "INSERT INTO newTickets (ticket_number, first_name, last_name, alteration_description) VALUES ($1, $2, $3, $4) RETURNING *",
                values: [ticket_number, first_name, last_name, alteration_description],
                name: "createTicket"
            });
    
            res.json(newTicket.rows[0]);
        } catch(err){
            console.log(err.message);
            res.json({error: err.message})
        }
    }
}

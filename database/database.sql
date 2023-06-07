CREATE DATABASE alterationstickets;

CREATE TABLE newTickets(
    ticket_id SERIAL PRIMARY KEY,
    ticket_number INTEGER,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    alteration_description VARCHAR(400)

)
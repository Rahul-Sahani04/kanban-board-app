
import React from "react";
import "../styles/Ticket.css";

const Ticket = ({ ticket }) => {
  const { id, title, tag, userId, status, priority } = ticket;

  return (
    <div className="ticket">
      <div className="ticket-data">
        <h3 className="ticket-title">{title && title.length > 50 ? title.slice(0, 50) + "..." : title}</h3>
        <p className="ticketId">{id}</p>

        <p className="ticketTag">{tag}</p>
      </div>
    </div>
  );
};

export default Ticket;

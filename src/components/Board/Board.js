
import React, { useEffect, useState } from "react";
import Ticket from "./Ticket";
import { fetchData } from "../../services/api";

import "../styles/Board.css";

const Board = ({ displayOption, sortOption }) => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchTicketsAndUsers = async () => {
      try {
        const data = await fetchData();
        setTickets(data.tickets);
        setUsers(data.users);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchTicketsAndUsers();
  }, []);

  const getSortedTickets = () => {
    return tickets
      .sort((a, b) => {
        switch (sortOption) {
          case "priorityDesc":
            return b.priority - a.priority;
          case "priorityAsc":
            return a.priority - b.priority;
          case "titleDesc":
            return b.title.localeCompare(a.title);
          case "titleAsc":
            return a.title.localeCompare(b.title);
          default:
            return 0;
        }
      })
      .filter((ticket) => {
        // Add filtering logic based on displayOption if needed
        return true;
      });
  };

  const groupTickets = () => {
    switch (displayOption) {
      case "By Status":
        return groupByStatus();
      case "By User":
        return groupByUser();
      case "By Priority":
        return groupByPriority();
      default:
        return [];
    }
  };

  const groupByStatus = () => {
    const statusGroups = {
      Todo: [],
      "In progress": [],
      Backlog: [],
      Done: [],
      Cancelled: [],
    };

    tickets.forEach((ticket) => {
      const { status } = ticket;
      statusGroups[status].push(ticket);
    });

    return statusGroups;
  };

  const groupByUser = () => {
    const userGroups = {};

    users.forEach((user) => {
      const { id } = user;
      userGroups[id] = tickets.filter((ticket) => ticket.userId === id);
    });

    return userGroups;
  };

  const groupByPriority = () => {
    const priorityGroups = {
      "No Priority": [],
      Urgent: [],
      High: [],
      Medium: [],
      Low: [],
    };

    tickets.forEach((ticket) => {
      const { priority } = ticket;
      priorityGroups[getPriorityLabel(priority)].push(ticket);
    });

    return priorityGroups;
  };

  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 0:
        return "No Priority";
      case 4:
        return "Urgent";
      case 3:
        return "High";
      case 2:
        return "Medium";
      case 1:
        return "Low";
      default:
        return "";
    }
  };
  return (
    <div className="board">
      {tickets.length > 0 && users.length > 0 ? (
        Object.entries(groupTickets()).map(([groupName, groupTickets]) => (
          <div key={groupName} className="column">
            <h2 className="group-title">{groupName}</h2>
            <div className="ticketsGroup">
              {groupTickets &&
                groupTickets.map((ticket) => (
                  <Ticket key={ticket.id} ticket={ticket} />
                ))}
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Board;

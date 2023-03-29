import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Event from "./Event";
import "./Events.scss";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://volunteer-network-server-lqzu.onrender.com/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  // delete an event
  const deleteEventHandler = (id) => {
    const proceed = window.confirm("Are you sure that you want to delete?");
    if (proceed) {
      const url = `https://volunteer-network-server-lqzu.onrender.com/events/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingEvents = events.filter((e) => e._id !== id);
            setEvents(remainingEvents);
          }
        });
    }
  };
  return (
    <div className="events-container">
      <h2 className="events-container-headline--1">
        Pick the events that you are interested
      </h2>
      <p className="events-container-headline--2">
        Help us to make this world a better place
      </p>
      <div className="container px-20">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((e) => (
            <Event
              key={e._id}
              event={e}
              removeEvent={deleteEventHandler}
            ></Event>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center">
          <Link to={"/createEvent"}>
            <button className="login-button content-center">Add Event</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;

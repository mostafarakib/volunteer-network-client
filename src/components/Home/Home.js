import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Event from "../Events/Event";
import Header from "../Header/Header";

const Home = () => {
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
    <>
      <Header />
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
          <Link to={"/events"}>
            <button className="login-button content-center">View More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;

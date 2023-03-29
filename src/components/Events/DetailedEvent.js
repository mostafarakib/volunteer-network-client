import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./DetailedEvent.scss";

const DetailedEvent = () => {
  const [event, setEvent] = useState([]);
  const { eventId } = useParams();

  useEffect(() => {
    fetch(
      `https://volunteer-network-server-lqzu.onrender.com/events/${eventId}`
    )
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, []);
  return (
    <div className="detailed-event">
      <h1>{event.name}</h1>
      <div className="detailed-event-main mt-6">
        <img src={event.img} alt="eventImage" />
        <p>{event.description}</p>
      </div>
      <Link to={`/events/update/${eventId}`}>
        <button className="login-button mt-6">Update Event</button>
      </Link>
    </div>
  );
};

export default DetailedEvent;

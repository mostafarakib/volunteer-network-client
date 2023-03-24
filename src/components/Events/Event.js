import React from "react";
import { Link } from "react-router-dom";
import "./Event.scss";

const Event = (props) => {
  const { id, _id, name, img } = props.event;

  return (
    <div className="event-card">
      <div className="event-card-img-container">
        <img src={img} alt="eventImage" />
        <div
          className={`event-card-name-bg-${id
            .toString()
            .slice(-1)} event-card-name-container`}
        >
          <p>{name}</p>
        </div>
      </div>
      <div className="event-card-btn-container">
        <Link to={`/events/${_id}`}>
          <button className="login-button grey-bg">Show Details</button>
        </Link>
        <button
          className="login-button mt-4"
          onClick={() => {
            props.removeEvent(_id);
          }}
        >
          Remove Event
        </button>
      </div>
    </div>
  );
};

export default Event;

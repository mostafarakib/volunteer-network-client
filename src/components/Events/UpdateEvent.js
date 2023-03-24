import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./NewEvent.scss";

const UpdateEvent = () => {
  const [event, setEvent] = useState({});
  const { eventId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/events/${eventId}`)
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, []);

  const nameChangeHandler = (e) => {
    const updatedName = e.target.value;
    const updatedEvent = { ...event };
    updatedEvent.name = updatedName;
    setEvent(updatedEvent);
  };
  const imgChangeHandler = (e) => {
    const updatedImg = e.target.value;
    const updatedEvent = { ...event };
    updatedEvent.img = updatedImg;
    setEvent(updatedEvent);
  };
  const descriptionChangeHandler = (e) => {
    const updatedDescription = e.target.value;
    const updatedEvent = { ...event };
    updatedEvent.description = updatedDescription;
    setEvent(updatedEvent);
  };

  const updateEventHandler = (e) => {
    fetch(`http://localhost:5000/events/${eventId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(event),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Updated Successfully");
          setEvent({});
        }
      });

    e.preventDefault();
  };
  return (
    <div className="new_event-container">
      <div className="new_event-form-container">
        <form className="new_event-form" onSubmit={updateEventHandler}>
          <h2>Update: {event.name}</h2>
          <input
            className="focus:ring-0 focus:ring-offset-0"
            type="text"
            value={event.name}
            onChange={nameChangeHandler}
          />
          <input
            className="focus:ring-0 focus:ring-offset-0"
            type="text"
            value={event.img}
            onChange={imgChangeHandler}
          />
          <textarea
            className="focus:ring-0 focus:ring-offset-0"
            rows="7"
            placeholder="Event Description"
            value={event.description}
            onChange={descriptionChangeHandler}
          ></textarea>
          <input
            className="login-button content-center"
            type="submit"
            value="Update Event"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateEvent;

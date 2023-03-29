import React, { useRef, useState } from "react";
import "./NewEvent.scss";

const NewEvent = () => {
  const [totalEvent, setTotalEvent] = useState(0);
  const nameRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();

  const createEventHandler = (e) => {
    const name = nameRef.current.value;
    const img = imageRef.current.value;
    const description = descriptionRef.current.value;
    const id = totalEvent + 1;

    const newEvent = { id, name, description, img };

    fetch("https://volunteer-network-server-lqzu.onrender.com/events")
      .then((res) => res.json())
      .then((data) => setTotalEvent(data.length));

    fetch("https://volunteer-network-server-lqzu.onrender.com/events", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newEvent),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully added the event");
          e.target.reset();
        }
      });

    e.preventDefault();
  };
  return (
    <div className="new_event-container">
      <div className="new_event-form-container">
        <form className="new_event-form" onSubmit={createEventHandler}>
          <h2>Create a New Event</h2>
          <input
            className="focus:ring-0 focus:ring-offset-0"
            type="text"
            placeholder="Event Name"
            ref={nameRef}
          />
          <input
            className="focus:ring-0 focus:ring-offset-0"
            type="text"
            placeholder="Image URL"
            ref={imageRef}
          />
          <textarea
            className="focus:ring-0 focus:ring-offset-0"
            rows="7"
            placeholder="Event Description"
            ref={descriptionRef}
          ></textarea>
          <input
            className="login-button content-center"
            type="submit"
            value="Create Event"
          />
        </form>
      </div>
    </div>
  );
};

export default NewEvent;

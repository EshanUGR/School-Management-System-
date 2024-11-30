import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

import axios from "axios";
import {
  EventCalendarContainer,
  Content,
  CalendarContainer,
  Event,
  AddEventForm,
  EventInput,
  AddEventButton,
  ErrorText,
  Events,
} from "../../styles/EventCalendarStyles";

const EventSection = () => {

  const [event, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/events/getall"
      );

      setEvents(response.data.event || []);
    } catch (error) {
      console.log("Error fetching teachers:", error);
    }
  };

  const addEvent = async (e) => {
    e.prventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/events/create",
        {
          event: newEvent,
        }
      );
      setEvents([...event, response.data.event]);

      setNewEvent("");
    } catch (error) {
      console.log("Error adding event:", error);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("Erro adding event");
      }
    }
  };

    return (
      <EventCalendarContainer>
        <Sidebar />
        <Content>
          <h2>Event and Calender</h2>
          <div>Current Time:</div>
          <CalendarContainer>
            {/* dispaly the calendar */}
            Calendar
          </CalendarContainer>
          <AddEventForm onSubmit={addEvent}>
            <h2>Add New Event</h2>
            <EventInput
              type="text"
              value={newEvent}
              onChange={(e) => setNewEvent(e.target.value)}
              placeholder="Enter Event"
            />
            <AddEventButton type="submit">Add Event</AddEventButton>
          </AddEventForm>

          <Events>
            <h2>Events</h2>

            {event.map((event, index) => {
              <Event key={index}>{event}</Event>;
            })}
          </Events>
        </Content>
      </EventCalendarContainer>
    );
 
};

export default EventSection;

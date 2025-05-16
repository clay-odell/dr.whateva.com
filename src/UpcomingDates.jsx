import { useState, useEffect } from "react";
import "./UpcomingDates.css";

const UpcomingDates = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("/events.json")
            .then(res => res.json())
            .then(data => {
                const now = new Date();
                now.setSeconds(0, 0); // Normalize comparison
    
                const upcomingEvents = data.map(event => {
                    const eventDate = new Date(`${event.date}T12:00:00`); // Avoid time zone shifting
    
                    return { ...event, eventDate };
                }).filter(event => {
                    if (event.venue === "Private Event") {
                        return event.eventDate >= now; // Keep Private Events visible all day
                    } else {
                        const [startHour, startMin = "00"] = event.time.split("-")[0].split(":").map(num => parseInt(num, 10) || 0);
                        event.eventDate.setHours(startHour, startMin, 0, 0); // Apply correct start time
                        return event.eventDate >= now; // Remove after the event starts
                    }
                });
    
                setEvents(upcomingEvents);
            })
            .catch(err => console.error("Error loading events:", err));
    }, []);
    

    // Convert military time (24-hour) to standard AM/PM format
    const convertToStandardTime = (time) => {
        if (!time || typeof time !== "string") return "Invalid Time"; // Catch bad input

        const [hour, minute = "00"] = time.split(":").map(num => parseInt(num, 10) || 0); // Ensure numeric values
        const amPm = hour >= 12 ? "PM" : "AM";
        const standardHour = hour % 12 || 12;

        return `${standardHour}:${minute.toString().padStart(2, "0")} ${amPm}`;
    };

    const formatDate = (date) => {
        return new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric" }).format(new Date(date));
    };

    return (
        <>
            <h1 className="header">Upcoming Shows</h1>
            <ul className="dates">
                {events.length > 0 ? (
                    events.map((event, index) => (
                        <li key={index}>
                            {formatDate(event.eventDate)}: {event.venue} {convertToStandardTime(event.time)}
                        </li>
                    ))
                ) : (
                    <li>No upcoming events.</li>
                )}
            </ul>
        </>
    );
};

export default UpcomingDates;

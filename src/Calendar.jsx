import "./Calendar.css";
const Calendar = () => {
    return (
        <>
        <h1 className="header">Calendar</h1>
        <div className="calendar-container">
            <iframe
                src="https://calendar.google.com/calendar/embed?src=652f0d322bd993d17bd71e616dfe8f9d2e928e365ad5999c2badd24646edca2c%40group.calendar.google.com&ctz=America%2FChicago"
              
            ></iframe>
        </div>
        </>
    );
};

export default Calendar;

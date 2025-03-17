import React, { useState, useEffect } from "react";
import "../styles/agenda.css";
const agendaData = [
  {
    day: "DAY 3",
    date: "Sat 22. 02. 2025",
    events: [
      { time: "2 AM", description: "Midnight break" },
      { time: "7 AM - 8 AM", description: "Breakfast" },
      { time: "12 AM", description: "Submissions" },
      { time: "12:45 AM - 1:45 PM", description: "Lunch break" },
      { time: "2:30 PM - 4 PM", description: "Networking session" },
      {
        time: "4 PM - 5 PM",
        description: "Closing ceremony + announcement of the winners",
      },
    ],
  },
  {
    day: "DAY 1",
    date: "Thu 20. 02. 2025",
    events: [
      { time: "4 PM - 6 PM", description: "Check In" },
      { time: "6 PM - 7 PM", description: "Opening Ceremony" },
      { time: "7 PM - 9 PM", description: "Let the hack begin + ice breaking" },
      { time: "9 PM - 10 PM", description: "Dinner break" },
    ],
  },
  {
    day: "DAY 2",
    date: "Fri 21. 02. 2025",
    events: [
      { time: "2 AM", description: "Midnight break" },
      { time: "7 AM - 10 AM", description: "Breakfast" },
      { time: "10 AM - 11 AM", description: "Workshop : A" },
      { time: "12 AM - 3 PM", description: "Lunch break" },
      { time: "5 PM - 6 PM", description: "Coffee break" },
      { time: "7 PM - 8 PM", description: "Workshop : B" },
      { time: "9 PM - 10 PM", description: "Dinner break" },
    ],
  },
];

const Agenda = () => {
  const [order, setOrder] = useState([2, 0, 1]); // Initial order
  const [activeIndex, setActiveIndex] = useState(1); // Day 1 is active first
  const [progress, setProgress] = useState(0); // Track progress for the line
  const [isPaused, setIsPaused] = useState(false); // Pause state

  useEffect(() => {
    if (isPaused) return; // Stop the animation when paused

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextDay(); // Move to the next day when progress is full
          return 0; // Reset progress
        }
        return prev + 1;
      });
    }, 30); // 100 steps in 3 seconds (30ms * 100 = 3000ms)

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextDay = () => {
    setOrder((prevOrder) => [prevOrder[1], prevOrder[2], prevOrder[0]]);
    setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    setProgress(0); // Reset progress bar
  };

  const prevDay = () => {
    setOrder((prevOrder) => [prevOrder[2], prevOrder[0], prevOrder[1]]);
    setActiveIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
    setProgress(0); // Reset progress bar
  };

  return (
    <div className="agenda-container">
      <h1>Agenda</h1>
      <div className="agenda">
        <div className="agenda-cards">
          {order.map((index, pos) => {
            const { day, date, events } = agendaData[index]; // Get the actual data
            return (
              <div key={index} className={`card ${pos === 1 ? "active" : ""}`}>
                <h2>{day}</h2>
                <p>{date}</p>
                <ul>
                  {events.map((event, i) => (
                    <li key={i}>
                      <strong>{event.time} :</strong>{" "}
                      <span>{event.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Controls */}
      <div className="controls">
        <button onClick={prevDay}>◀</button>
        <button onClick={() => setIsPaused(!isPaused)}>
          {isPaused ? "▶" : "⏸"}
        </button>
        <button onClick={nextDay}>▶</button>
      </div>
    </div>
  );
};

export default Agenda;

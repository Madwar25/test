import React, { useState } from "react";
import "./App.css";

const tasks = [
  { id: 1, type: "Reparation", customer: "Anders Thomsen", address: "Parkvej 12, 7100 Vejle", date: "29-03-2025" },
  { id: 2, type: "Serviceeftersyn", customer: "Mette Larsen", address: "Birketoften 7, 5250 Odense", date: "29-03-2025" },
  { id: 3, type: "Fremvisning", customer: "Janus Holm", address: "Nordre Ringgade 98, 8000 Aarhus", date: "30-03-2025" },
];

const statuses = ["Planlagt", "Under klargøring", "Reparation i gang", "Kvalitetssikring", "Afsluttet", "Andet"];

function App() {
  const [activeTask, setActiveTask] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [status, setStatus] = useState("Planlagt");

  return (
    <div className="container">
      <h1>Dagens opgaver</h1>
      <div className="task-list">
        {tasks.map(task => (
          <div key={task.id} className="task-card" onClick={() => setActiveTask(task)}>
            <p><strong>{task.type}</strong></p>
            <p>{task.customer}</p>
            <p className="small">{task.address}</p>
            <p className="small">Dato: {task.date}</p>
          </div>
        ))}
      </div>

      {activeTask && (
        <div className="task-details">
          <h2>Aktiv opgave</h2>
          <p><strong>{activeTask.type} – {activeTask.customer}</strong></p>
          <p className="small">{activeTask.address}</p>
          <label>Status:
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              {statuses.map((s, i) => <option key={i} value={s}>{s}</option>)}
            </select>
          </label>
          <div className="button-group">
            <button onClick={() => setStartTime(new Date())}>Start opgave</button>
            <button onClick={() => setEndTime(new Date())}>Afslut opgave</button>
          </div>
          {startTime && <p className="small">Start: {startTime.toLocaleTimeString()}</p>}
          {endTime && <p className="small">Slut: {endTime.toLocaleTimeString()}</p>}
        </div>
      )}
    </div>
  );
}

export default App;

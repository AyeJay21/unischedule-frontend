import React, { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import { SketchPicker } from "react-color";
import "./TimeTable.css";

type CellData = {
  subject: string;
  color: string; // Jede Zelle hat jetzt ihre eigene Farbe
};

type Day = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
type Hour =
  | "8:00-9:00"
  | "9:00-10:00"
  | "10:00-11:00"
  | "11:00-12:00"
  | "12:00-13:00"
  | "13:00-14:00"
  | "14:00-15:00"
  | "15:00-16:00"
  | "16:00-17:00"
  | "17:00-18:00";

const TimeTable = () => {
  const [schedule, setSchedule] = useState<Record<Day, Record<Hour, CellData>>>(
    {
      Monday: {
        "8:00-9:00": { subject: "Math", color: "#FF1313" },
        "9:00-10:00": { subject: "Physics", color: "#0C7FFC" },
        "10:00-11:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "11:00-12:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "12:00-13:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "13:00-14:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "14:00-15:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "15:00-16:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "16:00-17:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "17:00-18:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
      },
      Tuesday: {
        "8:00-9:00": { subject: "Chemistry", color: "#F5A623" },
        "9:00-10:00": { subject: "Biology", color: "#00C400" },
        "10:00-11:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "11:00-12:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "12:00-13:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "13:00-14:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "14:00-15:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "15:00-16:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "16:00-17:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "17:00-18:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
      },
      Wednesday: {
        "8:00-9:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "9:00-10:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "10:00-11:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "11:00-12:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "12:00-13:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "13:00-14:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "14:00-15:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "15:00-16:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "16:00-17:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "17:00-18:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
      },
      Thursday: {
        "8:00-9:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "9:00-10:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "10:00-11:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "11:00-12:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "12:00-13:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "13:00-14:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "14:00-15:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "15:00-16:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "16:00-17:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "17:00-18:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
      },
      Friday: {
        "8:00-9:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "9:00-10:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "10:00-11:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "11:00-12:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "12:00-13:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "13:00-14:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "14:00-15:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "15:00-16:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "16:00-17:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
        "17:00-18:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
        },
      },
    }
  );

  const [selectedDay, setSelectedDay] = useState<Day | null>(null);
  const [selectedHour, setSelectedHour] = useState<Hour | null>(null);
  const [color, setColor] = useState({ r: 255, g: 255, b: 255, a: 1 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const milliSecond = 100;

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const days: Day[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const hours: Hour[] = [
    "8:00-9:00",
    "9:00-10:00",
    "10:00-11:00",
    "11:00-12:00",
    "12:00-13:00",
    "13:00-14:00",
    "14:00-15:00",
    "15:00-16:00",
    "16:00-17:00",
    "17:00-18:00",
  ];

  // Convert hex to rgba
  const hexToRgba = (hex: string) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b, a: 1 };
  };

  // Parse rgba string
  const parseRgba = (rgba: string) => {
    const match = rgba.match(
      /rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*(\d*(?:\.\d+)?)?\)/
    );
    if (match) {
      return {
        r: parseInt(match[1], 10),
        g: parseInt(match[2], 10),
        b: parseInt(match[3], 10),
        a: match[4] ? parseFloat(match[4]) : 1,
      };
    }
    return { r: 255, g: 255, b: 255, a: 1 }; // Fallback
  };

  // Long press
  const handleMouseDown = (day: Day, hour: Hour) => {
    timerRef.current = setTimeout(() => {
      setSelectedDay(day);
      setSelectedHour(hour);
      const cellColor = schedule[day][hour].color;
      const rgbaColor = cellColor.startsWith("#")
        ? hexToRgba(cellColor)
        : parseRgba(cellColor);
      setColor(rgbaColor);
      setIsModalOpen(true);
    }, milliSecond);
  };

  // Clear the timer
  const handleMouseUp = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  // Add subject
  const handleClick = (day: Day, hour: Hour) => {
    if (!isModalOpen) {
      const subject = prompt("Enter subject:");
      if (subject !== null) {
        // Wenn das Fach bereits existiert, hole die Standardfarbe, sonst behalte die aktuelle Zellenfarbe
        const defaultColor = isSubjectAdded(subject) || schedule[day][hour].color;
        setSchedule((prev) => ({
          ...prev,
          [day]: {
            ...prev[day],
            [hour]: { subject, color: defaultColor },
          },
        }));
      }
    }
  };

  // Change the color
  const handleColorChange = (color: any) => {
    setColor(color.rgb);
  };

  // Save the color
  const handleSave = () => {
    if (selectedDay && selectedHour) {
      const rgbaString = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
      setSchedule((prev) => ({
        ...prev,
        [selectedDay]: {
          ...prev[selectedDay],
          [selectedHour]: {
            ...prev[selectedDay][selectedHour],
            color: rgbaString, // Speichere die Farbe unabhängig für diese Zelle
          },
        },
      }));
    }
    setIsModalOpen(false);
  };

  // Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  // Check if subject is already added and return its default color if it exists
  const isSubjectAdded = (subject: string): string | null => {
    for (const day of Object.keys(schedule) as Day[]) {
      for (const hour of Object.keys(schedule[day]) as Hour[]) {
        if (schedule[day][hour].subject === subject && schedule[day][hour].subject.trim() !== "") {
          return schedule[day][hour].color; // Gibt die Farbe des ersten gefundenen Eintrags zurück
        }
      }
    }
    return null; // Keine Farbe gefunden, neue Zelle bekommt Standardfarbe
  };

  // Render
  /*################################################*/
  return (
    <div>
      <div className="darkModeContainer">
        <h1 className="timeTable">Timetable</h1>
        <button className="darkModeButton" onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Time</th>
              {days.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hours.map((hour) => (
              <tr key={hour}>
                <td>{hour}</td>
                {days.map((day) => (
                  <td
                    key={day}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      handleMouseDown(day, hour);
                    }}
                    onMouseUp={handleMouseUp}
                    onClick={() => handleClick(day, hour)}
                    onContextMenu={(e) => e.preventDefault()} // Verhindert das Kontextmenü
                    style={{
                      backgroundColor:
                        schedule[day][hour].subject.trim() === ""
                          ? "var(--table-cell-background-color)"
                          : schedule[day][hour].color, // Verwende die Farbe der spezifischen Zelle
                    }}
                  >
                    {schedule[day][hour].subject}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Edit Schedule"
        className="modal"
        overlayClassName="overlay"
        style={{
          content: {
            maxWidth: "90%",
            width: "420px",
            minHeight: "300px",
            overflow: "auto",
          },
          overlay: {
            zIndex: 1000,
          },
        }}
      >
        <h2>Edit Schedule</h2>
        <p>
          Day: {selectedDay}, Hour: {selectedHour}
        </p>
        <SketchPicker color={color} onChange={handleColorChange} />
        <div
          style={{
            marginTop: "24px",
            display: "flex",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsModalOpen(false)}>Cancel</button>
        </div>
      </Modal>
    </div>
  );
};

export default TimeTable;
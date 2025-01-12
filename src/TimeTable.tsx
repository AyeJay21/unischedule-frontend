import React, { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import { SketchPicker } from "react-color";
import "./TimeTable.css";

type CellData = {
  subject: string;
  color: string;
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
    }, milliSecond); // 100ms for long press
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
        setSchedule((prev) => ({
          ...prev,
          [day]: {
            ...prev[day],
            [hour]: { ...prev[day][hour], subject },
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
            color: rgbaString,
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

  // Check if subject is already added
  const isSubjectAdded = (subject: string): string | null => {
    for (const day of Object.keys(schedule) as Day[]) {
      for (const hour of Object.keys(schedule[day]) as Hour[]) {
        if (schedule[day][hour].subject === subject) {
          return schedule[day][hour].color;
        }
      }
    }
    return null;
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
                          : isSubjectAdded(schedule[day][hour].subject) || schedule[day][hour].color,
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
      >
        <h2>Edit Schedule</h2>
        <p>
          Day: {selectedDay}, Hour: {selectedHour}
        </p>
        <SketchPicker color={color} onChange={handleColorChange} />
        <button onClick={handleSave}>Save</button>
        <button onClick={() => setIsModalOpen(false)}>Cancel</button>
      </Modal>
    </div>
  );
};

export default TimeTable;

//TODO
//If subject gets added a second time color it like the first one
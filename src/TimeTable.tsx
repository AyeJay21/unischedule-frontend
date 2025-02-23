import React, { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import { SketchPicker } from "react-color";
import "./TimeTable.css";

type ColorType =
  | "glossy"
  | "matte"
  | "metallic"
  | "satin"
  | "pearl"
  | "neon"
  | "pastel"
  | "chrome"; // Erweiterte Farbtypen

type CellData = {
  subject: string;
  color: string; // RGB- oder Hex-Farbe
  colorType: ColorType; // Typ der Farbe (erweiterte Optionen)
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
        "8:00-9:00": { subject: "Math", color: "#FF1313", colorType: "glossy" },
        "9:00-10:00": { subject: "Physics", color: "#0C7FFC", colorType: "glossy" },
        "10:00-11:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy", // Standardwert für leere Zellen
        },
        "11:00-12:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "12:00-13:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "13:00-14:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "14:00-15:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "15:00-16:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "16:00-17:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "17:00-18:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
      },
      Tuesday: {
        "8:00-9:00": { subject: "Chemistry", color: "#F5A623", colorType: "glossy" },
        "9:00-10:00": { subject: "Biology", color: "#00C400", colorType: "glossy" },
        "10:00-11:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "11:00-12:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "12:00-13:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "13:00-14:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "14:00-15:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "15:00-16:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "16:00-17:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "17:00-18:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
      },
      Wednesday: {
        "8:00-9:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "9:00-10:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "10:00-11:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "11:00-12:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "12:00-13:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "13:00-14:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "14:00-15:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "15:00-16:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "16:00-17:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "17:00-18:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
      },
      Thursday: {
        "8:00-9:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "9:00-10:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "10:00-11:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "11:00-12:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "12:00-13:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "13:00-14:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "14:00-15:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "15:00-16:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "16:00-17:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "17:00-18:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
      },
      Friday: {
        "8:00-9:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "9:00-10:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "10:00-11:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "11:00-12:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "12:00-13:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "13:00-14:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "14:00-15:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "15:00-16:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "16:00-17:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
        "17:00-18:00": {
          subject: "",
          color: "var(--table-cell-background-color)",
          colorType: "glossy",
        },
      },
    }
  );

  const [selectedDay, setSelectedDay] = useState<Day | null>(null);
  const [selectedHour, setSelectedHour] = useState<Hour | null>(null);
  const [color, setColor] = useState({ r: 255, g: 255, b: 255, a: 1 });
  const [colorType, setColorType] = useState<ColorType>("glossy"); // Standardwert für Farbtyp
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

  // Füge diesen useEffect hinzu
useEffect(() => {
  const root = document.documentElement;
  if (isDarkMode) {
    root.style.setProperty('--cell-color', '');
  } else {
    root.style.setProperty('--cell-color', '');
  }
}, [isDarkMode]);

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
      const cellColorType = schedule[day][hour].colorType;
      const rgbaColor = cellColor.startsWith("#")
        ? hexToRgba(cellColor)
        : parseRgba(cellColor);
      setColor(rgbaColor);
      setColorType(cellColorType); // Setze den aktuellen Farbtyp
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
        // Wenn das Fach bereits existiert, hole die Standardfarbe und Farbtyp, sonst behalte die aktuelle Zellenfarbe
        const defaultColor = isSubjectAdded(subject) || schedule[day][hour].color;
        const defaultColorType = getDefaultColorType(subject) || "glossy"; // Standard-Farbtyp
        setSchedule((prev) => ({
          ...prev,
          [day]: {
            ...prev[day],
            [hour]: { subject, color: defaultColor, colorType: defaultColorType },
          },
        }));
      }
    }
  };

  // Change the color
  const handleColorChange = (color: any) => {
    setColor(color.rgb);
  };

  // Change the color type
  const handleColorTypeChange = (newColorType: ColorType) => {
    setColorType(newColorType);
  };

  // Save the color and color type for all filled cells
  const handleSave = () => {
    if (selectedDay && selectedHour) {
      const rgbaString = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
      setSchedule((prev) => {
        // Aktualisiere die Farbe nur für die ausgewählte Zelle
        const updatedSchedule = {
          ...prev,
          [selectedDay]: {
            ...prev[selectedDay],
            [selectedHour]: {
              ...prev[selectedDay][selectedHour],
              color: rgbaString,
              colorType: colorType, // Speichere den gewählten Farbtyp
            },
          },
        };

        // Aktualisiere den Farbtyp für alle gefüllten Zellen
        const newSchedule = { ...updatedSchedule };
        for (const day of days) {
          for (const hour of hours) {
            if (newSchedule[day][hour].subject.trim() !== "") {
              newSchedule[day] = {
                ...newSchedule[day],
                [hour]: {
                  ...newSchedule[day][hour],
                  colorType: colorType, // Setze den neuen Farbtyp für alle gefüllten Zellen
                },
              };
            }
          }
        }

        return newSchedule;
      });
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
    return null; // Keine Farbe gefunden
  };

  // Get default color type for a subject (can be expanded with a mapping)
  const getDefaultColorType = (subject: string): ColorType | null => {
    // Hier kannst du eine Mapping definieren, welche Farbtypen standardmäßig für jedes Fach gelten
    const subjectColorTypes: Record<string, ColorType> = {
      "Math": "glossy",
      "Physics": "metallic",
      "Chemistry": "matte",
      "Biology": "glossy",
    };
    return subjectColorTypes[subject] || "glossy"; // Standardwert ist "glossy"
  };

  // Render
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
                  onContextMenu={(e) => e.preventDefault()}
                  className={schedule[day][hour].subject.trim() === "" ? "" : schedule[day][hour].colorType}
                  style={{
                    backgroundColor:
                      schedule[day][hour].subject.trim() === ""
                        ? "var(--table-cell-background-color)"
                        : applyColorEffect(schedule[day][hour].color, schedule[day][hour].colorType),
                    transition: "all 0.3s ease", // Flüssige Übergänge für Hover und Effekte
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
        isOpen={isModalOpen}  // Korrigierter Tippfehler (war 'isObject')
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
        <div style={{ marginTop: "12px" }}>
          <label style={{ marginRight: "10px", color: "var(--text-color)" }}>Color Style:</label>
          <select
            value={colorType}
            onChange={(e) => handleColorTypeChange(e.target.value as ColorType)}
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid var(--table-border-color)",
              backgroundColor: "var(--table-cell-background-color)",
              color: "var(--text-color)",
              fontSize: "14px",
              transition: "all 0.3s ease",
            }}
          >
            <option value="glossy">Glossy</option>
            <option value="matte">Matte</option>
            <option value="metallic">Metallic</option>
            <option value="satin">Satin</option>
            <option value="pearl">Pearl</option>
            <option value="neon">Neon</option>
            <option value="pastel">Pastel</option>
            <option value="chrome">Chrome</option>
          </select>
        </div>
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

// Funktion, um Farbeffekte basierend auf dem Farbtyp anzuwenden
const applyColorEffect = (color: string, colorType: ColorType): string => {
  switch (colorType) {
    case "glossy":
      return `color-mix(in srgb, ${color} 95%, white 5%)`;
    case "matte":
      return color;
    case "metallic":
      return `color-mix(in srgb, ${color} 90%, #c0c0c0 10%)`;
    case "satin":
      return `color-mix(in srgb, ${color} 90%, #f0f0f0 10%)`;
    case "pearl":
      return `color-mix(in srgb, ${color} 85%, #fffaf0 15%)`;
    case "neon":
      return `color-mix(in srgb, ${color} 80%, #ffff00 20%)`;
    case "pastel":
      return `color-mix(in srgb, ${color} 60%, white 40%)`;
    case "chrome":
      return `color-mix(in srgb, ${color} 70%, #e0e0e0 30%)`;
    default:
      return color;
  }
};

export default TimeTable;
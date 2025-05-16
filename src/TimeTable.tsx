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
  | "chrome";

type CellData = {
  subject: string;
  color: string;
  colorType: ColorType;
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

// Neuer Typ für API-Kommunikation
type TimeTableEntry = {
  id?: number;
  day: string;
  startTime: string;
  endTime: string;
  subject: string;
  color?: string;
  colorType?: string;
};

// Neuer Typ für das Request-Objekt
type TimeTableEntryRequest = {
  day: string;
  startTime: string;
  endTime: string;
  subject: string;
  color?: string;
  colorType?: string;
};

const TimeTable = () => {
  // Initialer Zustand wie zuvor
  const [schedule, setSchedule] = useState<Record<Day, Record<Hour, CellData>>>(
    {
      Monday: {
        "8:00-9:00": { subject: "Math", color: "#FF1313", colorType: "glossy" },
        "9:00-10:00": {
          subject: "Physics",
          color: "#0C7FFC",
          colorType: "glossy",
        },
        // ... Rest der Initialisierung wie zuvor
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
      Tuesday: {
        "8:00-9:00": {
          subject: "Chemistry",
          color: "#F5A623",
          colorType: "glossy",
        },
        "9:00-10:00": {
          subject: "Biology",
          color: "#00C400",
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
      Wednesday: {
        // ... Restliche Initialisierung wie zuvor
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
        // ... Restliche Initialisierung wie zuvor
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
        // ... Restliche Initialisierung wie zuvor
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
  const [colorType, setColorType] = useState<ColorType>("glossy");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [loadingData, setLoadingData] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const milliSecond = 100;

  // Bestehende useEffects wie zuvor
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty("--cell-color", "");
    } else {
      root.style.setProperty("--cell-color", "");
    }
  }, [isDarkMode]);

  // NEUER useEffect: Lade Stundenplan beim ersten Laden
  useEffect(() => {
    fetchTimeTable();
    setError(null); // Fehler zurücksetzen
  }, []);

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

  // Helferfunktionen für Farben wie zuvor
  const hexToRgba = (hex: string) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b, a: 1 };
  };

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

  // NEUE FUNKTION: API-Endpunkt zum Abrufen des Stundenplans
  const fetchTimeTable = async () => {
    setLoadingData(true);
    setError(null);

    try {
      const userId = localStorage.getItem('userId');
      const username = localStorage.getItem('username');
      
      console.log("Current user data in TimeTable:", {
        userId,
        username
      });

      if (!userId) {
        throw new Error('User ID not found. Please sign in again.');
      }

      const response = await fetch(`http://localhost:8080/users/timetable`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Authentication failed. Please sign in again.');
        }
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const text = await response.text();
      console.log("Raw response:", text);

      if (!text || text.trim() === '') {
        console.log("Empty response received, initializing with empty schedule");
        const newSchedule = { ...schedule };
        for (const day of days) {
          for (const hour of hours) {
            newSchedule[day][hour] = {
              subject: "",
              color: "var(--table-cell-background-color)",
              colorType: "glossy",
            };
          }
        }
        setSchedule(newSchedule);
        return;
      }

      let data: TimeTableEntry[];
      try {
        data = JSON.parse(text);
      } catch (e) {
        console.error("Failed to parse JSON:", text);
        throw new Error('Invalid JSON response from server');
      }

      console.log("Parsed data:", data);

      if (data && data.length > 0) {
        const newSchedule = { ...schedule };

        // Reset all cells
        for (const day of days) {
          for (const hour of hours) {
            newSchedule[day][hour] = {
              subject: "",
              color: "var(--table-cell-background-color)",
              colorType: "glossy",
            };
          }
        }

        // Add API data
        data.forEach((entry) => {
          const day = entry.day as Day;
          const timeRange = `${entry.startTime}-${entry.endTime}` as Hour;

          if (days.includes(day) && hours.includes(timeRange)) {
            newSchedule[day][timeRange] = {
              subject: entry.subject,
              color: entry.color || "#FF1313",
              colorType: (entry.colorType as ColorType) || "glossy",
            };
          }
        });

        setSchedule(newSchedule);
      }
    } catch (err) {
      setError(
        "Fehler beim Laden des Stundenplans: " +
          (err instanceof Error ? err.message : String(err))
      );
      console.error("Fehler beim Laden des Stundenplans:", err);
    } finally {
      setLoadingData(false);
    }
  };

  // NEUE FUNKTION: API-Endpunkt zum Speichern eines neuen Eintrags
  const saveTimeTableEntry = async (
    day: Day,
    hour: Hour,
    subject: string,
    color: string,
    colorType: ColorType
  ) => {
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        throw new Error('User ID not found. Please sign in again.');
      }

      const [startTime, endTime] = hour.split("-");
    
      const entryRequest: TimeTableEntryRequest = {
        day: day,
        startTime: startTime,
        endTime: endTime,
        subject: subject,
        color: color,
        colorType: colorType,
      };
    
      const response = await fetch(`http://localhost:8080/users/timetable`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(entryRequest),
      });
    
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
    
      const data = await response.json();
      console.log("Eintrag erfolgreich gespeichert:", data);
      return true;
    } catch (err) {
      setError(
        "Fehler beim Speichern des Eintrags: " +
          (err instanceof Error ? err.message : String(err))
      );
      console.error("Fehler beim Speichern des Eintrags:", err);
      return false;
    }
  };

  // Long press - wie zuvor
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
      setColorType(cellColorType);
      setIsModalOpen(true);
    }, milliSecond);
  };

  // Clear the timer - wie zuvor
  const handleMouseUp = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  // Add subject - AKTUALISIERT: mit API-Speicherung
  const handleClick = async (day: Day, hour: Hour) => {
    if (!isModalOpen) {
      const subject = prompt("Enter subject:");
      if (subject !== null && subject.trim() !== "") {
        // Farbe und Farbtyp festlegen
        const defaultColor =
          isSubjectAdded(subject) || schedule[day][hour].color;
        const defaultColorType = getDefaultColorType(subject) || "glossy";

        // Lokalen Zustand aktualisieren
        setSchedule((prev) => ({
          ...prev,
          [day]: {
            ...prev[day],
            [hour]: {
              subject,
              color: defaultColor,
              colorType: defaultColorType,
            },
          },
        }));

        // An API senden
        const success = await saveTimeTableEntry(
          day,
          hour,
          subject,
          defaultColor,
          defaultColorType
        );

        // Bei Fehler Stundenplan neu laden (um lokalen und Server-Zustand zu synchronisieren)
        if (!success) {
          fetchTimeTable();
        }
      }
    }
  };

  // Change the color - wie zuvor
  const handleColorChange = (color: any) => {
    setColor(color.rgb);
  };

  // Change the color type - wie zuvor
  const handleColorTypeChange = (newColorType: ColorType) => {
    setColorType(newColorType);
  };

  // Save the color and color type - AKTUALISIERT: mit API-Speicherung
  const handleSave = async () => {
    if (selectedDay && selectedHour) {
      const rgbaString = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;

      // Lokalen Zustand aktualisieren
      setSchedule((prev) => {
        const updatedSchedule = {
          ...prev,
          [selectedDay]: {
            ...prev[selectedDay],
            [selectedHour]: {
              ...prev[selectedDay][selectedHour],
              color: rgbaString,
              colorType: colorType,
            },
          },
        };

        return updatedSchedule;
      });

      // Speichere Änderung über API
      if (schedule[selectedDay][selectedHour].subject.trim() !== "") {
        await saveTimeTableEntry(
          selectedDay,
          selectedHour,
          schedule[selectedDay][selectedHour].subject,
          rgbaString,
          colorType
        );
      }
    }
    setIsModalOpen(false);
  };

  // Dark Mode - wie zuvor
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  // Check if subject is already added - wie zuvor
  const isSubjectAdded = (subject: string): string | null => {
    for (const day of Object.keys(schedule) as Day[]) {
      for (const hour of Object.keys(schedule[day]) as Hour[]) {
        if (
          schedule[day][hour].subject === subject &&
          schedule[day][hour].subject.trim() !== ""
        ) {
          return schedule[day][hour].color;
        }
      }
    }
    return null;
  };

  // Get default color type - wie zuvor
  const getDefaultColorType = (subject: string): ColorType | null => {
    const subjectColorTypes: Record<string, ColorType> = {
      Math: "glossy",
      Physics: "metallic",
      Chemistry: "matte",
      Biology: "glossy",
    };
    return subjectColorTypes[subject] || "glossy";
  };

  // Render
  return (
    <div>
      <div className="darkModeContainer">
        <h1 className="timeTable">Timetable</h1>
        <button className="darkModeButton" onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        {/* NEUER BUTTON: Manuelles Neuladen des Stundenplans */}
        <button
          className="refreshButton"
          onClick={fetchTimeTable}
          disabled={loadingData}
        >
          {loadingData ? "Lädt..." : "Aktualisieren"}
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

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
                    className={
                      schedule[day][hour].subject.trim() === ""
                        ? ""
                        : schedule[day][hour].colorType
                    }
                    style={{
                      backgroundColor:
                        schedule[day][hour].subject.trim() === ""
                          ? "var(--table-cell-background-color)"
                          : applyColorEffect(
                              schedule[day][hour].color,
                              schedule[day][hour].colorType
                            ),
                      transition: "all 0.3s ease",
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
        <div style={{ marginTop: "12px" }}>
          <label style={{ marginRight: "10px", color: "var(--text-color)" }}>
            Color Style:
          </label>
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

// Funktion, um Farbeffekte anzuwenden - wie zuvor
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
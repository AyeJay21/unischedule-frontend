import { ColorType } from '../types/schedule';

interface SubjectColor {
    color: string;
    colorType: ColorType;
    aliases: string[];  // Verschiedene Namen für das Fach
}

export const subjectColors: Record<string, SubjectColor> = {
    // Mathematik
    "Mathe": {
        color: "#ff0000",
        colorType: "glossy",
        aliases: ["Math", "Mathematics", "Mathematik"]
    },
    // Biologie
    "Biologie": {
        color: "#00ff00",
        colorType: "glossy",
        aliases: ["Biology", "Bio", "Biologie"]
    },
    // Physik
    "Physik": {
        color: "#ffffff",
        colorType: "metallic",
        aliases: ["Physics", "Physik"]
    },
    // Chemie
    "Chemie": {
        color: "#0000ff",
        colorType: "matte",
        aliases: ["Chemistry", "Chemie"]
    },
    // Englisch
    "Englisch": {
        color: "#ffff00",
        colorType: "glossy",
        aliases: ["English", "Englisch"]
    },
    // Deutsch
    "Deutsch": {
        color: "#ff00ff",
        colorType: "glossy",
        aliases: ["German", "Deutsch"]
    },
    // Geschichte
    "Geschichte": {
        color: "#ffa500",
        colorType: "glossy",
        aliases: ["History", "Geschichte"]
    },
    // Informatik
    "Informatik": {
        color: "#00ffff",
        colorType: "metallic",
        aliases: ["Computer Science", "Informatik", "CS"]
    }
};

// Hilfsfunktion um Farbe für ein Fach zu finden
export const getSubjectColor = (subject: string): SubjectColor | undefined => {
    // Direkter Match
    if (subjectColors[subject]) {
        return subjectColors[subject];
    }

    // Suche in Aliases
    for (const [key, value] of Object.entries(subjectColors)) {
        if (value.aliases.includes(subject)) {
            return value;
        }
    }

    return undefined;
}; 